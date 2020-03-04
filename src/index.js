
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { TranslatorProvider } from "react-translate";
import { Provider } from 'react-redux';

import AuthLayout from "layouts/Auth.jsx";
import RtlLayout from "layouts/RTL.jsx";
import AdminLayout from "layouts/Admin.jsx";
import ReactTable from "views/Tables/ReactTables.jsx";
import Age from 'views/Age/Age.jsx';
import Login from 'views/Login/Login.jsx';
import Student from 'views/Student/Index.jsx';
import ShowStudent from 'views/Student/Show/Show.jsx';
import EditStudent from 'views/Student/Edit/Edit.jsx';
import StudentChangePassword  from 'views/Student/ChangePassword/ChangePassword.jsx';
import Group from 'views/Group/Index.jsx';
import ShowGroup from 'views/Group/Show/Show.jsx';
import App from 'views/Age/App.jsx';
import CourseNew from 'views/Course/New/New.jsx';
import ProgramMbs from 'views/Programmbs/Show/Show.jsx';
import User from 'views/User/Show/Show.jsx';
import UserEdit  from 'views/User/Edit/Edit.jsx';
import UserChangePassword  from 'views/User/ChangePassword/ChangePassword.jsx';
import Profile  from 'views/Profile/Show/Show.jsx';
import ProfileEdit  from 'views/Profile/Edit/Edit.jsx';
import { store } from 'store/index.jsx';

import "assets/scss/material-dashboard-pro-react.scss?v=1.7.0";

const hist = createBrowserHistory();

const defaultLanguage = "en";


function getLanguage(variable) {
   var query = window.location.search.substring(1);
   var vars = query.split("&");
   for (var i=0; i < vars.length; i++) {
       var pair = vars[i].split("=");
       if(pair[0] === variable) {
           return pair[1];
       }
   }
   return defaultLanguage;
}

ReactDOM.render(
  <Provider store={store}>
    <TranslatorProvider translations={require('assets/translate/'+ getLanguage("lang") +'.json')}>
      <Router history={hist}>
        <Switch>
          <Route path="/student" component={Student} exact />
          <Route path="/student/show/:id" component={ShowStudent} exact />
          <Route path="/student/edit/:id" component={EditStudent} exact />
          <Route path="/student/editpassword/:id" component={StudentChangePassword} exact /> 
          <Route path="/rtl" component={RtlLayout} />
          <Route path="/auth" component={AuthLayout} />
          <Route path="/admin" component={AdminLayout} />
          <Route path="/table" component={ReactTable} />
          <Route path="/age" component={Age} />
          <Route path="/login" component={Login} />
          <Route path="/app" component={App} />
          <Route path="/course/new" component={CourseNew} />
          <Route path="/programmbs/:id" component={ProgramMbs} />
          <Route path="/user/show/:id" component={User} exact /> 
          <Route path="/user/edit/:id" component={UserEdit} exact /> 
          <Route path="/user/editpassword/:id" component={UserChangePassword} exact /> 
          <Route path="/profile" component={Profile} exact />
          <Route path="/profile/edit" component={ProfileEdit} exact />
          <Route path="/group" component={Group} exact /> 
          <Route path="/group/show/:id" component={ShowGroup} exact /> 
          <Redirect from="/" to="/admin/dashboard" />
        </Switch>
      </Router>,
    </TranslatorProvider>
  </Provider>,
  document.getElementById("root")
);
