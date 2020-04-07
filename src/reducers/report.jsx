import { GET_REPORTS } from "constants/actionTypes";

const initialState = { 
  report_list:{
      evaluations:[],
      studentsMbs:[],
      topNumbers:[],
      statistics:[],
      vectorMap:{
        BO:""
      }
  },
  loading: true,
}
export const reportReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_REPORTS:
        return Object.assign({}, state, {
          report_list: action.payload,
          loading: false
        });
    }
    return state;
}