import { STUDENT_MBS_LIST, STUDENT_AMBASSADOR_LIST, FUTURE_AMBASSADOR_LIST } from "constants/actionTypes";


const initialState = { 
  student_mbs_list: [], 
  student_ambassador_list: [],
  future_ambassador_list: []
  
}

export const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
      case STUDENT_MBS_LIST:
        return Object.assign({}, state, {
          student_mbs_list: action.payload,
          loading: false
        });

      case STUDENT_AMBASSADOR_LIST:
        return Object.assign({}, state, {
          student_ambassador_list: action.payload,
          loading: false
        });

      case FUTURE_AMBASSADOR_LIST:
        return Object.assign({}, state, {
          future_ambassador_list: action.payload,
          loading: false
        });
    }
    
    return state;
}