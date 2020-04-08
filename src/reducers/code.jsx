import { CODE_LIST } from "constants/actionTypes";

const initialState = { 
  code_list:{
    codesMbs:[],
    codesSa:[]
  },
  loading: true,
}
export const codeReducer = (state = initialState, action) => {
    switch (action.type) {
      case CODE_LIST:
        return Object.assign({}, state, {
          code_list: action.payload,
          loading: false
        });
    }
    return state;
}