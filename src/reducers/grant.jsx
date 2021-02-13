import { GRANT_LIST } from "constants/actionTypes";
import { SHOW_GRANT } from "constants/actionTypes";
import { LOAD_FORM_GRANT } from "constants/actionTypes";
import { EDIT_GRANT, NEW_GRANT, GRANT_PROGRAM, DELETE_GRANT } from "constants/actionTypes";
import { UPLOAD_IMAGE } from "constants/actionTypes";
import { GET_PROJECT_PROGRESS } from "constants/actionTypes";
import { MBS_IMAGE_ALERT , DELETE_IMAGE_ALERT} from "constants/actionTypes";
import { adjustDate } from "assets/functions/general.jsx";
import { NEW_GRANT_UPDATE } from "constants/actionTypes";
import { SHOW_GRANT_UPDATE } from "constants/actionTypes";
import { GRANT_ACTIVE_LIST } from "constants/actionTypes";
import { NEW_GRANT_AMBASSADOR } from "constants/actionTypes";
import { EDIT_GRANT_AMBASSADOR } from "constants/actionTypes";
import { LOAD_FORM_GRANT_AMBASSADOR } from "constants/actionTypes";
import { SHOW_GRANT_AMBASSADOR } from "constants/actionTypes";

const initialState = { 
  show_grant: {
    id:"",
    administrator:[],
    date:"",
    title:"",
    language:"",
    description:"",   
    state:"",
  },
  show_grant_ambassador: {
    id:"",
    administrator:[],
    grant:[],
    number:"",
    code:"",
    question1:"",
    question2:"",   
    question3:"",
    question4:"",
    question5:"",
    question6:"",
    file:"",
  },
  new_grant:{
    id:""
  },
  grant_list: [],
  grant_active_list: [],
  show_grant_update: [],
  grant_program: [],
  progress_list:{
    progressMbs:[" "],
    progressSa:[" "]
  },
  loading: true,
  image_alert:false
}

export const grantReducer = (state = initialState, action) => {
    switch (action.type) {
      case GRANT_LIST:
        return Object.assign({}, state, {
          grant_list: action.payload,
          loading: false
        });      
      case SHOW_GRANT:
        return Object.assign({}, state, {
          show_grant: action.payload
        });
      case LOAD_FORM_GRANT:
        const grant = action.data;       
        grant.date = adjustDate(grant.date);
        
        return Object.assign({}, state, {
          data: grant
        });
      case EDIT_GRANT:
          return Object.assign({}, state, {
            edit_grant: action.payload
          }); 
      case NEW_GRANT:
          return Object.assign({}, state, {
            new_grant: action.payload
          }); 
      case DELETE_GRANT:
          return Object.assign({}, state, {
            delete_grant: action.payload
          });
      case GET_PROJECT_PROGRESS:
        return Object.assign({}, state, {
          progress_list: action.payload,
          loading: false,
        }); 
      case MBS_IMAGE_ALERT:
        return Object.assign({}, state, {
          id_student: action.payload,
          image_alert:true,
        }); 
      case UPLOAD_IMAGE:
        return Object.assign({}, state, {
          upload_image: action.payload,
        });  
      case DELETE_IMAGE_ALERT:
        return Object.assign({}, state, {
          image_alert: false,
        });  
      case NEW_GRANT_UPDATE:
        return Object.assign({}, state, {
          new_grant_update: action.payload
        });  
      case SHOW_GRANT_UPDATE:
        return Object.assign({}, state, {
          show_grant_update: action.payload,
          loading: false
        });
      case GRANT_ACTIVE_LIST:
        return Object.assign({}, state, {
          grant_active_list: action.payload,
          loading: false
        });
      case NEW_GRANT_AMBASSADOR:
        return Object.assign({}, state, {
          new_grant_ambassador: action.payload
        });
      case SHOW_GRANT_AMBASSADOR:
        return Object.assign({}, state, {
          show_grant_ambassador: action.payload,
          loading: false
        });
      case EDIT_GRANT_AMBASSADOR:
        return Object.assign({}, state, {
          edit_grant_ambassador: action.payload
        });
      case LOAD_FORM_GRANT_AMBASSADOR:
        return Object.assign({}, state, {
          data_grant_ambassador: action.data
        });
  }
    return state;
}