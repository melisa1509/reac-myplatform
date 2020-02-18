import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-translate";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { newCourse } from "actions/courseActions.jsx";
import { store } from "store";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx'; 
import LanguageSelect from "views/Select/LanguageSelect.jsx";
import StateSelect from "views/Select/StateSelect.jsx";
// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

import { verifyChange } from "assets/validation/index.jsx";
import { createBrowserHistory } from "history";
import { withRouter } from 'react-router-dom';


const history = createBrowserHistory();
const style = {
    infoText: {
      fontWeight: "300",
      margin: "10px 0 30px",
      textAlign: "center"
    },
    inputAdornmentIcon: {
      color: "#555"
    },
    choiche: {
      textAlign: "center",
      cursor: "pointer",
      marginTop: "20px"
    },
    ...customSelectStyle,
    ...validationFormsStyle
};


class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // register form
            registerEmail: "",
            registerEmailState: "",
            registerPassword: "",
            registerPasswordState: "",
            registerConfirmPassword: "",
            registerConfirmPasswordState: "",
            registerCheckbox: false,
            registerCheckboxState: "",
            // login form
            loginEmail: "",
            loginEmailState: "",
            loginPassword: "",
            loginPasswordState: "",
            name: "",
            nameState: "",
            // type validation
            required: "",
            requiredState: "",
            typeEmail: "",
            typeEmailState: "",
            number: "",
            numberState: "",
            url: "",
            urlState: "",
            equalTo: "",
            whichEqualTo: "",
            equalToState: "",
            // range validation
            minLength: "",
            minLengthState: "",
            maxLength: "",
            maxLengthState: "",
            range: "",
            rangeState: "",
            minValue: "",
            minValueState: "",
            maxValue: "",
            maxValueState: "",

            courseName:"",
            courseNameState:"",
            courseDescription:"",
            courseDescriptionState:"",

            // Select
            simpleSelect: "",
            desgin: false,
            code: false,
            develop: false
        };
        this.registerClick = this.registerClick.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.saveClick = this.saveClick.bind(this);
        this.rangeClick = this.rangeClick.bind(this);
      }
     
      registerClick() {
        if (this.state.registerEmailState === "") {
          this.setState({ registerEmailState: "error" });
        }
        if (this.state.registerPasswordState === "") {
          this.setState({ registerPasswordState: "error" });
        }
        if (this.state.registerConfirmPasswordState === "") {
          this.setState({ registerConfirmPasswordState: "error" });
        }
        if (this.state.registerCheckboxState === "") {
          this.setState({ registerCheckboxState: "error" });
        }
      }
      loginClick() {
        if (this.state.loginEmailState === "") {
          this.setState({ loginEmailState: "error" });
        }
        if (this.state.loginPasswordState === "") {
          this.setState({ loginPasswordState: "error" });
        }
        if (this.state.nameState === "") {
          this.setState({ nameState: "error" });
        }
      }
      saveClick() {
        if (this.state.userNameState === "") {
          this.setState({ courseNameState: "error" });
        }
        if (this.state.userEmailState === "") {
          this.setState({ courseDescriptionState: "error" });
        }
        if (this.state.userLastNameState === "") {
            this.setState({ courseDescriptionState: "error" });
        }
        if (this.state.userLanguageState === "") {
            this.setState({ courseDescriptionState: "error" });
        }
        if (this.state.userCountryState === "") {
            this.setState({ courseDescriptionState: "error" });
        }
        if (this.state.userCityState === "") {
            this.setState({ courseDescriptionState: "error" });
        }
        if (this.state.userWhatsAppState === "") {
          this.setState({ courseDescriptionState: "error" });
        }
        if(this.state.courseNameState === "success" && this.state.courseDescriptionState === "success"){
          const stateRedux = store.getState();
          const params = {
            userName: this.state.userName,
            userEmail: this.state.userEmail,
            userLastName: this.state.userLastName,
            userLanguage: this.stateRedux.selected_language,
            userCountry: this.state.userCountry,
            userCity: this.state.userCity,
            userWhatsApp: this.state.userWhatsApp,
            redirect: this.props.history,
          }
          this.props.dispatchNewCourse(params);
        }
      }

      rangeClick() {
        if (this.state.minLengthState === "") {
          this.setState({ minLengthState: "error" });
        }
        if (this.state.maxLengthState === "") {
          this.setState({ maxLengthState: "error" });
        }
        if (this.state.rangeState === "") {
          this.setState({ rangeState: "error" });
        }
        if (this.state.minValueState === "") {
          this.setState({ minValueState: "error" });
        }
        if (this.state.maxValueState === "") {
          this.setState({ maxValueState: "error" });
        }
      }
    sendState() {
        return this.state;
    }
    handleSimple = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    isValidated() {
        return true;
    }

    componentWillUnmount() {
      localStorage.setItem('someSavedState', JSON.stringify(this.state))
    }

    componentWillMount() {
      const rehydrate = JSON.parse(localStorage.getItem('someSavedState'))
      this.setState(rehydrate)
    }


    render() {
        const { classes, active_user } = this.props;
        let { t } = this.props;
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      <Info>Email</Info>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                    <CustomInput
                     success={this.state.userEmailState === "success"}
                     error={this.state.userEmailState === "error"}
                     id="userEmail"
                     formControlProps={{
                         fullWidth: true
                     }}
                     inputProps={{
                         onChange: event =>
                         verifyChange(event, "userEmail", "length", 0, null, this),
                         type: "text",
                         rows:2,
                         value: active_user.first_name
                     }}
                    />
                  </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      <Info>{t("label.name")}</Info>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                      <CustomInput
                        success={this.state.userNameState === "success"}
                        error={this.state.userNameState === "error"}
                        id="userName"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event =>
                              verifyChange(event, "userName", "length", 0, null, this),
                          multiline: true,
                        }}
                      />
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      <Info>{t("label.lastName")}</Info>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                      <CustomInput
                        success={this.state.userLastNameState === "success"}
                        error={this.state.userLastNameState === "error"}
                        id="userLastName"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event =>
                              verifyChange(event, "userLastName", "length", 0, null, this),
                          multiline: true,
                        }}
                      />
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      <Info>{t("label.language")}</Info>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={5}>
                      <LanguageSelect />
                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      <Info>{t("label.country")}</Info>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                      <CustomInput
                          success={this.state.userCountryState === "success"}
                          error={this.state.userCountryState === "error"}
                          id="userCountry"
                          formControlProps={{
                              fullWidth: true
                          }}
                          inputProps={{
                              onChange: event =>
                              verifyChange(event, "userCountry", "length", 0, null, this),
                              type: "text",
                          }}
                      />
                  </GridItem>
                </GridContainer>
                <GridContainer >
                  <GridItem xs={12} sm={12} md={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      <Info>{t("label.city")}</Info>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                      <CustomInput
                          success={this.state.userCityState === "success"}
                          error={this.state.userCityState === "error"}
                          id="userCity"
                          formControlProps={{
                              fullWidth: true
                          }}
                          inputProps={{
                              onChange: event =>
                              verifyChange(event, "userCity", "length", 0, null, this),
                              type: "text",
                          }}
                      />
                  </GridItem>
                </GridContainer>
                <GridContainer >
                  <GridItem xs={12} sm={12} md={3}>
                    <FormLabel className={classes.labelHorizontal}>
                      <Info>{t("label.whatsApp")}</Info>
                    </FormLabel>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={9}>
                      <CustomInput
                          success={this.state.userwhatAppState === "success"}
                          error={this.state.userCityState === "error"}
                          id="userWhatsApp"
                          formControlProps={{
                              fullWidth: true
                          }}
                          inputProps={{
                              onChange: event =>
                              verifyChange(event, "userWhatsApp", "length", 0, null, this),
                              type: "text",
                          }}
                      />
                  </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8}>
                      <center>
                      <Button color="info" size="md" onClick={this.saveClick}>
                      {t("button.save")}
                      </Button>
                      </center>
                  </GridItem>
                </GridContainer>
            </GridItem>
          </GridContainer>
                
        );
    }
}

const mapStateToProps = state => ({ 
  active_user: state.loginReducer.active_user
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchNewCourse: params => dispatch(newCourse(params)), 
});

const EditFormComponent = translate('provider')(withStyles(style)(EditForm));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(EditFormComponent));



