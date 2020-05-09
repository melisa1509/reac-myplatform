import { GROUP_LIST } from "constants/actionTypes";
import { SHOW_GROUP } from "constants/actionTypes";
import { LOAD_FORM_GROUP } from "constants/actionTypes";
import { EDIT_GROUP, NEW_GROUP, DELETE_GROUP } from "constants/actionTypes";
import { UPDATE_FILE_NAME } from "constants/actionTypes";
import { GET_PROJECT_PROGRESS } from "constants/actionTypes";

const initialState = { 
  show_group: {
    id:"",
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
  new_group:{
    id:""
  },
  group_list: [],
  progress_list:{
    progressMbs:[],
    progressSa:[]
  },
  loading: true,
}

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
      case GROUP_LIST:
        return Object.assign({}, state, {
          group_list: action.payload,
          loading: false
        });
      case SHOW_GROUP:
          return Object.assign({}, state, {
            show_group: action.payload
          });
      case LOAD_FORM_GROUP:
        return Object.assign({}, state, {
          data: action.data
        });
      case EDIT_GROUP:
          return Object.assign({}, state, {
            edit_group: action.payload
          }); 
      case NEW_GROUP:
          return Object.assign({}, state, {
            new_group: action.payload
          }); 
      case DELETE_GROUP:
          return Object.assign({}, state, {
            delete_group: action.payload
          });
      case GET_PROJECT_PROGRESS:
        return Object.assign({}, state, {
          progress_list: action.payload,
          loading: false
        }); 
      
    }
    return state;
}