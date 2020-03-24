import {GROUP_LIST} from 'constants/actionTypes.jsx';
import { LOAD_FORM_GROUP, SHOW_GROUP, EDIT_GROUP, SUCCESSFULL_EDIT, NEW_GROUP, DELETE_GROUP, SUCCESSFUL_DELETE, SUCCESSFULL_NEW} from 'constants/actionTypes';

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
export const loadFormGroup = data => ({ type: LOAD_FORM_GROUP, data });
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
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("id_ambassador",reduxState.form.groupNewform.values.id_ambassador);
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
            dispatch ({ type: SUCCESSFULL_NEW});  
        })

    }
};
export const deleteGroup  = (key, redirect) => {
    
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
          redirect.push('/group');
      });
  }
}

