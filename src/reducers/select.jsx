import { UPDATE_LANGUAGE_SELECT } from "constants/actionTypes";

const initialState = { 
  selected_language: ""
}

export const selectReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LANGUAGE_SELECT:
            return Object.assign({}, state, {
              selected_language: action.payload
            });
    }
    return state;
}