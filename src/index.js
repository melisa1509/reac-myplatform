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
import NewStudent from 'views/Student/New/New.jsx';
import ShowStudent from 'views/Student/Show/Show.jsx';
import EditStudent from 'views/Student/Edit/Edit.jsx';
import PreStudent from 'views/Student/PreEvaluation/New.jsx';
import StudentChangePassword  from 'views/Student/ChangePassword/ChangePassword.jsx';
import Group from 'views/Group/Index.jsx';
import ShowGroup from 'views/Group/Show/Show.jsx';
import EditGroup from 'views/Group/Edit/Edit.jsx';
import NewGroup from 'views/Group/New/New.jsx';
import GroupAmbassadors from 'views/Group/New/ListAmbassador/Index.jsx';
import ProjectProgress from 'views/Group/Progress/Index.jsx';
import UploadImage from 'views/Group/Participants/Index.jsx';
import StudentGroup from 'views/Group/Participants/Index.jsx';
import App from 'views/Age/App.jsx';
import CourseNew from 'views/Course/New/New.jsx';
import ProgramMbs from 'views/Programmbs/Show/Show.jsx';
import NewProgramMbs from 'views/Programmbs/New/Show.jsx';
import EditProgramMbs from 'views/Programmbs/Edit/Show.jsx';
import EditPlanProgramMbs from 'views/Programmbs/Edit/EditPlan.jsx';
import EditProductProgramMbs from 'views/Programmbs/Edit/EditProduct.jsx';
import EditProcessProgramMbs from 'views/Programmbs/Edit/EditProcess.jsx';
import EditPriceProgramMbs from 'views/Programmbs/Edit/EditPrice.jsx';
import EditPromotionProgramMbs from 'views/Programmbs/Edit/EditPromotion.jsx';
import EditPaperworkProgramMbs from 'views/Programmbs/Edit/EditPaperwork.jsx';
import EditQualityProgramMbs from 'views/Programmbs/Edit/EditQuality.jsx';
import EditServiceProgramMbs from 'views/Programmbs/Edit/EditService.jsx';
import ProgramMbsFile from 'views/Programmbs/ShowFile/Show.jsx';
import ProgramSa from 'views/Programsa/Show/Show.jsx';
import NewProgramSa from 'views/Programsa/New/Show.jsx';
import EditProgramSa from 'views/Programsa/Edit/Show.jsx';
import EditMisionProgramSa from 'views/Programsa/Edit/EditMision.jsx';
import EditGenerateProgramSa from 'views/Programsa/Edit/EditGenerate.jsx';
import EditFacilitateProgramSa from 'views/Programsa/Edit/EditFacilitate.jsx';
import EditGraduateProgramSa from 'views/Programsa/Edit/EditGraduate.jsx';
import EditSupportProgramSa from 'views/Programsa/Edit/EditSupport.jsx';
import User from 'views/User/Show/Show.jsx';
import UserEdit  from 'views/User/Edit/Edit.jsx';
import UserChangePassword  from 'views/User/ChangePassword/ChangePassword.jsx';
import Profile  from 'views/Profile/Show/Show.jsx';
import ProfileEdit  from 'views/Profile/Edit/Edit.jsx';
import ProfileEditPassword  from 'views/Profile/ChangePassword/ChangePassword.jsx';
import Ambassador from 'views/Ambassador/Index.jsx'
import ShowAmbassador from 'views/Ambassador/Show/Show.jsx';
import EditAmbassador from 'views/Ambassador/Edit/Edit.jsx';
import NewAmbassador from 'views/Ambassador/New/New.jsx';
import AmbassadorChangePassword  from 'views/Ambassador/ChangePassword/ChangePassword.jsx';
import CertificateGroup from 'views/Certificate/Group/Index.jsx';
import CertificateList from 'views/Certificate/Student/Index.jsx';
import Dashboard from 'views/Dashboard/Index.jsx';
import DashboardStudent from 'views/Dashboard/Student/Index.jsx';
import AssignMentor from 'views/Dashboard/AssignMentor/Index.jsx';
import ConfirmMentor from 'views/Dashboard/AssignMentor/Confirm.jsx';
import ClearPendingDashboard from 'views/Dashboard/AssignMentor/Clear.jsx';
import Reports from 'views/Reports/Index.jsx';
import ListCode from 'views/Code/Index.jsx';
import ShowCode from 'views/Code/Show/Show.jsx';
import EditCode from 'views/Code/Edit/Edit.jsx';
import ListAdmin from 'views/Administrator/Index.jsx';
import NewAdmin from 'views/Administrator/New/New.jsx';
import ShowAdmin from 'views/Administrator/Show/Show.jsx';
import EditAdmin from 'views/Administrator/Edit/Edit.jsx';
import AdminPassword from 'views/Administrator/ChangePassword/ChangePassword.jsx';
import Register from 'views/Register/Index.jsx';
import RegisterStudent from 'views/Register/Participants/New.jsx';
import RegisterEvaluation from 'views/Register/PreEvaluation/New.jsx';
import newPassword from 'views/User/NewPassword/ChangePassword.jsx';
import UserNewPassword  from 'views/User/NewPassword/ChangePassword/ChangePassword.jsx';
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
      <Router history={hist}>
        <Switch>
          <Route path="/student" component={Student} exact />
          <Route path="/student/new/:id" component={NewStudent} exact />
          <Route path="/student/show/:id" component={ShowStudent} exact />
          <Route path="/student/edit/:id" component={EditStudent} exact />
          <Route path="/student/preForm" component={PreStudent} exact />
          <Route path="/student/editpassword/:id" component={StudentChangePassword} exact /> 
          <Route path="/rtl" component={RtlLayout} />
          <Route path="/auth" component={AuthLayout} />
          <Route path="/table" component={ReactTable} />
          <Route path="/age" component={Age} />
          <Route path="/login" component={Login} />
          <Route path="/app" component={App} />
          <Route path="/course/new" component={CourseNew} />
          <Route path="/programmbs/new" component={NewProgramMbs} exact/>
          <Route path="/programmbs/show/:id" component={ProgramMbs} exact/>
          <Route path="/programmbs/edit/:id" component={EditProgramMbs} exact/>
          <Route path="/programmbs/edit/plan/:id" component={EditPlanProgramMbs} exact/>
          <Route path="/programmbs/edit/product/:id" component={EditProductProgramMbs} exact/>
          <Route path="/programmbs/edit/process/:id" component={EditProcessProgramMbs} exact/>
          <Route path="/programmbs/edit/price/:id" component={EditPriceProgramMbs} exact/>
          <Route path="/programmbs/edit/promotion/:id" component={EditPromotionProgramMbs} exact/>
          <Route path="/programmbs/edit/paperwork/:id" component={EditPaperworkProgramMbs} exact/>
          <Route path="/programmbs/edit/quality/:id" component={EditQualityProgramMbs} exact/>
          <Route path="/programmbs/edit/service/:id" component={EditServiceProgramMbs} exact/>
          <Route path="/programmbs/showfile/:id" component={ProgramMbsFile} exact/>
          <Route path="/programsa/show/:id" component={ProgramSa} exact/>
          <Route path="/programsa/new" component={NewProgramSa} exact/>
          <Route path="/programsa/edit/:id" component={EditProgramSa} exact/>
          <Route path="/programsa/edit/mision/:id" component={EditMisionProgramSa} exact/>
          <Route path="/programsa/edit/generate/:id" component={EditGenerateProgramSa} exact/>
          <Route path="/programsa/edit/facilitate/:id" component={EditFacilitateProgramSa} exact/>
          <Route path="/programsa/edit/graduate/:id" component={EditGraduateProgramSa} exact/>
          <Route path="/programsa/edit/support/:id" component={EditSupportProgramSa} exact/>
          <Route path="/user/show/:id" component={User} exact /> 
          <Route path="/user/edit/:id" component={UserEdit} exact /> 
          <Route path="/user/editpassword/:id" component={UserChangePassword} exact /> 
          <Route path="/profile" component={Profile} exact />
          <Route path="/profile/edit" component={ProfileEdit} exact />
          <Route path="/profile/editpassword" component={ProfileEditPassword} exact />
          <Route path="/group" component={Group} exact /> 
          <Route path="/group/new/:id" component={NewGroup} exact /> 
          <Route path="/group/show/:id" component={ShowGroup} exact /> 
          <Route path="/group/edit/:id" component={EditGroup} exact /> 
          <Route path="/group/ambassador" component={GroupAmbassadors} exact /> 
          <Route path="/group/progress/:id" component={ProjectProgress} exact /> 
          <Route path="/group/student/:id" component={StudentGroup} exact /> 
          <Route path="/group/uploadImage/:id" component={UploadImage} exact /> 
          <Route path="/ambassador" component={Ambassador} exact /> 
          <Route path="/ambassador/show/:id" component={ShowAmbassador} exact /> 
          <Route path="/ambassador/edit/:id" component={EditAmbassador} exact /> 
          <Route path="/ambassador/new" component={NewAmbassador} exact /> 
          <Route path="/ambassador/editpassword/:id" component={AmbassadorChangePassword} exact /> 
          <Route path="/certificate" component={CertificateGroup} exact /> 
          <Route path="/certificate/list/student/:id" component={CertificateList} exact /> 
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/dashboard/student" component={DashboardStudent} exact />
          <Route path="/dashboard/assignmentor/:student" component={AssignMentor} exact />
          <Route path="/dashboard/confirmmentor/:student/:group" component={ConfirmMentor} exact />
          <Route path="/dashboard/clearpending/:student" component={ClearPendingDashboard} exact />
          <Route path="/report" component={Reports} exact />
          <Route path="/code" component={ListCode} exact />
          <Route path="/code/show/:id" component={ShowCode} exact />
          <Route path="/code/edit/:id" component={EditCode} exact />
          <Route path="/admin" component={ListAdmin} exact />
          <Route path="/admin/new" component={NewAdmin} exact />
          <Route path="/admin/show/:id" component={ShowAdmin} exact />
          <Route path="/admin/edit/:id" component={EditAdmin} exact />
          <Route path="/admin/editpassword/:id" component={AdminPassword} exact /> 
          <Route path="/register" component={Register} exact /> 
          <Route path="/register/new/:id" component={RegisterStudent} exact /> 
          <Route path="/register/evaluation" component={RegisterEvaluation} exact /> 
          <Route path="/password" component={newPassword} exact /> 
          <Route path="/user/newpassword/:id" component={UserNewPassword} exact /> 
          <Redirect from="/" to="/login" />
        </Switch>
      </Router>,
  </Provider>,
  document.getElementById("root")
);
