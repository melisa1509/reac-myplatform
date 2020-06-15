import { SUCCESSFULL_AUTHENTICATION, FAILED_AUTHENTICATION, SUCCESSFULL_ACTIVE_USER} from "constants/actionTypes";

const initialState = { 

  loginError: false,
  active_user: {
    id:"",
    first_name: "",
    last_name: "",
    language: "en",
    roles: [""]
  }
}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case SUCCESSFULL_AUTHENTICATION:
            return Object.assign({}, state, {
              token: action.payload.token, 
            });
        
        case FAILED_AUTHENTICATION:
            return Object.assign({}, state, {
              loginError: true
            });

        case SUCCESSFULL_ACTIVE_USER:
            return Object.assign({}, state, {
              active_user: action.payload.data
            });
    }   
    return state;
}