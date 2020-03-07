import {GROUP_LIST} from 'constants/actionTypes.jsx';
import { LOAD_FORM_GROUP, SHOW_GROUP, EDIT_GROUP, SUCCESSFULL_EDIT, NEW_GROUP, DELETE_GROUP, SUCCESSFUL_DELETE } from 'constants/actionTypes';

export const getGroupList= () => {
    return (dispatch) => {
        return fetch("https://api.interweavesolutions.org/group/?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: GROUP_LIST, payload: json.data });
        });
    }
}


export const showGroup = key => {
    return (dispatch) => {
        return fetch("http://api.interweavesolutions.org/group/show/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_GROUP, payload: json.data });
            dispatch ({ type: LOAD_FORM_GROUP, data: json.data });   
        })

    }
};

export const editGroup = ()=> {
    return (dispatch, getState) => {
    const reduxState = getState();
    const key = reduxState.form.groupform.values.id;
  
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("name", reduxState.form.groupform.values.name);
        urlencoded.append("startDate", reduxState.form.groupform.values.start_date);
        urlencoded.append("finalDate", reduxState.form.groupform.values.final_date);
        urlencoded.append("graduationDate", reduxState.form.groupform.values.graduation_date);
        urlencoded.append("modality", reduxState.form.groupform.values.modality);
        urlencoded.append("program", reduxState.form.groupform.values.program);
        urlencoded.append("interweaveLocal", reduxState.form.groupform.values.interweave_local);
        urlencoded.append("authorizationCode", reduxState.form.groupform.values.authorization_code);

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        return fetch("http://api.interweavesolutions.org/group/edit/"+ key +"?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: EDIT_GROUP, payload: json.data });
            dispatch ({ type: SUCCESSFULL_EDIT});  
        })

    }
};

export const newGroup = ()=> {
    return (dispatch, getState) => {
    const reduxState = getState();
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpYXQiOjE1ODM1NTA1ODcsImV4cCI6MTU4MzU1NDE4Nywicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoiaXZvbjEyMyJ9.yAUBRaf1mt6Bg1kBjCxpQz4xGxNIpqxYzEkIYME29BA5HuRhmVvtvD7ErsV0eXRccEmea15ggMn1gYvJPcx_CSo0W16vhENIp3WN-e_2oM0Vj2utTUyxqA226TS4FZNFneoDj7Vo-m7ThyBP1wGa4RaZ9hJ-ry_8i4Z5n_4KDnr_5lKUSUIFVbJte82N-1qjzV-ICWSE7JYiHCbjL5SmBP46jEIz45wOxlfdM8X_9Tpg-wFKNL9Kjf6ju3RseQkMN1KoZmjsX9aZaie0jNc-pcHnflpEo-IC7AxrgNAkoLMaimSj1JrVasqLPqHLOTZVl9SxqnKwA3bHWwvp7r5TYHCRZ7Gq3NohbG-0l2BV08VkZAfoiGKay01x_YVkLTDjPk6UH1oTeuimFoJRL0P4efWF_g5yEk0otH6Rme4GkAqQqnBOzeD2JKbRIFG_Lo9lK3ZdlPH63y3nbUgXH6rh7DgL_gCTdUj8Ma-P0ciIAaOsito8Xj1QTNLH_cugcfyJyYo86zh3G7d6vvnctchPNPTeaJWAOSV_xLRAGnnsuukROSxKCnV5MyVnm0FaYQ4NV3GzguZ9anrWlER67CVRufTBlgq__B2h_TWNokXJbW9Ro6y0T8tIPgHUp73i587bDjC4BfA08aBpAKgCstDtvZoaksw60v_EqF54GnPcr8E");
   
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("name", reduxState.form.groupNewform.values.name);
    urlencoded.append("startDate",reduxState.form.groupNewform.values.start_date);
    urlencoded.append("finalDate", reduxState.form.groupNewform.values.final_date);
    urlencoded.append("modality", reduxState.form.groupNewform.values.modality);
    urlencoded.append("program", reduxState.form.groupNewform.values.program);
    urlencoded.append("graduationDate",reduxState.form.groupNewform.values.graduation_date);
    urlencoded.append("interweaveLocal",reduxState.form.groupNewform.values.interweave_local);
    urlencoded.append("authorizationCode",reduxState.form.groupNewform.values.authorization_code);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
        return fetch("http://api.interweavesolutions.org/group/new", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: NEW_GROUP, payload: json.data });
        })

    }
};
export const deleteGroup  = (key) => {
    
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    return (dispatch) => {
      return fetch("http://api.interweavesolutions.org/group/delete/"+ key +"?callback=foo", requestOptions)
      .then(response => response.json())
      .then(json => {
          dispatch ({ type: DELETE_GROUP, payload: json.data });
          dispatch ({ type: SUCCESSFUL_DELETE}); 
      });
  }
}