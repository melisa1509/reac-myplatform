import { GROUP_LIST } from "constants/actionTypes";
import { SHOW_GROUP } from "constants/actionTypes";
import { LOAD_FORM_GROUP } from "constants/actionTypes";
import { EDIT_GROUP, NEW_GROUP, DELETE_GROUP } from "constants/actionTypes";

const initialState = { 
  show_group: {
    embassador:[],
    name:"",
    data:[],
    first_name:"",
    last_name:"",
    start_date:"",
    final_date:"",
    number_students:"",
    madality:"",
    program:""
  },
  group_list: [],
  loading: true,
}

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
      case GROUP_LIST:
        return Object.assign({}, state, {
          group_list: action.payload,
          loading: false
        });
    }
    switch (action.type) {
      case SHOW_GROUP:
          return Object.assign({}, state, {
            show_group: action.payload
          });
    }
    switch (action.type) {
      case LOAD_FORM_GROUP:
        return Object.assign({}, state, {
          data: action.data
        });
    }
    switch (action.type) {
      case EDIT_GROUP:
          return Object.assign({}, state, {
            edit_group: action.payload
          }); 
    }
    switch (action.type) {
      case NEW_GROUP:
          return Object.assign({}, state, {
            new_group: action.payload
          }); 
    }
    switch (action.type) {
      case DELETE_GROUP:
          return Object.assign({}, state, {
            delete_group: action.payload
          }); 
    }
    return state;
}