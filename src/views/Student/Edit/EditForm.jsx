import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-translate";
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { store } from "store";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import SuccessLabel from "components/Typography/SuccessLabel.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInputRedux from 'components/CustomInput/CustomInputRedux.jsx'; 
import { showStudent } from "actions/studentActions.jsx";
import { editStudent } from "actions/studentActions.jsx"; 
import { errorRequiredFields } from "actions/generalActions.jsx";
import { successRequiredFields } from "actions/generalActions.jsx";
import { verifyChange } from "assets/validation/index.jsx";
import LanguageSelect from "views/Select/LanguageSelect.jsx";
import CountrySelect from "views/Select/CountrySelect.jsx";

// style for this view
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
      color:"red"
    },
    ...customSelectStyle,
    ...validationFormsStyle
};


class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameState: "success",
            first_nameState: "success",
            last_nameState: "success",
            cityState: "success",
            whatsappState: "success"
        };
        this.saveClick = this.saveClick.bind(this);
      }
     
      saveClick() {
        if (this.state.usernameState === "") {
          this.setState({ usernameState: "error" });
        }
        if (this.state.first_nameState === "") {
          this.setState({ first_nameState: "error" });
        }
        if (this.state.last_nameState === "") {
          this.setState({ last_nameState: "error" });
        }
        if (this.state.cityState === "") {
          this.setState({ cityState: "error" });
        }
        if (this.state.whatsappState === "") {
          this.setState({ whatsappState: "error" });
        }
        if(this.state.usernameState === "error" || this.state.first_nameState === "error" || this.state.last_nameState === "error"){
          const stateRedux = store.getState();
          this.props.dispatchErrorRequiredFields();
        }
        if(this.state.usernameState === "success" && this.state.first_nameState === "success"&& this.state.last_nameState === "success"){
        const reduxState = store.getState();
        this.props.dispatchEditStudent();
        this.props.dispatchSuccessRequiredFields();
        }
      }
     
      componentDidMount() {
        this.props.loadShowStudent(this.props.match.params.id);
      }
      
    render() {
        const { classes, successfull_edit, editError, errorRequired, successRequired, show_student } = this.props;
        let { t } = this.props;
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <form>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { editError ?      
                      <SnackbarContent
                        message={
                          <center>{t("label.update_error")}</center>
                        }
                        close
                        color="danger"
                      />
                      : ""}
                  </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { successfull_edit ?      
                      <SnackbarContent
                        message={
                          <center>{t("label.save_success")}</center>
                        }
                        close
                        color="success"
                      />
                      : ""}
                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("label.username")+ " *"}
                      component={CustomInputRedux}
                      name="username"
                      success={this.state.usernameState === "success"}
                      error={this.state.usernameState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "username", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("label.name")+ " *"}
                      component={CustomInputRedux}
                      name="first_name"
                      success={this.state.first_nameState === "success"}
                      error={this.state.first_nameState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "first_name", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("label.lastname")+ " *"}
                      component={CustomInputRedux}
                      name="last_name"
                      success={this.state.last_nameState === "success"}
                      error={this.state.last_nameState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "last_name", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      name="language"
                      formName="programmbs"
                      component={LanguageSelect}
                    />
                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={7}>
                    <Field
                      name="country"
                      formName="programmbs"
                      component={CountrySelect}
                    />
                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={9}>
                    <Field
                      labelText={t("label.city")+ " *"}
                      component={CustomInputRedux}
                      name="city"
                      success={this.state.cityState === "success"}
                      error={this.state.cityState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "city", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("label.whatsapp")+ " *"}
                      component={CustomInputRedux}
                      name="whatsapp"
                      success={this.state.whatsappState === "success"}
                      error={this.state.whatsappState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "whatsapp", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { errorRequired ? <Danger><h6 className={classes.infoText}>{t("label.require_fields")+ "*" }</h6></Danger>: ""}
                      { successRequired ? "" :  ""}
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Link to={"/student"}>
                      <Button color="default" size="sm" onClick={this.loginClick}>
                      {t("button.return_to_list")}
                      </Button>
                      </Link>
                      {" "}
                      <Link to={"/student/editpassword/" +  show_student.id}>
                      <Button color="warning" size="sm">
                      {t("button.change_password")}
                      </Button>
                      </Link>
                      {" "}
                      <Button color="info" size="sm" onClick={this.saveClick}>
                      {t("button.save")}
                      </Button>
                      {" "}
                      </center>
                  </GridItem>
              </GridContainer>
              </form>
            </GridItem>
          </GridContainer>
                
        );
    }
}

EditForm = reduxForm({
  form: 'studentform', 
})(EditForm);


EditForm = connect(
  state => ({
    initialValues: state.studentReducer.data,
    errorRequired:state.generalReducer.errorRequired,
    successRequired:state.generalReducer.successRequired,
    edit_student: state.studentReducer.edit_student,
    editError: state.studentReducer.editError,
    successfull_edit:state.generalReducer.successfull_edit,
    show_student: state.studentReducer.show_student,
  }),
  { loadShowStudent: showStudent, dispatchEditStudent: editStudent, dispatchErrorRequiredFields: errorRequiredFields, dispatchSuccessRequiredFields: successRequiredFields},
)(EditForm);

export default  withRouter(translate('provider')(withStyles(style)(EditForm)));


