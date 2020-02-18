import { combineReducers } from 'redux';
import { appReducer } from 'reducers/app.jsx';
import { loginReducer } from 'reducers/login.jsx';
import { studentReducer } from 'reducers/student.jsx';
import { programmbsReducer } from 'reducers/programmbs.jsx';
import { userReducer } from 'reducers/user.jsx';
import { selectReducer } from 'reducers/select.jsx';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    appReducer, 
    loginReducer,
    studentReducer,
    programmbsReducer,
    userReducer,
    selectReducer,
    form: reduxFormReducer,
})