import { GROUP_LIST } from "constants/actionTypes";

const initialState = { 
  group_list: [], 
  loading: true
}

export const groupReducer = (state = initialState, action) => {
    switch (action.type) {
      case GROUP_LIST:
        return Object.assign({}, state, {
          group_list: action.payload,
          loading: false
        });
    }
    
    return state;
}