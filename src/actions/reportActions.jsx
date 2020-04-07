import { GET_REPORTS } from 'constants/actionTypes.jsx';

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