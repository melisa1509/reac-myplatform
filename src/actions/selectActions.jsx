import { UPDATE_LANGUAGE_SELECT, UPDATE_COUNTRY_SELECT, COUNTRY_LIST } from 'constants/actionTypes.jsx';


export const updateLanguageSelect = params => {
    return (dispatch) => {
            dispatch ({ type: UPDATE_LANGUAGE_SELECT, payload: params });
    }
    
}
export const updateCountrySelect = params => {
    return (dispatch) => {
            dispatch ({ type: UPDATE_COUNTRY_SELECT, payload: params });
    }
    
}
export const CountryList = () => {
    
    return (dispatch) => {
        return fetch("https://restcountries.eu/rest/v2/all?fields=alpha3Code;name;")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: COUNTRY_LIST, payload: json });
        });
    }
    
}