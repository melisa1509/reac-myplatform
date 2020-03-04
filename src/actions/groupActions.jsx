import {GROUP_LIST} from 'constants/actionTypes.jsx';
import { LOAD_FORM_GROUP, SHOW_GROUP } from 'constants/actionTypes';

export const getGroupList= () => {
    return (dispatch) => {
        return fetch("https://api.interweavesolutions.org/group/?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: GROUP_LIST, payload: json.data });
        });
    }
}


export const showGroup = key => {
    return (dispatch) => {
        return fetch("http://api.interweavesolutions.org/group/show/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_GROUP, payload: json.data });
            dispatch ({ type: LOAD_FORM_GROUP, data: json.data });   
        })

    }
};