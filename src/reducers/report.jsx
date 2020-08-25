import { GET_REPORTS } from "constants/actionTypes";
import { GET_REPORT_COUNTRY, GET_AMBASSADOR_COUNTRY, GET_REPORT_AMBASSADOR, GET_REPORT_GLOBAL_MAP } from "constants/actionTypes";
import { AMBASSADOR_REPORT } from "constants/actionTypes";

const initialState = { 
  report_list:{
      evaluations:[],
      studentsMbs:[],
      topNumbers:[],
      topNumbers2:[],
      statistics:[],
      vectorMap:{
        BO:""
      }
  },
  report_country:[],
  ambassador_country:[],
  report_ambassador:[],
  loading: true,
}
export const reportReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_REPORTS:
        return Object.assign({}, state, {
          report_list: action.payload,
          loading: false
        });
      case GET_REPORT_COUNTRY:
        return Object.assign({}, state, {
          report_country: action.payload,
        });
      case GET_AMBASSADOR_COUNTRY:
        return Object.assign({}, state, {
          ambassador_country: action.payload,
        });
      case GET_REPORT_AMBASSADOR:
        return Object.assign({}, state, {
          report_ambassador: action.payload,
        });
      case GET_REPORT_GLOBAL_MAP:
        return Object.assign({}, state, {
          report_global_map: action.payload,
        });
    }
    return state;
}