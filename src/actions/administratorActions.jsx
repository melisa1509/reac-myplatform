import { ADMINISTRATOR_LIST, ADMINLANGUAGE_LIST } from 'constants/actionTypes';
import { BASE_URL} from 'constants/urlTypes.jsx';
import { NEW_ADMINISTRATOR, SUCCESSFULL_NEW } from 'constants/actionTypes';

export const getAdministratorList = () => {
    return (dispatch) => {
        return fetch(BASE_URL + "/admin/")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: ADMINISTRATOR_LIST , payload: json.data });
        });
    }  
}
export const getAdminLanguageList = () => {
    return (dispatch) => {
        return fetch(BASE_URL + "/admin/language")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: ADMINLANGUAGE_LIST , payload: json.data });
        });
    }  
}

export const newAdministrator = ()=> {
    return (dispatch, getState) => {
    const reduxState = getState();
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
        urlencoded.append("username", reduxState.form.adminNewform.values.username);
        urlencoded.append("first_name", reduxState.form.adminNewform.values.first_name);
        urlencoded.append("last_name", reduxState.form.adminNewform.values.last_name);
        urlencoded.append("language", reduxState.form.adminNewform.values.language);
        urlencoded.append("country", reduxState.form.adminNewform.values.country);
        urlencoded.append("roles", reduxState.form.adminNewform.values.role);
        urlencoded.append("language_grader", "es");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
        return fetch(BASE_URL + "/admin/new", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: NEW_ADMINISTRATOR, payload: json.data });
            dispatch ({ type: SUCCESSFULL_NEW}); 
        })

    }
};
