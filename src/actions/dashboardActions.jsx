import {  STUDENT_MBS_LIST, STUDENT_AMBASSADOR_LIST, FUTURE_AMBASSADOR_LIST } from 'constants/actionTypes.jsx';
import { BASE_URL} from 'constants/urlTypes.jsx';

export const getStudentMbsList =() => {
    return (dispatch,getState) => {

        const reduxState = getState();
      
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      
            var urlencoded = new URLSearchParams();
            urlencoded.append("role", "ROLE_ADMIN");
            urlencoded.append("state", "state.revision");
      
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: urlencoded,
              redirect: 'follow'
            }
    
        return fetch( BASE_URL + "/student/mbs?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: STUDENT_MBS_LIST, payload: json.data });  
        })
        .catch(json =>{
        })
      }
};

export const getStudentAmbassadorList =() => {
  return (dispatch,getState) => {

      const reduxState = getState();
    
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
          var urlencoded = new URLSearchParams();
          urlencoded.append("role", "ROLE_ADMIN");
          urlencoded.append("state", "state.revision");
    
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded,
            redirect: 'follow'
          }
  
      return fetch( BASE_URL + "/student/ambassador?callback=foo", requestOptions)
      .then(response => response.json())
      .then(json => {
          dispatch ({ type: STUDENT_AMBASSADOR_LIST, payload: json.data });  
      })
      .catch(json =>{
      })
    }
};

export const getFutureAmbassadorList =() => {
  return (dispatch,getState) => {
      
      return fetch( BASE_URL + "/student/futureambassador?callback=foo")
      .then(response => response.json())
      .then(json => {
          dispatch ({ type: FUTURE_AMBASSADOR_LIST, payload: json.data });  
      })
      .catch(json =>{
      })
    }
};