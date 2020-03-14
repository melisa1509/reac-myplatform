import { AMBASSADOR_LIST, SHOW_AMBASSADOR, LOAD_FORM_AMBASSADOR } from 'constants/actionTypes.jsx';
import { EDIT_AMBASSADOR, ERROR_EDIT_AMBASSADOR, SUCCESSFULL_EDIT } from 'constants/actionTypes';
import { NEW_AMBASSADOR } from 'constants/actionTypes';
import { EDIT_PASSWORD_AMBASSADOR } from 'constants/actionTypes';
import { DELETE_AMBASSADOR, SUCCESSFUL_DELETE } from 'constants/actionTypes';

export const getAmbassadorList = () => {
    return (dispatch) => {
        return fetch("https://api.interweavesolutions.org/ambassador")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: AMBASSADOR_LIST , payload: json.data });
        });
    }  
}
export const showAmbassador = key => {
    return (dispatch) => {
        return fetch("http://api.interweavesolutions.org/ambassador/show/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_AMBASSADOR, payload: json.data });
            dispatch ({ type: LOAD_FORM_AMBASSADOR, data: json.data });   
        })

    }
};

export const loadFormAmbassador = data => ({ type: LOAD_FORM_AMBASSADOR, data });

export const editAmbassador =() => {
    return (dispatch,getState) => {

        const reduxState = getState();
        const key = reduxState.form.ambassadorform.values.id;
      
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      
            var urlencoded = new URLSearchParams();
            urlencoded.append("username", reduxState.form.ambassadorform.values.username);
            urlencoded.append("firstName",reduxState.form.ambassadorform.values.first_name);
            urlencoded.append("lastName",reduxState.form.ambassadorform.values.last_name);
            urlencoded.append("language",reduxState.form.ambassadorform.values.language);
            urlencoded.append("country",reduxState.form.ambassadorform.values.country);
            urlencoded.append("city",reduxState.form.ambassadorform.values.city );
            urlencoded.append("whatsapp",reduxState.form.ambassadorform.values.whatsapp );
            urlencoded.append("code",reduxState.form.ambassadorform.values.code );
      
            var requestOptions = {
              method: 'PUT',
              headers: myHeaders,
              body: urlencoded,
              redirect: 'follow'
            }
    
        return fetch("http://api.interweavesolutions.org/ambassador/edit/"+ key +"?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: EDIT_AMBASSADOR, payload: json.data });  
            dispatch ({ type: SUCCESSFULL_EDIT});  
        })
        .catch(json =>{
            dispatch({type:ERROR_EDIT_AMBASSADOR})
        })
      }
};

export const newAmbassador = ()=> {
    return (dispatch, getState) => {
    const reduxState = getState();
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
        urlencoded.append("username", reduxState.form.ambassadorNewform.values.username);
        urlencoded.append("firstName", reduxState.form.ambassadorNewform.values.first_name);
        urlencoded.append("lastName", reduxState.form.ambassadorNewform.values.last_name);
        urlencoded.append("language", reduxState.form.ambassadorNewform.values.language);
        urlencoded.append("country", reduxState.form.ambassadorNewform.values.country);
        urlencoded.append("city", reduxState.form.ambassadorNewform.values.city);
        urlencoded.append("whatsapp", reduxState.form.ambassadorNewform.values.whatsapp);
        urlencoded.append("code", reduxState.form.ambassadorNewform.values.code);
        urlencoded.append("password", reduxState.form.ambassadorNewform.values.password);
 
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
        return fetch("http://api.interweavesolutions.org/ambassador/new", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: NEW_AMBASSADOR, payload: json.data });
        })

    }
};


export const editPassword = (params,key) => {
    
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
        var urlencoded = new URLSearchParams();
        urlencoded.append("password", params.ambassadorPassword);
  
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };

    return (dispatch) => {
      return fetch("http://api.interweavesolutions.org/ambassador/editpassword/"+ key +"?callback=foo", requestOptions)
      .then(response => response.json())
      .then(json => {
          dispatch ({ type: EDIT_PASSWORD_AMBASSADOR, payload: json }); 
      });
  }
}
export const deleteAmbassador  = (key,redirect) => {

    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    return (dispatch) => {
      return fetch("http://api.interweavesolutions.org/ambassador/delete/"+ key +"?callback=foo", requestOptions)
      .then(response => response.json())
      .then(json => {
          dispatch ({ type: DELETE_AMBASSADOR, payload: json.data });
          dispatch ({ type: SUCCESSFUL_DELETE}); 
          redirect.push('/ambassador');
      });
  }
}
