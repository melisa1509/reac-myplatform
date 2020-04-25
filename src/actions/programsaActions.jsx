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
        urlencoded.append("id", key);
        urlencoded.append("revisionmision", reduxState.form.programsa.values.revisionmision !== undefined ? reduxState.form.programsa.values.revisionmision : "");
        urlencoded.append("revisiongenerategroups", reduxState.form.programsa.values.revisiongenerategroups !== undefined ? reduxState.form.programsa.values.revisiongenerategroups : "");
        urlencoded.append("revisionrule", reduxState.form.programsa.values.revisionrule !== undefined ? reduxState.form.programsa.values.revisionrule : "");
        urlencoded.append("revisiongraduate", reduxState.form.programsa.values.revisiongraduate !== undefined ? reduxState.form.programsa.values.revisiongraduate : "");
        urlencoded.append("revisionsupport", reduxState.form.programsa.values.revisionsupport !== undefined ? reduxState.form.programsa.values.revisionsupport : "");

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
        urlencoded.append("revisionmision", reduxState.form.programsa.values.revisionmision !== undefined ? reduxState.form.programsa.values.revisionmision : "");
        urlencoded.append("revisiongenerategroups", reduxState.form.programsa.values.revisiongenerategroups !== undefined ? reduxState.form.programsa.values.revisiongenerategroups : "");
        urlencoded.append("revisionrule", reduxState.form.programsa.values.revisionrule !== undefined ? reduxState.form.programsa.values.revisionrule : "");
        urlencoded.append("revisiongraduate", reduxState.form.programsa.values.revisiongraduate !== undefined ? reduxState.form.programsa.values.revisiongraduate : "");
        urlencoded.append("revisionsupport", reduxState.form.programsa.values.revisionsupport !== undefined ? reduxState.form.programsa.values.revisionsupport : "");

        
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