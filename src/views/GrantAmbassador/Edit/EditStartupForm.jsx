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
import SweetAlert from "react-bootstrap-sweetalert";
import TextEditor from "components/TextEditor/TextEditor";
import CustomInputReduxMod from 'components/CustomInput/CustomInputReduxMod.jsx';
import FileUpload from "components/CustomUpload/FileUpload.jsx";
import Table from "components/Table/Table.jsx";
import SuccessBold from "components/Typography/SuccessBold.jsx";
import MutedBold from "components/Typography/MutedBold.jsx";
import InfoBold from "components/Typography/InfoBold.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { showGrant, showGrantAmbassador } from "actions/grantActions.jsx";
import { sendRevisionGrantAmbassador } from "actions/grantActions"; 
import { errorRequiredFields } from "actions/generalActions.jsx";
import { successRequiredFields } from "actions/generalActions.jsx";
import { verifyChange } from "assets/validation/index.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";
import { showDate } from "assets/functions/general.jsx";
import { BASE_URL } from 'constants/urlTypes';

// style for this view
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import { withRouter } from 'react-router-dom';
import { editGrantAmbassador } from "actions/grantActions";
import YesNotSelect from "views/Select/YesNotSelect";

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
      fontWeight: "500",
    },
    ...customSelectStyle,
    ...validationFormsStyle,
    ...sweetAlertStyle
};


class EditStartupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          codeState:  "success",
          numberState: "success",
          question3State: "success",
          question4State: "success",
          question5State: "success",
          question6State: "success",
          question7State: "success",
          question8State: "success",
          question9State: "success",
          question10State: "success",
          question11State: "success",
          question13State: "success",
          question14State: "success",
      };
        this.saveClick = this.saveClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
        this.sendRevision = this.sendRevision.bind(this);
      }

     
      saveClick() {
        if (this.state.codeState === "") {
          this.setState({ codeState: "error" });
          this.props.dispatchErrorRequiredFields();
        }

        if (this.state.numberState === "") {
          this.setState({ numberState: "error" });
          this.props.dispatchErrorRequiredFields();
        }

        if (this.state.question3State === "") {
          this.setState({ question3State: "error" });
          this.props.dispatchErrorRequiredFields();
        }

        if (this.state.question4State === "") {
          this.setState({ question4State: "error" });
          this.props.dispatchErrorRequiredFields();
        }

        if (this.state.question5State === "") {
          this.setState({ question5State: "error" });
          this.props.dispatchErrorRequiredFields();
        }

        if (this.state.question6State === "") {
          this.setState({ question6State: "error" });
          this.props.dispatchErrorRequiredFields();
        }

        if (this.state.question7State === "") {
          this.setState({ question7State: "error" });
          this.props.dispatchErrorRequiredFields();
        }

        if (this.state.question8State === "") {
          this.setState({ question8State: "error" });
          this.props.dispatchErrorRequiredFields();
        }

        if (this.state.question9State === "") {
          this.setState({ question9State: "error" });
          this.props.dispatchErrorRequiredFields();
        }

        if (this.state.question10State === "") {
          this.setState({ question10State: "error" });
          this.props.dispatchErrorRequiredFields();
        }

        if (this.state.question11State === "") {
          this.setState({ question11State: "error" });
          this.props.dispatchErrorRequiredFields();
        }

        if (this.state.question14State === "") {
          this.setState({ question14State: "error" });
          this.props.dispatchErrorRequiredFields();
        }
 
        if(this.state.codeState === "success"  && this.state.numberState === "success"  && this.state.question3State === "success" && this.state.question4State === "success" && this.state.question5State === "success" && this.state.question6State === "success" && this.state.question7State === "success" && this.state.question8State === "success" && this.state.question9State === "success" && this.state.question10State === "success" && this.state.question11State === "success"  && this.state.question14State === "success"){
          this.props.dispatchEditGrantAmbassador();
          this.props.dispatchSuccessRequiredFields();
        }
      
    }

      sendRevision() {
        this.props.dispatchDeleteSuccessful();
        this.props.dispatchSendRevisionGrantAmbassador();
      }

      deleteClick(){
        this.props.dispatchDeleteSuccessful();
      }

      componentDidMount() {
        this.props.loadShowGrant(this.props.match.params.id);
        this.props.loadShowGrantAmbassador(this.props.match.params.ambassador);
      }

      updateFileName = (key) => {
        this.props.change('file', key);
      }

      updateFileName2 = (key) => {
        this.props.change('file2', key);
      }
      
    render() {
        const { classes, grant_deadline, successfull_edit, editError, errorRequired, show_grant, active_user, successful_send, show_grant_ambassador } = this.props;
        let { t } = this.props;
       
        return (
          <GridContainer justify="center">
            <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <center><h3 >{t("title_grant_overview")}</h3></center>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={11}>
                   
                          {show_grant_ambassador.state === "state.revision" ? <center><Danger><h5 className={classes.infoText}>{t("label_grant_success_revision")}</h5></Danger></center>: ""}
                          {show_grant_ambassador.state === "state.approved" ? <center><Danger><h5 className={classes.infoText}>{t("label_grant_application_approved")}</h5></Danger></center>: ""}
                          {show_grant_ambassador.state === "state.reject" ? <center><Danger><h5 className={classes.infoText}>{t("label_sent_reject_successful")}</h5></Danger></center>: ""}
                          {show_grant_ambassador.state === "state.correction" ? <center><Danger><h5 className={classes.infoText}>{t("state_correction")}</h5></Danger></center>: ""}
                          {show_grant_ambassador.state === "state.correction" ? <div>{show_grant_ambassador.correction}</div>: ""}
                          {show_grant_ambassador.state === "state.reject" ? <div>{show_grant_ambassador.correction}</div>: ""}
                          {show_grant_ambassador.state === "state.approved" ? <div>{show_grant_ambassador.correction}</div>: ""}
                  </GridItem>
                  <GridItem xs={12} sm={12} md={11}>
                    <br/>
                    <Table
                      striped
                      tableData={[
                        [<th>{t("label_administrator")}</th>,show_grant.administrator.first_name+ " "+ show_grant.administrator.last_name,],
                        [<th>{t("label_deadline_applications")}</th>, showDate(grant_deadline)],
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
            <center><h3 >{t("title_grant_application_startup")}</h3></center>
            <GridItem xs={12} sm={12} md={11}>
              <form>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { editError ?      
                      <SnackbarContent
                        message={
                          <center>{t("label_update_error")}</center>
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
                        <SweetAlert
                          success
                          showCancel
                          style={{ display: "block", marginTop: "-100px" }}
                          onConfirm={() => this.sendRevision()}
                          onCancel={() => this.deleteClick()}
                          confirmBtnText={t("button_send_revision")}
                          cancelBtnText={t("button_continue")}
                          confirmBtnCssClass={
                              this.props.classes.button + " " + this.props.classes.warning
                          }
                          cancelBtnCssClass={
                              this.props.classes.button + " " + this.props.classes.success
                          }
                        >
                          <h4>{t("label_save_success")}</h4>
                        </SweetAlert> 
                      : ""}
                      {successful_send ? 
                          <SweetAlert
                            success                            
                            style={{ display: "block", marginTop: "-100px" }}
                            onConfirm={() => this.deleteClick()}
                            confirmBtnText={t("button_continue")}
                            confirmBtnCssClass={
                              this.props.classes.button + " " + this.props.classes.success
                            }
                          >
                          <h4>{t("label_grant_success_revision")}</h4>
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
                      success={this.state.codeState === "success"}
                      error={this.state.codeState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "code", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <br/>
              <center><InfoBold><h4 className={classes.cardTitleCenter} >{t("label_grant_history")}</h4></InfoBold></center>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={5}>
                    <Field
                      labelText={t("question_startup_grant3")}
                      component={CustomInputReduxMod}
                      name="question3"
                      success={this.state.question3State === "success"}
                      error={this.state.question3State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "number", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={5}>
                    <Field
                      labelText={t("question_startup_grant4")}
                      component={CustomInputReduxMod}
                      name="question4"
                      success={this.state.question4State === "success"}
                      error={this.state.question4State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question4", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={5}>
                    <Field
                      labelText={t("question_startup_grant5")}
                      component={CustomInputReduxMod}
                      name="question5"
                      success={this.state.question5State === "success"}
                      error={this.state.question5State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question5", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={5}>
                    <Field
                      labelText={t("question_startup_grant7")}
                      component={CustomInputReduxMod}
                      name="question7"
                      success={this.state.question7State === "success"}
                      error={this.state.question7State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question7", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <br/>
              <center><InfoBold><h4 className={classes.cardTitleCenter} >{t("label_grant_present_need")}</h4></InfoBold></center>
              <GridContainer >
                <GridItem xs={12} sm={12} md={3}>
                    <br/>
                    <SuccessBold>
                      {t("question_startup_grant12")}
                    </SuccessBold>
                    <br/>
                    <Field
                      component={YesNotSelect}
                      name="question12"
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <br/><br/>
                    <InfoBold>
                      {t("label_grant_details_factors")}
                    </InfoBold>
                    <br/>
                    <Field
                      labelText={t("question_startup_grant8")}
                      component={CustomInputReduxMod}
                      name="question8"
                      success={this.state.question8State === "success"}
                      error={this.state.question8State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question8", "length", 0, null, this),
                        multiline: true,
                        rows: 3,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("question_startup_grant9")}
                      component={CustomInputReduxMod}
                      name="question9"
                      success={this.state.question9State === "success"}
                      error={this.state.question96State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question9", "length", 0, null, this),
                        multiline: true,
                        rows: 3,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("question_startup_grant10")}
                      component={CustomInputReduxMod}
                      name="question10"
                      success={this.state.question10State === "success"}
                      error={this.state.question10State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question10", "length", 0, null, this),
                        multiline: true,
                        rows: 3,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("question_startup_grant11")}
                      component={CustomInputReduxMod}
                      name="question11"
                      success={this.state.question11State === "success"}
                      error={this.state.question11State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question11", "length", 0, null, this),
                        multiline: true,
                        rows: 3,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("question_startup_grant13")}
                      component={CustomInputReduxMod}
                      name="question13"
                      success={this.state.question13State === "success"}
                      error={this.state.question13State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question13", "length", 0, null, this),
                        multiline: true,
                        rows: 3,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      labelText={t("question_startup_amount")}
                      component={CustomInputReduxMod}
                      name="question6"
                      success={this.state.question6State === "success"}
                      error={this.state.question6State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question6", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>         
              <GridContainer >
                  <GridItem xs={12} sm={12} md={6}>
                    <Field
                      labelText={t("question_startup_grant14")}
                      component={CustomInputReduxMod}
                      name="question14"
                      success={this.state.question14State === "success"}
                      error={this.state.question14State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question14", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <br/><br/><br/>
                    <InfoBold>
                      {t("label_grant_startup_attach")}
                    </InfoBold>
                    <br/>
                      <MutedBold>{t("label_grant_startup_includes")}</MutedBold>
                    <br/>
                    <SuccessBold>
                      {t("label_grant_startup_file3")}
                    </SuccessBold>
                    <br/>
                    {
                      show_grant_ambassador.file3 !== "undefined" ?
                      <a
                        href={BASE_URL +  "/web/file/"  + show_grant_ambassador.file3}
                        target="_blank"
                      >
                          {t("label_download_file")}
                      </a>:
                      ""
                    }    
                    <br/> 
                    <Field
                      component={FileUpload}
                      name="file3"
                      changeFileName = {this.updateFileName3}
                      inputProps={{
                        type: "file",
                      }}
                    /> 
                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <br/>
                    <SuccessBold>
                      {t("label_grant_startup_file4")}
                    </SuccessBold>
                    <br/>
                    {
                      show_grant_ambassador.file4 !== "undefined" ?
                      <a
                        href={BASE_URL +  "/web/file/"  + show_grant_ambassador.file4}
                        target="_blank"
                      >
                          {t("label_download_file")}
                      </a>:
                      ""
                    }    
                    <br/> 
                    <Field
                      component={FileUpload}
                      name="file4"
                      changeFileName = {this.updateFileName4}
                      inputProps={{
                        type: "file",
                      }}
                    /> 
                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <br/>
                    <SuccessBold>
                      {t("label_grant_startup_file5")}
                    </SuccessBold>
                    <br/>
                    {
                      show_grant_ambassador.file5 !== "undefined" ?
                      <a
                        href={BASE_URL +  "/web/file/"  + show_grant_ambassador.file5}
                        target="_blank"
                      >
                          {t("label_download_file")}
                      </a>:
                      ""
                    }    
                    <br/> 
                    <Field
                      component={FileUpload}
                      name="file5"
                      changeFileName = {this.updateFileName5}
                      inputProps={{
                        type: "file",
                      }}
                    /> 
                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <br/>
                    <SuccessBold>
                      {t("label_grant_startup_file6")}
                    </SuccessBold>
                    <br/>
                    {
                      show_grant_ambassador.file6 !== "undefined" ?
                      <a
                        href={BASE_URL +  "/web/file/"  + show_grant_ambassador.file6}
                        target="_blank"
                      >
                          {t("label_download_file")}
                      </a>:
                      ""
                    }    
                    <br/> 
                    <Field
                      component={FileUpload}
                      name="file6"
                      changeFileName = {this.updateFileName6}
                      inputProps={{
                        type: "file",
                      }}
                    /> 
                  </GridItem>
              </GridContainer>
              <br/>
                 <MutedBold>{t("label_grant_startup_plan")}</MutedBold>
              <br/><br/><br/>
              <center><InfoBold><h4 className={classes.cardTitleCenter} >{t("label_grant_future_impact")}</h4></InfoBold></center>     
              <GridContainer >
                  <GridItem xs={12} sm={12} md={10}>
                    <Field
                      labelText={t("question_startup_number")}
                      component={CustomInputReduxMod}
                      name="number"
                      success={this.state.numberState === "success"}
                      error={this.state.numberState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "number", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("question_startup_grant15")}
                      component={CustomInputReduxMod}
                      name="question15"
                      success={this.state.question15State === "success"}
                      error={this.state.question15State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question15", "length", 0, null, this),
                        multiline: true,
                        rows: 5,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <br/>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <SuccessBold>
                      {t("label_grant_file_startup")}
                    </SuccessBold>
                    <br/>
                    {
                      show_grant_ambassador.file !== "undefined" ?
                      <a
                        href={BASE_URL +  "/web/file/"  + show_grant_ambassador.file}
                        target="_blank"
                      >
                          {t("label_download_file")}
                      </a>:
                      ""
                    }    
                    <br/>              
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
              <br/>
              
                         
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { errorRequired ? <Danger><h6 className={classes.infoText}>{t("label_require_fields") + " *"}</h6></Danger>: ""}
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                  {show_grant_ambassador.state !== "state.reject" && show_grant_ambassador.state !== "state.approved"?
                  <div className={classes.center}>
                      <Link to={"/grant/ambassador"}>
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
                  :""}
                  </GridItem>
              </GridContainer>
              
              </form>
            </GridItem>
          </GridContainer>
                
        );
    }
}

EditStartupForm = reduxForm({
  form: 'grantAmbassadorform', 
  enableReinitialize: true
})(EditStartupForm);


EditStartupForm = connect(
  state => ({
    initialValues: state.grantReducer.data_grant_ambassador,
    errorRequired:state.generalReducer.errorRequired,
    successRequired:state.generalReducer.successRequired,
    successfull_edit:state.generalReducer.successfull_edit,
    show_grant: state.grantReducer.show_grant,
    active_user: state.loginReducer.active_user,
    successful_send:state.generalReducer.successful_send,
    show_grant_ambassador: state.grantReducer.show_grant_ambassador,
    grant_deadline: state.grantReducer.grant_deadline,
  }),
  { dispatchSendRevisionGrantAmbassador: sendRevisionGrantAmbassador, loadShowGrant: showGrant, loadShowGrantAmbassador: showGrantAmbassador, dispatchEditGrantAmbassador: editGrantAmbassador, dispatchErrorRequiredFields: errorRequiredFields, dispatchSuccessRequiredFields: successRequiredFields, dispatchDeleteSuccessful: deleteSuccessful},
)(EditStartupForm);

export default  withRouter(translate(withStyles(style)(EditStartupForm)));



