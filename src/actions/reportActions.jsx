import { GET_REPORTS, GET_REPORT_COUNTRY } from 'constants/actionTypes.jsx';
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
        return fetch("https://lms.interweavesolutions.org/report/", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: GET_REPORTS , payload: json.data});
        });
    }  
}

export const getReportCountry= () => {
    return (dispatch, getState) => {
        const reduxState = getState();
        const key= reduxState.selected_country
        return fetch( BASE_URL + "/report/country/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: GET_REPORT_COUNTRY, payload: json.data });
        });
    }
}

