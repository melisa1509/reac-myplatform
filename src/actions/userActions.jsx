import { SHOW_USER, LOAD_FORM_USER, EDIT_USER, ERROR_EDIT_USER, SUCCESSFULL_EDIT, DELETE_USER, EDIT_PASSWORD_USER, SUCCESSFUL_DELETE} from 'constants/actionTypes.jsx';



export const showUser = key => {
    return (dispatch) => {
        return fetch("http://localhost:8000/user/show/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_USER, payload: json.data });
            dispatch ({ type: LOAD_FORM_USER, data: json.data });   
        })

    }
};

export const loadFormUser = data => ({ type: LOAD_FORM_USER, data });

export const editUser =() => {
    return (dispatch,getState) => {

        const reduxState = getState();
        const key = reduxState.form.userform.values.id;
      
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      
            var urlencoded = new URLSearchParams();
            urlencoded.append("username", reduxState.form.userform.values.username);
            urlencoded.append("language",reduxState.form.userform.values.language);
            urlencoded.append("firstName",reduxState.form.userform.values.first_name);
            urlencoded.append("lastName",reduxState.form.userform.values.last_name);
            urlencoded.append("country",reduxState.form.userform.values.country);
            urlencoded.append("city",reduxState.form.userform.values.city );
            urlencoded.append("whatsapp",reduxState.form.userform.values.whatsapp );
            urlencoded.append("code","2");
      
            var requestOptions = {
              method: 'PUT',
              headers: myHeaders,
              body: urlencoded,
              redirect: 'follow'
            }
    
        return fetch("http://api.interweavesolutions.org/user/edit/"+ key +"?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: EDIT_USER, payload: json.data });  
            dispatch ({ type: SUCCESSFULL_EDIT});  
        })
        .catch(json =>{
            dispatch({type:ERROR_EDIT_USER})
        })
      }
};

export const editPassword = (params) => {
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
        var urlencoded = new URLSearchParams();
        urlencoded.append("password", params.userPassword);
  
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };

    return (dispatch) => {
      return fetch("http://api.interweavesolutions.org/user/editpassword/2740", requestOptions)
      .then(response => response.json())
      .then(json => {
          dispatch ({ type: EDIT_PASSWORD_USER, payload: json });
      });
  }
}

export const deleteUser  = (key) => {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var urlencoded = new URLSearchParams();
    
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    return (dispatch) => {
      return fetch("http://localhost:8000/user/delete/"+ key +"?callback=foo", requestOptions)
      .then(response => response.json())
      .then(json => {
          dispatch ({ type: DELETE_USER, payload: json.data });
          dispatch ({ type: SUCCESSFUL_DELETE}); 
      });
  }
}
