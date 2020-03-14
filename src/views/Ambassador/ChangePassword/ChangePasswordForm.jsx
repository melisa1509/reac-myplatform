import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-translate";
// react component for creating dynamic tables

import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import FormLabel from "@material-ui/core/FormLabel";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx'; 

// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

import { verifyChange } from "assets/validation/index.jsx";
import { withRouter } from 'react-router-dom';
import { editPassword } from "actions/ambassadorActions.jsx";

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


class ChangePasswordForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ambassadorPasswordState:"",
            ambassadorPassword:"",
            ambassadorRepeatPasswordState:"",
            ambassadorRepeatPassword:"",
            key:"",
  
            // Select
            simpleSelect: "",
            desgin: false,
            code: false,
            develop: false
        };
        this.saveClick = this.saveClick.bind(this);
      }
      
      saveClick() {
        if (this.state.ambassadorPasswordState === "") {
          this.setState({ ambassadorPasswordState: "error" });
        }
        if (this.state.ambassadorRepeatPasswordState === "") {
          this.setState({ ambassadorRepeatPasswordState: "error" });
        }
        if(this.state.ambassadorPasswordState === "success" && this.state.ambassadorRepeatPasswordState === "success"){
          const params = {
            ambassadorPassword: this.state.ambassadorPassword,
            ambassadorRepeatPassword: this.state.ambassadorRepeatPassword,
            redirect: this.props.history,
          }
          this.props.dispatchEditPassword(params,this.props.match.params.id);
        }
      }
      
    render() {
        const { } = this.props;
        let { t } = this.props;
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={7}>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <CustomInput
                     labelText={t("label.password")}
                     success={this.state.ambassadorPasswordState === "success"}
                     error={this.state.ambassadorPasswordState === "error"}
                     id="ambassadorPassword"
                     formControlProps={{
                         fullWidth: true,
                     }}
                     inputProps={{
                         onChange: event =>
                         verifyChange(event, "ambassadorPassword", "password", 0, null, this),
                         type: "password",
                         autoComplete: "off",
                     }}
                    />
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <CustomInput
                        labelText={t("label.repeat_password")}
                        success={this.state.ambassadorRepeatPasswordState === "success"}
                        error={this.state.ambassadorRepeatPasswordState === "error"}
                        id="ambassadorRepeatPassword"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event =>
                          verifyChange(event,"ambassadorRepeatPassword","password","ambassadorPassword", null, this),
                          type: "password",
                          autoComplete: "off"
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
  edit_password: state.ambassadorReducer.edit_password,
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchEditPassword: (params,key) => dispatch(editPassword(params,key)),
});

const ChangePasswordFormComponent = translate('provider')(withStyles(style)(ChangePasswordForm));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ChangePasswordFormComponent));

