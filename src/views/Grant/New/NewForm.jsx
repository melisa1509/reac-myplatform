import React from "react";
import PropTypes from "prop-types";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
import SuccessLabel from "components/Typography/SuccessLabel.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SweetAlert from "react-bootstrap-sweetalert";
import Button from "components/CustomButtons/Button.jsx";
import CustomInputRedux from 'components/CustomInput/CustomInputRedux.jsx'; 
import DateTimePicker from 'components/DateTimePicker/DateTimePickerRedux.jsx';
import { newGrant } from "actions/grantActions.jsx"; 
import { errorRequiredFields } from "actions/generalActions.jsx";
import { successRequiredFields } from "actions/generalActions.jsx";
import { showGrantRedirect  } from "actions/grantActions.jsx";
import { verifyChange } from "assets/validation/index.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";

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
      fontSize:"30px"
    },
    ...customSelectStyle,
    ...validationFormsStyle,
    ...sweetAlertStyle
};


class NewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            amountState: "",
            participants_numberState: "",
            descriptionState: "",
        };
        this.saveClick = this.saveClick.bind(this);
        this.deleteClick= this.deleteClick.bind(this);
    }


    saveClick() {
        if (this.state.descriptionState === "") {
            this.setState({ descriptionState: "error" });    
            this.props.dispatchErrorRequiredFields();        
        }       

        if (this.state.amountState === "") {
          this.setState({ amountState: "error" });
          this.props.dispatchErrorRequiredFields();            
        }        

        if (this.state.participants_numberState === "") {
          this.setState({ participants_numberState: "error" }); 
          this.props.dispatchErrorRequiredFields();           
        }        

        if(this.state.participants_numberState === "success" || this.state.descriptionState === "success" || this.state.amountState === "success"){     
          this.props.dispatchNewGrant();
          this.props.dispatchSuccessRequiredFields();
        }
    }

    deleteClick(){
      this.props.dispatchShowGrantRedirect(this.props.history)
      this.props.dispatchDeleteSuccessful();
    }

    
    render() {
        const { classes, errorRequired, successRequired, successfull_new } = this.props;
        let { t } = this.props;       
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <form>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { successfull_new ?      
                        <SweetAlert
                          success
                          style={{ display: "block", marginTop: "-100px", close:true }}
                          onConfirm={() => this.deleteClick()}
                          confirmBtnCssClass={
                              this.props.classes.button + " " + this.props.classes.success
                          }
                          confirmBtnText={t("button_continue")}
                          >
                          <h4>{t("label_save_success")}</h4>
                        </SweetAlert> 
                      : ""}
                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={4}>
                    <Field
                      labelText={t("label_amount")+ " *"}
                      component={CustomInputRedux}
                      name="amount"
                      success={this.state.amountState === "success"}
                      error={this.state.amountState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "amount", "number", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={5}>
                    <Field
                      labelText={t("label_number_students_enrolled")+ " *"}
                      component={CustomInputRedux}
                      name="participants_number"
                      success={this.state.participants_numberState === "success"}
                      error={this.state.participants_numberState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "participants_number", "number", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={6}>
                  <InputLabel className={classes.label}>
                    <SuccessLabel>{t("label_date")}</SuccessLabel>
                  </InputLabel>
                    <Field
                      component={DateTimePicker}
                      name="date"
                    />
                </GridItem>
              </GridContainer>   
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("label_description")+ " *"}
                      component={CustomInputRedux}
                      name="description"
                      success={this.state.descriptionState === "success"}
                      error={this.state.descriptionState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 7,
                        onKeyUp: event => 
                              verifyChange(event, "description", "length", 0, null, this),
                      }}
                    />
                </GridItem>
              </GridContainer>                        
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      component={CustomInputRedux}
                      name="id_ambassador"
                      inputProps={{
                        type: "hidden",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { errorRequired ? <Danger><h6 className={classes.infoText}>{t("label_require_fields")}</h6></Danger>: ""}
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                  <div className={classes.center}>
                      <Link to={"/grant"}>
                      <Button color="default" size="sm">
                      {t("button_return_to_list")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Button color="info" size="sm" onClick={this.saveClick.bind(this)}>
                      {t("button_save")}
                      </Button>
                      {" "}
                  </div>
                  </GridItem>
              </GridContainer>
              
              </form>
            </GridItem>
          </GridContainer>
                
        );
    }
}

NewForm.propTypes = {
  classes: PropTypes.object
};

NewForm = reduxForm({
  form: 'grantNewform', 
})(NewForm);


NewForm = connect(
  state => ({
    errorRequired:state.generalReducer.errorRequired,
    successRequired:state.generalReducer.successRequired,
    successfull_new:state.generalReducer.successfull_new,
    new_grant: state.grantReducer.new_grant,
  }),
  { dispatchNewGrant: newGrant, dispatchErrorRequiredFields: errorRequiredFields, dispatchSuccessRequiredFields: successRequiredFields, dispatchDeleteSuccessful: deleteSuccessful, dispatchShowGrantRedirect: showGrantRedirect },
)(NewForm);

export default  withRouter(translate(withStyles(style)(NewForm)));



