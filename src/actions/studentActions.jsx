import { STUDENT_LIST, SHOW_STUDENT, LOAD_FORM_STUDENT, DELETE_STUDENT, SUCCESSFUL_DELETE, EDIT_STUDENT, ERROR_EDIT_STUDENT, SUCCESSFULL_EDIT} from 'constants/actionTypes.jsx';
import { EDIT_PASSWORD_STUDENT } from 'constants/actionTypes';

export const getStudentList = key => {
    return (dispatch) => {
        return fetch("https://api.interweavesolutions.org/student/?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: STUDENT_LIST, payload: json.data });
        });
    }  
}

export const showStudent = key => {
    return (dispatch) => {
        return fetch("http://api.interweavesolutions.org/user/show/"+ key +"?callback=foo")
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: SHOW_STUDENT, payload: json.data });
            dispatch ({ type: LOAD_FORM_STUDENT, data: json.data });   
        })

    }
};

export const loadFormStudent = data => ({ type: LOAD_FORM_STUDENT, data });

export const deleteStudent  = (key,redirect) => {
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    var urlencoded = new URLSearchParams();
    
    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: urlencoded,
      redirect: 'follow'
    };

    return (dispatch) => {
      return fetch("http://api.interweavesolutions.org/user/delete/"+ key +"?callback=foo", requestOptions)
      .then(response => response.json())
      .then(json => {
          dispatch ({ type: DELETE_STUDENT, payload: json.data });
          dispatch ({ type: SUCCESSFUL_DELETE}); 
          redirect.push('/student');
      });
  }
}
export const editStudent =() => {
    return (dispatch,getState) => {

        const reduxState = getState();
        const key = reduxState.form.userform.values.id;
      
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
      
            var urlencoded = new URLSearchParams();
            urlencoded.append("username", reduxState.form.studentform.values.username);
            urlencoded.append("language",reduxState.form.studentform.values.language);
            urlencoded.append("firstName",reduxState.form.studentform.values.first_name);
            urlencoded.append("lastName",reduxState.form.studentform.values.last_name);
            urlencoded.append("country",reduxState.form.studentform.values.country);
            urlencoded.append("city",reduxState.form.studentform.values.city );
            urlencoded.append("whatsapp",reduxState.form.studentform.values.whatsapp );
      
            var requestOptions = {
              method: 'PUT',
              headers: myHeaders,
              body: urlencoded,
              redirect: 'follow'
            }
    
        return fetch("http://api.interweavesolutions.org/user/edit/"+ key +"?callback=foo", requestOptions)
        .then(response => response.json())
        .then(json => {
            dispatch ({ type: EDIT_STUDENT, payload: json.data });  
            dispatch ({ type: SUCCESSFULL_EDIT});  
        })
        .catch(json =>{
            dispatch({type:ERROR_EDIT_STUDENT})
        })
      }
};


export const editPassword = (params,key) => {
    
    var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
  
        var urlencoded = new URLSearchParams();
        urlencoded.append("password", params.userPassword);
  
        var requestOptions = {
          method: 'PUT',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };

    return (dispatch) => {
      return fetch("http://api.interweavesolutions.org/user/editpassword/"+ key +"?callback=foo", requestOptions)
      .then(response => response.json())
      .then(json => {
          dispatch ({ type: EDIT_PASSWORD_STUDENT, payload: json }); 
      });
  }
}
