import { SHOW_USER, LOAD_FORM_USER, EDIT_USER} from "constants/actionTypes";
import { ERROR_EDIT_USER,SUCCESSFULL_EDIT_USER  } from "constants/actionTypes";
import {EDIT_PASSWORD_USER, DELETE_USER } from "constants/actionTypes";

const initialState = { 
  editError: false,
  errorRequire: false,
  show_user: {
    id:"",
    email:"",
    username:"",
    language:"",
    language_grader:"",
    first_name:"",
    last_name: "",
    country:"",
  },
  edit_user:{
    username: "",
    city:""
  },
  edit_password:{
    userPassword:""
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
      case ERROR_EDIT_USER:
        return Object.assign({}, state, {
          editError: true
        })
    }

    switch (action.type) {
      case LOAD_FORM_USER:
        return Object.assign({}, state, {
          data: action.data
        });
    }
    switch (action.type) {
      case EDIT_PASSWORD_USER:
          return Object.assign({}, state, {
            edit_password: action.payload
          }); 
    }
    switch (action.type) {
      case DELETE_USER:
          return Object.assign({}, state, {
            delete_user: action.payload
          }); 
    }

    return state;
}