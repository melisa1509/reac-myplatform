import { SHOW_USER, LOAD_FORM_USER, EDIT_USER,  ERROR_EDIT_USER, SUCCESSFULL_EDIT_USER, ERROR_REQUIRE_FIELDS } from 'constants/actionTypes.jsx';



export const showUser = key => {
    return (dispatch) => {
        return fetch("http://api.interweavesolutions.org/user/show/"+ key +"?callback=foo")
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
            dispatch ({ type: SUCCESSFULL_EDIT_USER});  
        })
        .catch(json =>{
            dispatch({type:ERROR_EDIT_USER})
        })
      }
};

export const errorRequireFields =() => ({ type: ERROR_REQUIRE_FIELDS})


