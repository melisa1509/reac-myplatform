import React from "react";
import PropTypes from "prop-types";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { store } from "store";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import SuccessBold from "components/Typography/SuccessBold.jsx";
import CustomCheckbox from 'components/CustomCheckbox/CustomCheckboxRedux.jsx';
import GridContainer from "components/Grid/GridContainer.jsx";
import SweetAlert from "react-bootstrap-sweetalert";
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInputRedux from 'components/CustomInput/CustomInputRedux.jsx'; 
import { newAdministrator } from "actions/administratorActions.jsx"; 
import { showAdminRedirect  } from "actions/administratorActions.jsx";
import { errorRequiredFields } from "actions/generalActions.jsx";
import { successRequiredFields } from "actions/generalActions.jsx";
import { verifyChange } from "assets/validation/index.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";
import CountrySelect from "views/Select/CountrySelect.jsx";
import LanguageSelect from "views/Select/LanguageSelect.jsx";
import RoleSelect from "views/Select/RoleSelect.jsx";

// style for this view
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import { withRouter } from 'react-router-dom';

const style = {
    infoText: {
      fontWeight: "500",
      textAlign: "left"
    },
    inputAdornmentIcon: {
      color: "#555"
    },
    choiche: {
      textAlign: "center",
      cursor: "pointer",
      marginTop: "20px"
    },
    label:{
      color:"red",
      fontSize:"20px"
    },
    ...customSelectStyle,
    ...validationFormsStyle, 
    ...sweetAlertStyle
};


class Checkbox extends React.Component {
   
    render() {
        const { student } = this.props;
        return (
            <Field
                component={CustomCheckbox}
                name={"list["+ student +"]"}
                label={""}                             
            />
        );
    }
}
Checkbox.propTypes = {
  classes: PropTypes.object
};

Checkbox = reduxForm({
  form: 'certificateform', 
})(Checkbox);


Checkbox = connect(
  state => ({ }),
  { },
)(Checkbox);

export default  withRouter(translate(withStyles(style)(Checkbox)));



