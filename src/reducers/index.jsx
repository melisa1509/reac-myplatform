import { combineReducers } from 'redux';
import { appReducer } from 'reducers/app.jsx';
import { loginReducer } from 'reducers/login.jsx';
import { studentReducer } from 'reducers/student.jsx';
import { programmbsReducer } from 'reducers/programmbs.jsx';
import { userReducer } from 'reducers/user.jsx';
import { generalReducer } from 'reducers/general.jsx';
import { selectReducer } from 'reducers/select.jsx';
import { groupReducer } from 'reducers/group.jsx';
import { ambassadorReducer } from 'reducers/ambassador.jsx';
import { reducer as reduxFormReducer } from 'redux-form';

export default combineReducers({
    appReducer, 
    loginReducer,
    studentReducer,
    programmbsReducer,
    userReducer,
    selectReducer,
    generalReducer,
    groupReducer,
    ambassadorReducer,
    form: reduxFormReducer,
})