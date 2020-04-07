import { SUCCESSFULL_AUTHENTICATION, FAILED_AUTHENTICATION, SUCCESSFULL_ACTIVE_USER } from 'constants/actionTypes.jsx';
import $ from 'jquery';
import { BASE_URL } from 'constants/urlTypes';


export const getAuthenticacion = ( params, redirect ) => {
    var settings = {
                "url": BASE_URL + "/api/login_check",
                "method": "POST",
                "timeout": 0,
                "headers": {
                "Content-Type": "application/x-www-form-urlencoded"
            },
                "data": {
                "_username": params.username,
                "_password": params.password
            }
    }
    
    return (dispatch, getState ) => {

        return $.ajax(settings)
                .done(function (data) {
                    
                    //dispatch ({ type: SUCCESSFULL_AUTHENTICATION, payload: response });
                    var settings = {
                        "url": BASE_URL + "/user/active_user",
                        "method": "POST",
                        "timeout": 0,
                        "headers": {
                          "Content-Type": "application/x-www-form-urlencoded",
                          "Authorization": "Bearer " + data.token
                        },
                        "data": {
                        }
                      };
                    return $.ajax(settings)
                            .done(function (response) {
                                dispatch ({ type: SUCCESSFULL_AUTHENTICATION, payload: data });
                                dispatch ({ type: SUCCESSFULL_ACTIVE_USER, payload: JSON.parse(response) });
                                redirect.push('/dashboard');
                            })
                            .fail(function (response){
                                redirect.push('/login');
                            });


                })
                .fail(function (response){
                    dispatch ({ type: FAILED_AUTHENTICATION });
                });
    }
    
}

export const getActiveUser = ( redirect ) => {
    return (dispatch, getState ) => {

        const reduxState = getState();
        
        var settings = {
            "url": BASE_URL + "/user/active_user",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded",
              "Authorization": "Bearer " + reduxState.loginReducer.token
            },
            "data": {
            }
          };

        return $.ajax(settings)
                .done(function (response) {
                    dispatch ({ type: SUCCESSFULL_ACTIVE_USER, payload: JSON.parse(response) });

                })
                .fail(function (response){
                    redirect.push('/login');
                });
    }
    
}

