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
import CustomInputReduxMod from 'components/CustomInput/CustomInputReduxMod.jsx';
import FileUpload from "components/CustomUpload/FileUpload.jsx";
import Table from "components/Table/Table.jsx";
import TextEditor from "components/TextEditor/TextEditor";
import SuccessBold from "components/Typography/SuccessBold.jsx";

import { newGrantAmbassador } from "actions/grantActions";
import { sendRevisionGrantAmbassador } from "actions/grantActions";
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
            question2State: "",
        };
        this.saveClick = this.saveClick.bind(this);
        this.deleteClick= this.deleteClick.bind(this);
        this.sendRevision= this.sendRevision.bind(this);
    }


    saveClick() {
      this.props.dispatchNewGrantAmbassador();
    }

    sendRevision() {
      this.props.dispatchSendRevisionGrantAmbassador();
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
        const { classes, errorRequired, show_grant, successfull_new, active_user } = this.props;
        let { t } = this.props;  
        let i = "";
        let date=[];
          for (i = 0; i < 10 ; i++) {
              date[i]=show_grant.date[i]
          }     
        return (
          <GridContainer justify="center">
            <GridContainer justify="center">
            <center><h3 >{t("title_grant_overview")}</h3></center>
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
            <br/>
            <center><h3 >{t("title_grant_application")}</h3></center>
            <GridItem xs={12} sm={12} md={11}>
              <form>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      
                      {successfull_new ? 
                          <SweetAlert
                            success
                            showCancel
                            style={{ display: "block", marginTop: "-100px" }}
                            onConfirm={() => this.sendRevision()}
                            onCancel={() => this.deleteClick()}
                            confirmBtnText={t("button_send_revision")}
                            cancelBtnText={t("button_continue")}
                            confirmBtnCssClass={
                                this.props.classes.button + " " + this.props.classes.danger
                            }
                            cancelBtnCssClass={
                              this.props.classes.button + " " + this.props.classes.success
                            }
                          >
                          <h4>{t("label_save_success")}</h4>
                          </SweetAlert>
                        : ""}

                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={4}>
                    <Field
                      labelText={t("label_success_ambassador_code")+ " *"}
                      component={CustomInputReduxMod}
                      name="code"
                      success
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
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel
                        htmlFor="question1"
                    >
                        <SuccessBold>{t("question_grant1")}</SuccessBold>
                    </InputLabel>
                    <br/>
                  <Field
                      name="question1"
                      component={TextEditor}
                      height={500}
                      width={900}
                      lang={active_user.language}
                    />
                </GridItem>
              </GridContainer>
              <br/>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel
                        htmlFor="question2"
                    >
                        <SuccessBold>{t("question_grant2")}</SuccessBold>
                    </InputLabel>
                    <br/>
                  <Field
                      name="question2"
                      component={TextEditor}
                      height={500}
                      width={900}
                      lang={active_user.language}
                    />
                </GridItem>
              </GridContainer>
              <br/>
              <center><h5 className={classes.cardTitleCenter} >{t("question_grant")}</h5></center>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={4}>
                    <Field
                      labelText={t("question_grant3")}
                      component={CustomInputReduxMod}
                      name="number"
                      success
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={11}>
                    <Field
                      labelText={t("question_grant4")}
                      component={CustomInputReduxMod}
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
                      component={CustomInputReduxMod}
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
              <GridContainer >
                  <GridItem xs={12} sm={12} md={4}>
                  <h6 className={classes.cardTitleCenter} >{t("question_grant6")}</h6>
                    <Field
                      component={CustomInputReduxMod}
                      name="question6"
                      success
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>              
              <br/>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel className={classes.label}>
                        <SuccessBold className={classes.label}>{t("grant_file")}</SuccessBold>
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
                      <Button color="info" size="sm" onClick={this.saveClick}>
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
  form: 'grantAmbassadorNewform', 
})(NewForm);


NewForm = connect(
  state => ({
    errorRequired:state.generalReducer.errorRequired,
    successRequired:state.generalReducer.successRequired,
    successfull_new:state.generalReducer.successfull_new,
    new_grant: state.grantReducer.new_grant,
    show_grant: state.grantReducer.show_grant,
    active_user: state.loginReducer.active_user
  }),
  { dispatchSendRevisionGrantAmbassador: sendRevisionGrantAmbassador, dispatchShowGrant: showGrant, dispatchNewGrantAmbassador: newGrantAmbassador, dispatchErrorRequiredFields: errorRequiredFields, dispatchSuccessRequiredFields: successRequiredFields, dispatchDeleteSuccessful: deleteSuccessful, dispatchShowGrantRedirect: showGrantRedirect },
)(NewForm);

export default  withRouter(translate(withStyles(style)(NewForm)));



