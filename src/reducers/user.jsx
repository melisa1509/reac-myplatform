import { SHOW_USER} from "constants/actionTypes";

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
    return state;
}