import { STUDENT_LIST } from 'constants/actionTypes.jsx';

export const getStudentList = key => {
    return (dispatch) => {
        return fetch("https://api.interweavesolutions.org/student/?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: STUDENT_LIST, payload: json.data });
        });
    }
    
}