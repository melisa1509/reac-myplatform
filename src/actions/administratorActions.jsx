import { ADMINISTRATOR_LIST, ADMINLANGUAGE_LIST } from 'constants/actionTypes';
import { BASE_URL} from 'constants/urlTypes.jsx';
import { NEW_ADMINISTRATOR, SUCCESSFULL_NEW } from 'constants/actionTypes';
import { SHOW_ADMINISTRATOR, LOAD_FORM_ADMINISTRATOR } from 'constants/actionTypes';
import { jsonToArray } from "assets/functions/general.jsx";


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
        urlencoded.append("language_grader", jsonToArray(reduxState.form.adminNewform.values.language_grader));
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
        return fetch(BASE_URL + "/admin/new", requestOptions)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            dispatch ({ type: NEW_ADMINISTRATOR, payload: json.data });
            dispatch ({ type: SUCCESSFULL_NEW}); 
        })

    }
};

export const showAdministrator = key => {
    return (dispatch) => {
        return fetch(BASE_URL + "/admin/show/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_ADMINISTRATOR, payload: json.data });
            dispatch ({ type: LOAD_FORM_ADMINISTRATOR, data: json.data });   
        })

    }
};

export const loadFormAdministrator = data => ({ type: LOAD_FORM_ADMINISTRATOR, data });