import {GROUP_LIST} from 'constants/actionTypes.jsx';

export const getGroupList= () => {
    return (dispatch) => {
        return fetch("https://api.interweavesolutions.org/group/?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: GROUP_LIST, payload: json.data });
        });
    }
}