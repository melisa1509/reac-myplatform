import { GET_REPORTS, GET_REPORT_COUNTRY, GET_AMBASSADOR_COUNTRY, GET_REPORT_AMBASSADOR } from 'constants/actionTypes.jsx';
import { BASE_URL } from 'constants/urlTypes.jsx';

export const getReports = () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("role", "ROLE_ADMIN");

            var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
        };
    return (dispatch) => {
        return fetch(BASE_URL + "/report/", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: GET_REPORTS , payload: json.data});
        });
    }  
}

export const getReportCountry= (key) => {
    return (dispatch) => {
        return fetch( BASE_URL + "/report/country/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: GET_REPORT_COUNTRY, payload: json.data });
        });
    }
}

export const getAmbassadorCountry= (key) => {
    return (dispatch) => {
        return fetch( BASE_URL + "/ambassador/country/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: GET_AMBASSADOR_COUNTRY, payload: json.data });
        });
    }
}

export const getReportAmbassador= (key) => {
    return (dispatch) => {
        return fetch( BASE_URL + "/report/ambassador/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: GET_REPORT_AMBASSADOR, payload: json.data });
        });
    }
}
