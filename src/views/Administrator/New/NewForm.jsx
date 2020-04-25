import React from "react";
import { translate } from "react-translate";
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';
import { store } from "store";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import SuccessBold from "components/Typography/SuccessBold.jsx";
import CustomCheckbox from 'components/CustomCheckbox/CustomCheckbox.jsx';
import GridContainer from "components/Grid/GridContainer.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInputRedux from 'components/CustomInput/CustomInputRedux.jsx'; 
import { newAdministrator } from "actions/administratorActions.jsx"; 
import { errorRequiredFields } from "actions/generalActions.jsx";
import { successRequiredFields } from "actions/generalActions.jsx";
import { verifyChange } from "assets/validation/index.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";
import CountrySelect from "views/Select/CountrySelect.jsx";
import LanguageSelect from "views/Select/LanguageSelect.jsx";
import RoleSelect from "views/Select/RoleSelect.jsx";

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
      color:"red",
      fontSize:"20px"
    },
    ...customSelectStyle,
    ...validationFormsStyle
};


class NewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameState: "success",
            first_nameState: "success",
            last_nameState: "success",
        };
        this.saveClick = this.saveClick.bind(this);
        this.deleteClick= this.deleteClick.bind(this);
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
        
        if(this.state.usernameState === "error" || this.state.first_nameState === "error" || this.state.last_nameState === "error"){
          const stateRedux = store.getState();
          this.props.dispatchErrorRequiredFields();
        }
        if(this.state.usernameState === "success" && this.state.first_nameState === "success" && this.state.last_nameState ==="success" ){
        const reduxState = store.getState();
        this.props.dispatchNewAdministrator();
        this.props.dispatchSuccessRequiredFields();
        }
      }

      deleteClick(){
        this.props.dispatchDeleteSuccessful();
      }
      
    render() {
        const { classes, successfull_new, errorRequired, successRequired, new_administrator } = this.props;
        let { t } = this.props;
        const languages = {
          value:new_administrator.language_grader,
          options:[
             { label: t("label.english") },
             { label: t("label.spanish") },
             { label: t("label.french") },
          ]
     }
 
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <form>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { successfull_new ?      
                      <SnackbarContent
                        message={
                          <center>{t("label.save_success")}</center>
                        }
                        color="success"
                      />
                      : ""}
                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("label.email")+ " *"}
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
                      labelText={t("label.lastName")+ " *"}
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
                      component={CountrySelect}
                      name="country"
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={6}>
                    <Field
                      component={LanguageSelect}
                      name="language"
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={6}>
                    <Field
                      component={RoleSelect}
                      name="role"
                    />
                </GridItem>
              </GridContainer>
              <br/>
              <SuccessBold>
                  {t("label.language_grader")}
              </SuccessBold>
              <CustomCheckbox  data={languages} />
              <br/>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { errorRequired ? <Danger><h6 className={classes.infoText}>{t("label.require_fields")}</h6></Danger>: ""}
                      { successRequired ? "" :  ""}
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Link to={"/administrator"}>
                      <Button color="default" size="sm" onClick={this.deleteClick}>
                      {t("button.return_to_list")}
                      </Button>
                      {" "}
                      </Link>{" "}
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

NewForm = reduxForm({
  form: 'adminNewform', 
})(NewForm);


NewForm = connect(
  state => ({
    errorRequired:state.generalReducer.errorRequired,
    successRequired:state.generalReducer.successRequired,
    successfull_new:state.generalReducer.successfull_new,
    new_administrator: state.administratorReducer.new_administrator
  }),
  { dispatchNewAdministrator: newAdministrator, dispatchErrorRequiredFields: errorRequiredFields, dispatchSuccessRequiredFields: successRequiredFields, dispatchDeleteSuccessful: deleteSuccessful},
)(NewForm);

export default  withRouter(translate('provider')(withStyles(style)(NewForm)));


