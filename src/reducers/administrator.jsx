import { ADMINISTRATOR_LIST, ADMINLANGUAGE_LIST} from "constants/actionTypes";
import { NEW_ADMINISTRATOR } from "constants/actionTypes";
import { LOAD_FORM_ADMINISTRATOR, SHOW_ADMINISTRATOR } from "constants/actionTypes";
import { EDIT_ADMINISTRATOR, ERROR_EDIT_ADMINISTRATOR } from "constants/actionTypes";
import { EDIT_PASSWORD_ADMINISTRATOR } from "constants/actionTypes";
import { DELETE_ADMINISTRATOR } from "constants/actionTypes";

const initialState = { 
  administrator_list: [],
  adminlanguage_list: [], 
  editError: false,
  new_administrator:{
    language_grader:{"es" :  true},
    language: "es"
  },
  edit_administrator:{
    language_grader:{"es" :  true},
    language: "es"
  },
  show_administrator: {
    role:"",
    language:"es",
    language_grader:[],
    first_name:"",
    last_name: "",
    country:"",
  },
  loading: true,
}

export const administratorReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADMINISTRATOR_LIST:
        return Object.assign({}, state, {
          administrator_list: action.payload,
          loading: false
        });
      case ADMINLANGUAGE_LIST:
        return Object.assign({}, state, {
            adminlanguage_list: action.payload,
            loading: false
        });
      case NEW_ADMINISTRATOR:
        return Object.assign({}, state, {
            new_administrator: action.payload,
        });
      case SHOW_ADMINISTRATOR:
        return Object.assign({}, state, {
            show_administrator: action.payload,
        });
      case LOAD_FORM_ADMINISTRATOR:
        return Object.assign({}, state, {
          data: action.data
        }); 
      case EDIT_ADMINISTRATOR:
        return Object.assign({}, state, {
            edit_administrator: action.payload
        }); 
      case ERROR_EDIT_ADMINISTRATOR:
        return Object.assign({}, state, {
          editError: true
        });
      case EDIT_PASSWORD_ADMINISTRATOR:
        return Object.assign({}, state, {
          edit_password: action.payload
        });
      case DELETE_ADMINISTRATOR:
        return Object.assign({}, state, {
          delete_admin: action.payload
        });    
    }
    return state;
}