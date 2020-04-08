import { CODE_LIST } from 'constants/actionTypes.jsx';

export const getCodeList = () => {
    return (dispatch) => {
        return fetch("https://lms.interweavesolutions.org/code/")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: CODE_LIST, payload: json.data });
        });
    }  
}