import { UPDATE_LANGUAGE_SELECT } from 'constants/actionTypes.jsx';


export const updateLanguageSelect = params => {
    return (dispatch) => {
            dispatch ({ type: UPDATE_LANGUAGE_SELECT, payload: params });
    }
    
}