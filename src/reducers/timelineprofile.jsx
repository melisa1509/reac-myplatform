import { SHOW_TIMELINE_PROFILE } from "constants/actionTypes";

const initialState = { 
    show_timeline_profile: [],
    loading: true,
  }
  
  export const timelineprofileReducer = (state = initialState, action) => {
      switch (action.type) {
        case SHOW_TIMELINE_PROFILE:
          return Object.assign({}, state, {
            show_timeline_profile: action.payload,
            loading: false
          });
        
    }
      return state;
  }