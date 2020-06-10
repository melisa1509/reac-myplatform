import { STUDENT_LIST, SHOW_STUDENT, LOAD_FORM_STUDENT } from "constants/actionTypes";
import { DELETE_STUDENT } from "constants/actionTypes";
import { ERROR_EDIT_STUDENT } from "constants/actionTypes";
import { EDIT_STUDENT } from "constants/actionTypes";
import { NEW_STUDENT } from "constants/actionTypes";
import { EDIT_PASSWORD_STUDENT } from "constants/actionTypes";

const initialState = { 
  student_list: [], 
  loading: true,
  editError: false,
  show_student: {
    id:"",
    email:"",
    username:"",
    language:"",
    language_grader:"",
    first_name:"",
    last_name: "",
    country:"",
  },
  new_student:{
    language: "es",
    country: "AFG",
    id:""
  }
}

export const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case STUDENT_LIST:
        return Object.assign({}, state, {
          student_list: action.payload,
          loading: false
        });
    }
    switch (action.type) {
      case SHOW_STUDENT:
          return Object.assign({}, state, {
            show_student: action.payload
          });
    }
    switch (action.type) {
      case LOAD_FORM_STUDENT:
        return Object.assign({}, state, {
          data: action.data
        });
    }
    switch (action.type) {
      case DELETE_STUDENT:
          return Object.assign({}, state, {
            delete_student: action.payload
          }); 
    }
    switch (action.type) {
      case EDIT_STUDENT:
          return Object.assign({}, state, {
            edit_student: action.payload
          }); 
      case NEW_STUDENT:
        return Object.assign({}, state, {
          new_student: action.payload
        }); 
      case ERROR_EDIT_STUDENT:
        return Object.assign({}, state, {
          editError: true
        })
    }
    switch (action.type) {
      case EDIT_PASSWORD_STUDENT:
          return Object.assign({}, state, {
            edit_password: action.payload
          }); 
    }
    return state;
}