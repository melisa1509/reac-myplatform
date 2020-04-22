import { ERROR_SEND_REVISION_PROJECT, SUCCESSFULL_SEND_REVISION_PROJECT, SHOW_PROGRAMSA, LOAD_FORM_PROGRAMSA, SUCCESSFULL_EDIT_REVISION, ERROR_EDIT_REVISION, HIDE_REVISION_ALERT, SUCCESSFULL_APPROVE_PROJECT, ERROR_APPROVE_PROJECT } from 'constants/actionTypes.jsx';
import { BASE_URL } from 'constants/urlTypes';

export const getShowProgramsa = key => {
    return (dispatch) => {
        return fetch(BASE_URL + "/programsa/show/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_PROGRAMSA, payload: json.data });
            dispatch ({ type: LOAD_FORM_PROGRAMSA, data: json.data });
        });
    }
    
}

export const editRevisionProgramsa = (redirect) => {
    return (dispatch, getState) => {

        const reduxState = getState();
        const key = reduxState.form.programsa.values.id;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("revisionplan", reduxState.form.programsa.values.revisionplan !== undefined ? reduxState.form.programsa.values.revisionplan : "");
        urlencoded.append("revisionproduct", reduxState.form.programsa.values.revisionproduct !== undefined ? reduxState.form.programsa.values.revisionproduct : "");
        urlencoded.append("revisionprice", reduxState.form.programsa.values.revisionprice !== undefined ? reduxState.form.programsa.values.revisionprice : "");
        urlencoded.append("revisionpromotion", reduxState.form.programsa.values.revisionpromotion !== undefined ? reduxState.form.programsa.values.revisionpromotion : "");
        urlencoded.append("revisionprocess", reduxState.form.programsa.values.revisionprocess !== undefined ? reduxState.form.programsa.values.revisionprocess : "");
        urlencoded.append("revisionpaperwork", reduxState.form.programsa.values.revisionpaperwork !== undefined ? reduxState.form.programsa.values.revisionpaperwork : "");
        urlencoded.append("revisionquality", reduxState.form.programsa.values.revisionquality !== undefined ? reduxState.form.programsa.values.revisionquality : "");
        urlencoded.append("revisionservice", reduxState.form.programsa.values.revisionservice !== undefined ? reduxState.form.programsa.values.revisionservice : "");

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        return fetch( BASE_URL + "/programsa/update_revision/" + key + "?callback=foo", requestOptions)
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
        const key = reduxState.form.programsa.values.id;

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

        return fetch( BASE_URL + "/programsa/approved?callback=foo", requestOptions)
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
        const key = reduxState.form.programsa.values.id;

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("id", key);
        urlencoded.append("revisionplan", reduxState.form.programsa.values.revisionplan !== undefined ? reduxState.form.programsa.values.revisionplan : "");
        urlencoded.append("revisionproduct", reduxState.form.programsa.values.revisionproduct !== undefined ? reduxState.form.programsa.values.revisionproduct : "");
        urlencoded.append("revisionprice", reduxState.form.programsa.values.revisionprice !== undefined ? reduxState.form.programsa.values.revisionprice : "");
        urlencoded.append("revisionpromotion", reduxState.form.programsa.values.revisionpromotion !== undefined ? reduxState.form.programsa.values.revisionpromotion : "");
        urlencoded.append("revisionprocess", reduxState.form.programsa.values.revisionprocess !== undefined ? reduxState.form.programsa.values.revisionprocess : "");
        urlencoded.append("revisionpaperwork", reduxState.form.programsa.values.revisionpaperwork !== undefined ? reduxState.form.programsa.values.revisionpaperwork : "");
        urlencoded.append("revisionquality", reduxState.form.programsa.values.revisionquality !== undefined ? reduxState.form.programsa.values.revisionquality : "");
        urlencoded.append("revisionservice", reduxState.form.programsa.values.revisionservice !== undefined ? reduxState.form.programsa.values.revisionservice : "");

        
        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };

        return fetch( BASE_URL + "/programsa/sendrevision?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch({type:SUCCESSFULL_SEND_REVISION_PROJECT})
        })
        .catch(json =>{
            dispatch({type:ERROR_SEND_REVISION_PROJECT})
        });

    }
    
}

export const loadFormProgramsa = data => ({ type: LOAD_FORM_PROGRAMSA, data });

export const hideRevisionAlert = () => ({ type: HIDE_REVISION_ALERT })

export const redirectDashboard = redirect => { 
    return (dispatch, getState) => {
        dispatch({ type: HIDE_REVISION_ALERT })
        return redirect.push('/dashboard');
    }
}