import { ERROR_REQUIRED_FIELDS, SUCCESS_REQUIRED_FIELDS} from "constants/actionTypes";
import { SUCCESSFULL_EDIT, SUCCESSFUL_DELETE  } from "constants/actionTypes";
import { DISMATCH_PASSWORD } from "constants/actionTypes";
import { SUCCESSFULL_NEW } from "constants/actionTypes";

const initialState = { 
  successfull_edit: false,
  successful_delete: false,
  errorRequired: false,
  successRequired: false,
  dismatch_password:false,
  successfull_new:false
}
//crear un 

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
        case SUCCESSFULL_EDIT:
          return Object.assign({}, state, {
            successfull_edit: true
          }); 
        case SUCCESSFUL_DELETE:
          return Object.assign({}, state, {
            successful_delete: true
          }); 
        case DISMATCH_PASSWORD:
          return Object.assign({}, state, {
            dismatch_password: true
          }); 
        case SUCCESSFULL_NEW:
          return Object.assign({}, state, {
            successfull_new: true
          });
        }
     return state;
}
  
