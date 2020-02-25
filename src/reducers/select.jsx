import { UPDATE_LANGUAGE_SELECT,  UPDATE_COUNTRY_SELECT, COUNTRY_LIST } from "constants/actionTypes";

const initialState = { 
  selected_language: "",
  selected_country: "",
  country_list: []
}

export const selectReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LANGUAGE_SELECT:
            return Object.assign({}, state, {
              selected_language: action.payload
            });
    }
    switch (action.type) {
      case UPDATE_COUNTRY_SELECT:
          return Object.assign({}, state, {
            selected_country: action.payload
          });
    }
    switch (action.type) {
      case COUNTRY_LIST:
          return Object.assign({}, state, {
            country_list: action.payload
          });
  }
    return state;
}