import React from "react";
import PropTypes from "prop-types";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

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
import FileUpload from "components/CustomUpload/FileUpload.jsx";
import Table from "components/Table/Table.jsx";


import { newGrant } from "actions/grantActions.jsx"; 
import { errorRequiredFields } from "actions/generalActions.jsx";
import { successRequiredFields } from "actions/generalActions.jsx";
import { showGrantRedirect  } from "actions/grantActions.jsx";
import { verifyChange } from "assets/validation/index.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";
import { showGrant } from "actions/grantActions.jsx";

// style for this view
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";


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
            titleState: "",
        };
        this.saveClick = this.saveClick.bind(this);
        this.deleteClick= this.deleteClick.bind(this);
    }


    saveClick() {

        if (this.state.titleState === "") {
          this.setState({ titleState: "error" });
          this.props.dispatchErrorRequiredFields();            
        }        


        if(this.state.titleState === "success"){     
          this.props.dispatchNewGrant();
          this.props.dispatchSuccessRequiredFields();
        }
    }

    deleteClick(){
      this.props.dispatchDeleteSuccessful();
    }

    componentDidMount() {
      this.props.dispatchShowGrant(this.props.match.params.id);
    }

    updateFileName = (key) => {
      this.props.change('file', key);
    }

    
    render() {
        const { classes, errorRequired, show_grant, successfull_new } = this.props;
        let { t } = this.props;  
        let i = "";
        let date=[];
          for (i = 0; i < 10 ; i++) {
              date[i]=show_grant.date[i]
          }     
        return (
          <GridContainer justify="center">
            <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={11}>
              <Table
                striped
                tableData={[
                  [<th>{t("label_administrator")}</th>,show_grant.administrator.first_name+ " "+ show_grant.administrator.last_name,],
                  [<th>{t("label_date")}</th>,date],
                  [<th>{t("label_language")}</th>, t(show_grant.language)],
                  
                ]}
              />
              <Table
                striped={false}
                tableData={[
                  [<div dangerouslySetInnerHTML={{ __html: show_grant.description }}></div>],
                ]}
              />
            <br/>
            </GridItem>
          </GridContainer>
            <GridItem xs={12} sm={12} md={11}>
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
                  <GridItem xs={12} sm={12} md={3}>
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
              <GridContainer >
                  <GridItem xs={12} sm={12} md={3}>
                    <Field
                      labelText={t("label_participants_number")+ " *"}
                      component={CustomInputRedux}
                      name="number"
                      success={this.state.numberState === "success"}
                      error={this.state.numberState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "number", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={11}>
                    <Field
                      labelText={t("question_grant1")}
                      component={CustomInputRedux}
                      name="question1"
                      success
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 7,
                      }}
                    />
                </GridItem>
              </GridContainer> 
              <GridContainer >
                <GridItem xs={12} sm={12} md={11}>
                    <Field
                      labelText={t("question_grant2")}
                      component={CustomInputRedux}
                      name="question2"
                      success
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 7,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <h5 className={classes.cardTitleCenter} >{t("question_grant")}</h5>
              <GridContainer >
                <GridItem xs={12} sm={12} md={5}>
                    <Field
                      labelText={t("question_grant3")}
                      component={CustomInputRedux}
                      name="question3"
                      success
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "question3", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={11}>
                    <Field
                      labelText={t("question_grant4")}
                      component={CustomInputRedux}
                      name="question4"
                      success
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 7,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={11}>
                    <Field
                      labelText={t("question_grant5")}
                      component={CustomInputRedux}
                      name="question5"
                      success
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        multiline: true,
                        rows: 7,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <h5 className={classes.cardTitleCenter} >{t("question_grant6")}</h5>
              <GridContainer >
                <GridItem xs={12} sm={12} md={3}>
                    <Field
                      component={CustomInputRedux}
                      name="question6"
                      success
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "question6", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <br/>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel className={classes.label}>
                        <SuccessLabel className={classes.label}>{t("grant_file")}</SuccessLabel>
                    </InputLabel>                
                    <Field
                      component={FileUpload}
                      name="file"
                      changeFileName = {this.updateFileName}
                      inputProps={{
                        type: "file",
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
    show_grant: state.grantReducer.show_grant,
  }),
  { dispatchShowGrant: showGrant, dispatchNewGrant: newGrant, dispatchErrorRequiredFields: errorRequiredFields, dispatchSuccessRequiredFields: successRequiredFields, dispatchDeleteSuccessful: deleteSuccessful, dispatchShowGrantRedirect: showGrantRedirect },
)(NewForm);

export default  withRouter(translate(withStyles(style)(NewForm)));



