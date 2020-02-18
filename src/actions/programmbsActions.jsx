import { SHOW_PROGRAMMBS } from 'constants/actionTypes.jsx';
import { UPDATE_REVISION_PROGRAMMBS, LOAD_FORM_PROGRAMMBS } from 'constants/actionTypes';

export const getShowProgrammbs = key => {
    return (dispatch) => {
        return fetch("https://api.interweavesolutions.org/programmbs/show/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_PROGRAMMBS, payload: json.data });
            dispatch ({ type: LOAD_FORM_PROGRAMMBS, data: json.data });
        });
    }
    
}

export const editRevisionProgrammbs = () => {
    return (dispatch, getState) => {

        const reduxState = getState();
        const key = reduxState.form.programmbs.values.id;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("revisionplan", reduxState.form.programmbs.values.revisionplan);
        urlencoded.append("revisionproduct", reduxState.form.programmbs.values.revisionplan);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        return fetch("https://api.interweavesolutions.org/programmbs/update_revision/"+ key +"?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            alert();
        });

    }
    
}

export const loadFormProgrammbs = data => ({ type: LOAD_FORM_PROGRAMMBS, data });