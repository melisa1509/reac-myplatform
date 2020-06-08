import { EVALUATION_PRE, PRE_ALERT, DELETE_ALERT, POST_ALERT } from "constants/actionTypes";


const initialState = { 
  evaluation_pre:"",
  pre_alert:false,
  post_alert:false
}

export const evaluationReducer = (state = initialState, action) => {
    switch (action.type) {
      case EVALUATION_PRE:
        return Object.assign({}, state, {
          evaluation_pre: action.payload,
        });
      case PRE_ALERT:
        return Object.assign({}, state, {
          pre_alert: true,
        });
      case POST_ALERT:
        return Object.assign({}, state, {
          post_alert: true,
        });

      case DELETE_ALERT:
        return Object.assign({}, state, {
            delete_alert:true,
            pre_alert: false,
            post_alert: false,
        });
    }     
    return state;
}