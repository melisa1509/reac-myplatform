import { STUDENT_LIST } from "constants/actionTypes";

const initialState = { 
  student_list: [], 
  loading: true
}

export const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case STUDENT_LIST:
        return Object.assign({}, state, {
          student_list: action.payload,
          loading: false
        });
    }
    
    return state;
}