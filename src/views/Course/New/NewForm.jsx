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
import GridContainer from "components/Grid/GridContainer.jsx";
import SweetAlert from "react-bootstrap-sweetalert";
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInputRedux from 'components/CustomInput/CustomInputRedux.jsx'; 
import TextEditor from 'components/TextEditor/TextEditor.jsx';
import { showAmbassadorRedirect  } from "actions/ambassadorActions.jsx";
import { newAmbassador } from "actions/ambassadorActions.jsx"; 
import { errorRequiredFields } from "actions/generalActions.jsx";
import { successRequiredFields } from "actions/generalActions.jsx";
import { verifyChange } from "assets/validation/index.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";
import LanguageSelect from "views/Select/LanguageSelect.jsx";
import CountrySelect from "views/Select/CountrySelect.jsx";

// style for this view
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import { withRouter } from 'react-router-dom';
import DragAndDrop from "components/DragAndDrop/DragAndDrop";

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
    ...validationFormsStyle,
    ...sweetAlertStyle
};


class NewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usernameState: "success",
            first_nameState: "success",
            last_nameState: "success",
            cityState: "success",
            whatsappState: "success",
            codeState:"success",
            passwordState:"success"
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
        if (this.state.cityState === "") {
          this.setState({ cityState: "error" });
        }
        if (this.state.whatsappState === "") {
          this.setState({ whatsappState: "error" });
        }
        if (this.state.codeState === "") {
          this.setState({ codeState: "error" });
        }
        if (this.state.passwordState === "") {
          this.setState({ passwordState: "error" });
        }
        if(this.state.usernameState === "error" || this.state.first_nameState === "error" || this.state.last_nameState === "error"){
          const stateRedux = store.getState();
          this.props.dispatchErrorRequiredFields();
        }
        if(this.state.usernameState === "success" && this.state.first_nameState === "success"&& this.state.last_nameState === "success"){
        const reduxState = store.getState();
        this.props.dispatchNewAmbassador();
        this.props.dispatchSuccessRequiredFields();
        }
      }
     
      deleteClick() {
        this.props.dispatchShowAmbassadorRedirect(this.props.history)
        this.props.dispatchDeleteSuccessful();
      }
      
    render() {
        const { classes, successfull_new, errorRequired, successRequired } = this.props;
        let { t } = this.props;
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <form>
             
              
             
              <GridContainer >
                  <GridItem xs={12} sm={12} md={7}>
                    <Field
                      name="list2"
                      component={DragAndDrop}
                    />
                  </GridItem>
              </GridContainer>
             
            
              <GridContainer >
                  <GridItem xs={12} sm={12} md={9}>
                    <Field
                      labelText={t("label_code")+ " *"}
                      component={CustomInputRedux}
                      name="code"
                      success={this.state.codeState === "success"}
                      error={this.state.codeState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "code", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { errorRequired ? <Danger><h6 className={classes.infoText}>{t("label_require_fields")+ "*" }</h6></Danger>: ""}
                      { successRequired ? "" :  ""}
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Link to={"/ambassador"}>
                      <Button color="default" size="sm" onClick={this.loginClick}>
                      {t("button_return_to_list")}
                      </Button>
                      </Link>
                      {" "}
                      <Button color="info" size="sm" onClick={this.saveClick}>
                      {t("button_create")}
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
  form: 'ambassadorNewform', 
})(NewForm);


NewForm = connect(
  state => ({
    errorRequired:state.generalReducer.errorRequired,
    successRequired:state.generalReducer.successRequired,
    new_ambassador: state.ambassadorReducer.new_ambassador,
    successfull_new:state.generalReducer.successfull_new,
  }),
  { dispatchNewAmbassador: newAmbassador, dispatchErrorRequiredFields: errorRequiredFields, dispatchSuccessRequiredFields: successRequiredFields, dispatchShowAmbassadorRedirect: showAmbassadorRedirect, dispatchDeleteSuccessful: deleteSuccessful},
)(NewForm);

export default  withRouter(translate(withStyles(style)(NewForm)));



