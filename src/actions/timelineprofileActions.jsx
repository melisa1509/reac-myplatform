import { DELETE_TIMELINE_PROFILE } from "constants/actionTypes";
import { SUCCESSFULL_NEW } from "constants/actionTypes";
import { NEW_TIMELINE_PROFILE } from "constants/actionTypes";
import { SHOW_TIMELINE_PROFILE } from "constants/actionTypes";
import { BASE_URL } from "constants/urlTypes";

export const showTimelineProfile = key => {
    return (dispatch) => {
        return fetch( BASE_URL + "/timelineprofile/show/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_TIMELINE_PROFILE, payload: json.data });
        })

    }
};

export const newTimelineProfile = (key)=> {
    return (dispatch, getState) => {
    const reduxState = getState();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    
    var urlencoded = new URLSearchParams();
    urlencoded.append("id_user", key);
    urlencoded.append("id_admin", reduxState.loginReducer.active_user.id);
    urlencoded.append("file", "undefined");
    urlencoded.append("description", reduxState.form.timelineProfileForm.values === undefined ? "" : reduxState.form.timelineProfileForm.values.description );
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };
    
        return fetch( BASE_URL + "/timelineprofile/new", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: NEW_TIMELINE_PROFILE, payload: json.data });
            dispatch ({ type: SUCCESSFULL_NEW }); 
        })
    }
};

export const deleteTimelineProfile  = (key, redirect) => {
    
    var requestOptions = {
      method: 'DELETE',
      redirect: 'follow'
    };

    return (dispatch) => {
      return fetch(BASE_URL + "/timelineprofile/delete/"+ key +"?callback=foo", requestOptions)
      .then(response => response.json())
      .then(json => {
          dispatch ({ type: DELETE_TIMELINE_PROFILE, payload: json.data });
          dispatch ({ type: SUCCESSFULL_NEW });
      });
  }
}