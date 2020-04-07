import { SHOW_PROGRAMMBS, UPDATE_REVISION_PROGRAMMBS, ERROR_EDIT_REVISION, SUCCESSFULL_EDIT_REVISION, SUCCESSFULL_APPROVE_PROJECT, ERROR_APPROVE_PROJECT } from "constants/actionTypes";
import { LOAD_FORM_PROGRAMMBS } from "constants/actionTypes";
import { HIDE_REVISION_ALERT } from "constants/actionTypes";

const initialState = { 
  programmbs:{
    plan1: "",
    plan2: "",
    product1: "",
    product3: "",
    product4: "",
    product5: "",
    product6: "",
    product7: "",
    process1: [],
    process2: "",
    process3: "",
    process4: "",
    price1: "",
    price2: "",
    price3: "",
    price4: "",
    promotion1: "",
    promotion2: "",
    promotion3: "",
    promotion4: "",
    promotion5: "",
    paperwork1: "",
    paperwork2: "",
    paperwork3: [],
    paperwork4: {p4_initial_capital: "", p4_expenses: "", p4_income: "", p4_balance: "", p4_array: []},
    paperwork5: {p5_income: "", p5_array: []},
    paperwork6: {p6_expenses: "", p6_earnings_loses: "", p6_balance: "", p6_array: []},
    paperwork7: {p7_title: [], p7_income: [], p7_array: []},
    paperwork8: {p8_balance: [], p8_expenses: [], p8_earnings_loses: [], p8_array: []},
    quality_p1: "",
    quality_p2: "",
    quality_p3: "",
    quality_p4: "",
    quality_p5: "",
    quality_p6: "",
    quality_p7: "",
    quality_p8: "",
    quality_q1: "",
    quality_q2: "",
    quality_q3: "",
    quality_q4: "",
    quality_q5: "",
    quality_q6: "",
    quality_q7: "",
    quality_q8: "",
    quality_g1: "",
    quality_g2: "",
    quality_g3: "",
    quality_g4: "",
    quality_g5: "",
    quality_g6: "",
    quality_g7: "",
    qualityg8: "",
    service1: "",
    service2: "",
    service3: "",
    service4: "",
    service5: "",
    service6: "",
    history2: "",
    state: "",
    statusplan: "",
    statusproduct: "",
    statusprice: "",
    statuspromotion: "",
    statuspaperwork: "",
    statusprocess: "",
    statusquality: "",
    statusservice: "",
    code: "",
    student:{
        id: 142,
        username: "",
        language: "",
        language_grader: [],
        first_name: "",
        last_name: "",
        country: "",
        city: "",
        whatsapp: "",
        roles: [],
        groupes: [],
        studentgroup: {
          id: "",
          group:{
            id: "",
            name: "",
            start_date: "",
            final_date: "",
            graduation_date: "",
            number_students: "",
            modality: "",
            program: "",
            interweave_local: "",
            embassador:{
              id: "",
              username: "",
              language: "",
              language_grader: [],
              first_name: "",
              last_name: "",
              country: "",
              city: "",
              whatsapp: "",
            }
          }
        }
    },
  },
  editRevisionError: false,
  editRevisionSuccessfull: false,
  approveProjectError: false,
  approveProjectSuccessfull: false
}



export const programmbsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SHOW_PROGRAMMBS:
        return Object.assign({}, state, {
          programmbs: action.payload
        });

      case UPDATE_REVISION_PROGRAMMBS:
        return Object.assign({}, state, {
          programmbs: Object.assign(state.programmbs, {
            [action.payload.name]: action.payload.value
          })
        });

      case LOAD_FORM_PROGRAMMBS:
        return Object.assign({}, state, {
          data: action.data
        });

      case ERROR_EDIT_REVISION:
        return Object.assign({}, state, {
          editRevisionError: true
        });

      case SUCCESSFULL_EDIT_REVISION:
        return Object.assign({}, state, {
          editRevisionSuccessfull: true
        });

      case ERROR_APPROVE_PROJECT:
        return Object.assign({}, state, {
          approveProjectError: true
        });

      case SUCCESSFULL_APPROVE_PROJECT:
        return Object.assign({}, state, {
          approveProjectSuccessfull: true
        });

      case HIDE_REVISION_ALERT:
        return Object.assign({}, state, {
          editRevisionError: false,
          editRevisionSuccessfull: false,
          approveProjectError: false,
          approveProjectSuccessfull: false
        });
    }

   
    return state;
}

