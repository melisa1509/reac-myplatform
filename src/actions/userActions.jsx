import { SHOW_USER } from 'constants/actionTypes.jsx';

export const showUser = key => {
    return (dispatch) => {
        return fetch("http://api.interweavesolutions.org/user/show"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_USER, payload: json.data });   
        })

    }
};
export const EditUser =() => {
};
