import { SHOW_PROGRAMMBS, LOAD_FORM_PROGRAMMBS, SUCCESSFULL_EDIT_REVISION, ERROR_EDIT_REVISION, HIDE_REVISION_ALERT } from 'constants/actionTypes.jsx';
import { BASE_URL } from 'constants/urlTypes';

export const getShowProgrammbs = key => {
    return (dispatch) => {
        return fetch(BASE_URL + "/programmbs/show/"+ key +"?callback=foo")
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
        urlencoded.append("revisionproduct", reduxState.form.programmbs.values.revisionproduct);
        urlencoded.append("revisionprice", reduxState.form.programmbs.values.revisionprice);
        urlencoded.append("revisionpromotion", reduxState.form.programmbs.values.revisionpromotion);
        urlencoded.append("revisionprocess", reduxState.form.programmbs.values.revisionprocess);
        urlencoded.append("revisionpaperwork", reduxState.form.programmbs.values.revisionpaperwork);
        urlencoded.append("revisionquality", reduxState.form.programmbs.values.revisionquality);
        urlencoded.append("revisionservice", reduxState.form.programmbs.values.revisionservice);

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        return fetch( BASE_URL + "/programmbs/update_revision/" + key + "?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch({type:SUCCESSFULL_EDIT_REVISION})
        })
        .catch(json =>{
            dispatch({type:ERROR_EDIT_REVISION})
        });

    }
    
}

export const loadFormProgrammbs = data => ({ type: LOAD_FORM_PROGRAMMBS, data });

export const hideRevisionAlert = () => ({ type: HIDE_REVISION_ALERT })