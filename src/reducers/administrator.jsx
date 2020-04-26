import { ADMINISTRATOR_LIST, ADMINLANGUAGE_LIST} from "constants/actionTypes";
import { NEW_ADMINISTRATOR } from "constants/actionTypes";
import { LOAD_FORM_ADMINISTRATOR, SHOW_ADMINISTRATOR } from "constants/actionTypes";


const initialState = { 
  administrator_list: [],
  adminlanguage_list: [], 
  new_administrator:{
    language_grader:""
  },
  show_administrator: {
    role:"",
    language:"",
    language_grader:"",
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
    }
    return state;
}