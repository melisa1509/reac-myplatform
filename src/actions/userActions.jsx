import { SHOW_USER, LOAD_FORM_USER, EDIT_USER } from 'constants/actionTypes.jsx';

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
      
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      
            var urlencoded = new URLSearchParams();
            urlencoded.append("username", );
            urlencoded.append("language","es");
            urlencoded.append("firstName",);
            urlencoded.append("lastName", );
            urlencoded.append("country", );
            urlencoded.append("city", );
            urlencoded.append("whatsapp", );
            urlencoded.append("code","2");
      
            var requestOptions = {
              method: 'PUT',
              headers: myHeaders,
              body: urlencoded,
              redirect: 'follow'
            }
    
        return fetch("http://localhost:8000/user/edit/3", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: EDIT_USER, payload: json.data });
        });
      }
};

