import {GET_CERTIFICATE_LIST} from 'constants/actionTypes.jsx';

export const getCertificateList = key => {
    return (dispatch) => {
        return fetch("http://api.interweavesolutions.org/certificate/list/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: GET_CERTIFICATE_LIST, payload: json.data });  
        })

    }
};