import {GRANT_LIST, MBS_IMAGE_ALERT, UPLOAD_IMAGE, DELETE_IMAGE_ALERT} from 'constants/actionTypes.jsx';
import { LOAD_FORM_GRANT, SHOW_GRANT, EDIT_GRANT, SUCCESSFULL_EDIT, NEW_GRANT, DELETE_GRANT, SUCCESSFULL_NEW, SHOW_GRANT_UPDATE} from 'constants/actionTypes';
import { BASE_URL } from 'constants/urlTypes.jsx';
import { SUCCESSFULL_REDIRECT } from 'constants/actionTypes';
import { NEW_GRANT_UPDATE } from 'constants/actionTypes';

export const getGrantList= () => {
    return (dispatch, getState) => {
    const reduxState = getState();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("id_ambassador", reduxState.loginReducer.active_user.id);
        urlencoded.append("role",reduxState.loginReducer.active_user.roles[0]);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        return fetch( BASE_URL + "/grant/?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: GRANT_LIST, payload: json.data });
        });
    }
}


export const showGrant = key => {
    return (dispatch) => {
        return fetch( BASE_URL + "/grant/show/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_GRANT, payload: json.data });
            dispatch ({ type: LOAD_FORM_GRANT, data: json.data });   
        })

    }
};

export const showGrantUpdate = key => {
    return (dispatch) => {
        return fetch( BASE_URL + "/grant/showupdate/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_GRANT_UPDATE, payload: json.data });
        })

    }
};

export const loadFormGrant = data => ({ type: LOAD_FORM_GRANT, data });
export const editGrant = ()=> {
    return (dispatch, getState) => {
    const reduxState = getState();
    const key = reduxState.form.grantform.values.id;
  
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("participantsNumber", reduxState.form.grantform.values.participants_number);
        urlencoded.append("date",reduxState.form.grantform.values.date);
        urlencoded.append("description", reduxState.form.grantform.values.description);
        urlencoded.append("amount", reduxState.form.grantform.values.amount); 

        var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        return fetch( BASE_URL + "/grant/edit/"+ key +"?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: EDIT_GRANT, payload: json.data });
            dispatch ({ type: SUCCESSFULL_EDIT});  
        })

    }
};

export const newGrant = ()=> {
    return (dispatch, getState) => {
    const reduxState = getState();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("id_ambassador",reduxState.form.grantNewform.values.id_ambassador);
    urlencoded.append("participantsNumber", reduxState.form.grantNewform.values.participants_number);
    urlencoded.append("date",reduxState.form.grantNewform.values.date);
    urlencoded.append("description", reduxState.form.grantNewform.values.description);
    urlencoded.append("amount", reduxState.form.grantNewform.values.amount);   
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
        return fetch( BASE_URL + "/grant/new", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: NEW_GRANT, payload: json.data });
            dispatch ({ type: SUCCESSFULL_NEW });  
        })
    }
};

export const newGrantUpdate = ()=> {
    return (dispatch, getState) => {
    const reduxState = getState();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("id_grant", reduxState.grantReducer.show_grant.id);
    urlencoded.append("file",reduxState.form.grantUpdateForm.values.file);
    urlencoded.append("description", reduxState.form.grantUpdateForm.values.description);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
        return fetch( BASE_URL + "/grant/newupdate", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: NEW_GRANT_UPDATE, payload: json.data });
            dispatch ({ type: SUCCESSFULL_NEW }); 
        })
    }
};
export const deleteGrant  = (key, redirect) => {
    
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    return (dispatch) => {
      return fetch(BASE_URL + "/grant/delete/"+ key +"?callback=foo", requestOptions)
      .then(response => response.json())
      .then(json => {
          dispatch ({ type: DELETE_GRANT, payload: json.data });
          redirect.push('/grant');
      });
  }
}

export const uploadImageAlert = (key) => ({ type: MBS_IMAGE_ALERT, payload:key })

export const uploadImage = ()=> {
    return (dispatch, getState) => {
    const reduxState = getState();

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

   
    var urlencoded = new URLSearchParams();
        urlencoded.append("id_student",  reduxState.grantReducer.id_student);
        urlencoded.append("file_name", reduxState.form.uploadform.values.name_image);
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
        return fetch(BASE_URL + "/programmbs/newfile", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: UPLOAD_IMAGE, payload: json.data }); 
            dispatch ({ type: SUCCESSFULL_EDIT});
        })

    }
};
export const deleteImageAlert = () => ({ type: DELETE_IMAGE_ALERT })

export const showGrantRedirect =  (redirect)  => {
    return (dispatch, getState ) => {        
        const reduxState = getState();
        const key = reduxState.grantReducer.new_grant.id
        dispatch ({ type: SUCCESSFULL_REDIRECT });  
        return redirect.push( '/grant/show/'+ key);
    }
}