import { SHOW_USER, LOAD_FORM_USER, EDIT_USER} from "constants/actionTypes";

const initialState = { 
  show_user: {
    email:"",
    username:"",
    language:"",
    language_grader:"",
    first_name:"",
    last_name: "",
    country:"",
  }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_USER:
            return Object.assign({}, state, {
              show_user: action.payload
            });
    }
    switch (action.type) {
      case EDIT_USER:
          return Object.assign({}, state, {
            edit_user: action.payload
          });
  }

    switch (action.type) {
      case LOAD_FORM_USER:
        return Object.assign({}, state, {
          data: action.data
        });
    }
    return state;
}