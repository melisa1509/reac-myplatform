import { ERROR_SEND_REVISION_PROJECT, SUCCESSFULL_SEND_REVISION_PROJECT, SHOW_PROGRAMMBS, LOAD_FORM_PROGRAMMBS, SUCCESSFULL_EDIT_REVISION, ERROR_EDIT_REVISION, HIDE_REVISION_ALERT, SUCCESSFULL_APPROVE_PROJECT, ERROR_APPROVE_PROJECT } from 'constants/actionTypes.jsx';
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

export const editRevisionProgrammbs = (redirect) => {
    return (dispatch, getState) => {

        const reduxState = getState();
        const key = reduxState.form.programmbs.values.id;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("revisionplan", reduxState.form.programmbs.values.revisionplan !== undefined ? reduxState.form.programmbs.values.revisionplan : "");
        urlencoded.append("revisionproduct", reduxState.form.programmbs.values.revisionproduct !== undefined ? reduxState.form.programmbs.values.revisionproduct : "");
        urlencoded.append("revisionprice", reduxState.form.programmbs.values.revisionprice !== undefined ? reduxState.form.programmbs.values.revisionprice : "");
        urlencoded.append("revisionpromotion", reduxState.form.programmbs.values.revisionpromotion !== undefined ? reduxState.form.programmbs.values.revisionpromotion : "");
        urlencoded.append("revisionprocess", reduxState.form.programmbs.values.revisionprocess !== undefined ? reduxState.form.programmbs.values.revisionprocess : "");
        urlencoded.append("revisionpaperwork", reduxState.form.programmbs.values.revisionpaperwork !== undefined ? reduxState.form.programmbs.values.revisionpaperwork : "");
        urlencoded.append("revisionquality", reduxState.form.programmbs.values.revisionquality !== undefined ? reduxState.form.programmbs.values.revisionquality : "");
        urlencoded.append("revisionservice", reduxState.form.programmbs.values.revisionservice !== undefined ? reduxState.form.programmbs.values.revisionservice : "");

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

export const approveProject = (redirect) => {
    return (dispatch, getState) => {

        const reduxState = getState();
        const key = reduxState.form.programmbs.values.id;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("id", key);
        
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        return fetch( BASE_URL + "/programmbs/approved?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch({type:SUCCESSFULL_APPROVE_PROJECT})
        })
        .catch(json =>{
            dispatch({type:ERROR_APPROVE_PROJECT})
        });

    }
    
}

export const sendRevisionProject = (redirect) => {
    return (dispatch, getState) => {

        const reduxState = getState();
        const key = reduxState.form.programmbs.values.id;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("id", key);
        urlencoded.append("revisionplan", reduxState.form.programmbs.values.revisionplan !== undefined ? reduxState.form.programmbs.values.revisionplan : "");
        urlencoded.append("revisionproduct", reduxState.form.programmbs.values.revisionproduct !== undefined ? reduxState.form.programmbs.values.revisionproduct : "");
        urlencoded.append("revisionprice", reduxState.form.programmbs.values.revisionprice !== undefined ? reduxState.form.programmbs.values.revisionprice : "");
        urlencoded.append("revisionpromotion", reduxState.form.programmbs.values.revisionpromotion !== undefined ? reduxState.form.programmbs.values.revisionpromotion : "");
        urlencoded.append("revisionprocess", reduxState.form.programmbs.values.revisionprocess !== undefined ? reduxState.form.programmbs.values.revisionprocess : "");
        urlencoded.append("revisionpaperwork", reduxState.form.programmbs.values.revisionpaperwork !== undefined ? reduxState.form.programmbs.values.revisionpaperwork : "");
        urlencoded.append("revisionquality", reduxState.form.programmbs.values.revisionquality !== undefined ? reduxState.form.programmbs.values.revisionquality : "");
        urlencoded.append("revisionservice", reduxState.form.programmbs.values.revisionservice !== undefined ? reduxState.form.programmbs.values.revisionservice : "");

        
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        return fetch( BASE_URL + "/programmbs/sendrevision?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch({type:SUCCESSFULL_SEND_REVISION_PROJECT})
        })
        .catch(json =>{
            dispatch({type:ERROR_SEND_REVISION_PROJECT})
        });

    }
    
}

export const loadFormProgrammbs = data => ({ type: LOAD_FORM_PROGRAMMBS, data });

export const hideRevisionAlert = () => ({ type: HIDE_REVISION_ALERT })

export const redirectDashboard = redirect => { 
    return (dispatch, getState) => {
        dispatch({ type: HIDE_REVISION_ALERT })
        return redirect.push('/dashboard');
    }
}