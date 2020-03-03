import { ERROR_REQUIRED_FIELDS, SUCCESS_REQUIRED_FIELDS} from "constants/actionTypes";
import { SUCCESSFULL_EDIT, SUCCESSFUL_DELETE  } from "constants/actionTypes";

const initialState = { 
  successfull_edit: false,
  successful_delete: false,
  errorRequired: false,
  successRequired: false,
}


export const generalReducer = (state = initialState, action) => {
    switch (action.type) {
        case ERROR_REQUIRED_FIELDS:
            return Object.assign({}, state, {
              errorRequired: true
            });
        case SUCCESS_REQUIRED_FIELDS:
            return Object.assign({}, state, {
              successRequired: true,
              errorRequired: false
            });
        }
        switch (action.type) {
          case SUCCESSFULL_EDIT:
            return Object.assign({}, state, {
              successfull_edit: true
            }); 
        }
        switch (action.type) {
          case SUCCESSFUL_DELETE:
            return Object.assign({}, state, {
              successful_delete: true
            }); 
        }
     return state;
}
  
