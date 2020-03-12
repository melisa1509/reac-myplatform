import { AMBASSADOR_LIST} from "constants/actionTypes";
import { SHOW_AMBASSADOR } from "constants/actionTypes";
import { LOAD_FORM_AMBASSADOR } from "constants/actionTypes";
import { EDIT_AMBASSADOR, ERROR_EDIT_AMBASSADOR } from "constants/actionTypes";


const initialState = { 
  ambassador_list: [], 
  loading: true,
  editError: false,
  show_ambassador: {
    email:"",
    username:"",
    language:"",
    language_grader:"",
    first_name:"",
    last_name: "",
    country:"",
  },
}

export const ambassadorReducer = (state = initialState, action) => {
    switch (action.type) {
      case AMBASSADOR_LIST:
        return Object.assign({}, state, {
          ambassador_list: action.payload,
          loading: false
        });
    }
    switch (action.type) {
        case SHOW_AMBASSADOR:
            return Object.assign({}, state, {
              show_ambassador: action.payload
            });
      }
      switch (action.type) {
        case LOAD_FORM_AMBASSADOR:
          return Object.assign({}, state, {
            data: action.data
          });
      }
      switch (action.type) {
        case EDIT_AMBASSADOR:
            return Object.assign({}, state, {
              edit_ambassador: action.payload
            }); 
        case ERROR_EDIT_AMBASSADOR:
          return Object.assign({}, state, {
            editError: true
          })
      }
    return state;
}