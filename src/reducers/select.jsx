import { UPDATE_LANGUAGE_SELECT,  UPDATE_COUNTRY_SELECT, COUNTRY_LIST, UPDATE_MODALITY_SELECT, UPDATE_PROGRAM_SELECT, UPDATE_ROLE_SELECT } from "constants/actionTypes";

const initialState = { 
  selected_language: "",
  selected_country: "",
  selected_modality:"",
  selected_role:"",
  selected_program:"",
  country_list: []
}

export const selectReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LANGUAGE_SELECT:
            return Object.assign({}, state, {
              selected_language: action.payload
            });

      case UPDATE_COUNTRY_SELECT:
          return Object.assign({}, state, {
            selected_country: action.payload
          });

      case UPDATE_MODALITY_SELECT:
          return Object.assign({}, state, {
            selected_modality: action.payload
          });
      case UPDATE_ROLE_SELECT:
        return Object.assign({}, state, {
          selected_role: action.payload
        });

      case UPDATE_PROGRAM_SELECT:
          return Object.assign({}, state, {
            selected_program: action.payload
          });
          
      case COUNTRY_LIST:
          return Object.assign({}, state, {
            country_list: action.payload
          });
    }
    return state;
}