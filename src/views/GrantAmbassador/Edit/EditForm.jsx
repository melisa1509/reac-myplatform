import React from "react";
import PropTypes from "prop-types";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { store } from "store";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import SweetAlert from "react-bootstrap-sweetalert";
import CustomInputReduxMod from 'components/CustomInput/CustomInputReduxMod.jsx';
import FileInput from "components/CustomUpload/FileInput.jsx";
import Table from "components/Table/Table.jsx";
import SuccessBold from "components/Typography/SuccessBold.jsx";
import InfoBold from "components/Typography/InfoBold.jsx";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { showGrant, showGrantAmbassador } from "actions/grantActions.jsx";
import { sendRevisionGrantAmbassador } from "actions/grantActions"; 
import { errorRequiredFields, errorSubmit, successSubmit } from "actions/generalActions.jsx";
import { successRequiredFields } from "actions/generalActions.jsx";
import { verifyChange, verifyLength, verifyNumber } from "assets/validation/index.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";
import { showDate } from "assets/functions/general.jsx";
import { BASE_URL } from 'constants/urlTypes';

// style for this view
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import YesNotSelect from "views/Select/YesNotSelect";
import { withRouter } from 'react-router-dom';
import { editGrantAmbassador } from "actions/grantActions";


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


class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            codeState:  "",
            numberState: "",
            question3State: "",
            question4State: "",
            question5State: "",
            question6State: "",
            question7State: "",
            question8State: "",
            question9State: "",
            question10State: "",
            question11State: "",
            question13State: "",
            question14State: "",
            fileState: "",
        };
        this.saveClick = this.saveClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
        this.sendRevision = this.sendRevision.bind(this);
      }

     
      sendRevision() {
       
        if (this.state.codeState === "undefined" || this.state.codeState === "" || this.state.codeState === "error") {
          this.setState({ codeState: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.numberState === "undefined" || this.state.numberState === "" ||  this.state.numberState === "error") {
          this.setState({ numberState: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.question3State === "undefined" || this.state.question3State === "" || this.state.question3State === "error") {
          this.setState({ question3State: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.question4State === "undefined" || this.state.question4State === "" || this.state.question4State === "error") {
          this.setState({ question4State: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.question5State === "undefined" || this.state.question5State === "" || this.state.question5State === "error") {
          this.setState({ question5State: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.question6State === "undefined" || this.state.question6State === "" || this.state.question6State === "error") {
          this.setState({ question6State: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.question7State === "undefined" || this.state.question7State === "" || this.state.question7State === "error") {
          this.setState({ question7State: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.question8State === "undefined" || this.state.question8State === "" || this.state.question8State === "error") {
          this.setState({ question8State: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.question9State === "undefined" || this.state.question9State === "" || this.state.question9State === "error") {
          this.setState({ question9State: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.question10State === "undefined" || this.state.question10State === "" || this.state.question10State === "error") {
          this.setState({ question10State: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.question11State === "undefined" || this.state.question11State === "" ||  this.state.question11State === "error") {
          this.setState({ question11State: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.question13State === "undefined" || this.state.question13State === "" || this.state.question13State === "error") {
          this.setState({ question13State: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.question14State === "undefined" || this.state.question14State === "" || this.state.question14State === "error") {
          this.setState({ question14State: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }

        if (this.state.fileState === "undefined" || this.state.fileState === "" || this.state.fileState === "error") {
          this.setState({ fileState: "error" });
          this.props.dispatchErrorRequiredFields();
          this.props.dispatchErrorSubmit();
        }
 
        if(this.state.fileState === "success"  && this.state.codeState === "success"  && this.state.numberState === "success"  && this.state.question3State === "success" && this.state.question4State === "success" && this.state.question5State === "success" && this.state.question6State === "success" && this.state.question7State === "success" && this.state.question8State === "success" && this.state.question9State === "success" && this.state.question10State === "success" && this.state.question11State === "success" && this.state.question13State === "success" && this.state.question14State === "success"){
          this.props.dispatchEditGrantAmbassador();
          this.props.dispatchSuccessRequiredFields();
          this.props.dispatchDeleteSuccessful();
          this.props.dispatchSendRevisionGrantAmbassador();
        }
      
    }

    saveClick(){
      this.props.dispatchEditGrantAmbassador();
      if (verifyLength(this.props.show_grant_ambassador.code, 0) && this.state.codeState === "" ) {
        this.setState({ codeState: "success" });
      }

      if (verifyNumber(this.props.show_grant_ambassador.number) && this.state.numberState === "" ) {
        this.setState({ numberState: "success" });
      }

      if (verifyLength(this.props.show_grant_ambassador.file, 0) && this.state.fileState === "" ) {
        this.setState({ fileState: "success" });
      }

      if (verifyNumber(this.props.show_grant_ambassador.question3) && this.state.question3State === "" ) {
        this.setState({ question3State: "success" });
      }

      if (verifyNumber(this.props.show_grant_ambassador.question4) && this.state.question4State === "" ) {
        this.setState({ question4State: "success" });
      }

      if (verifyNumber(this.props.show_grant_ambassador.question5) && this.state.question5State === "" ) {
        this.setState({ question5State: "success" });
      }

      if (verifyNumber(this.props.show_grant_ambassador.question6) && this.state.question6State === "" ) {
        this.setState({ question6State: "success" });
      }

      if (verifyNumber(this.props.show_grant_ambassador.question7) && this.state.question7State === "" ) {
        this.setState({ question7State: "success" });
      }

      if (verifyLength(this.props.show_grant_ambassador.question8, 0) && this.state.question8State === "" ) {
        this.setState({ question8State: "success" });
      }

      if (verifyLength(this.props.show_grant_ambassador.question9, 0) && this.state.question9State === "" ) {
        this.setState({ question9State: "success" });
      }

      if (verifyLength(this.props.show_grant_ambassador.question10, 0) && this.state.question10State === "" ) {
        this.setState({ question10State: "success" });
      }

      if (verifyLength(this.props.show_grant_ambassador.question11, 0) && this.state.question11State === "" ) {
        this.setState({ question11State: "success" });
      }

      if (verifyLength(this.props.show_grant_ambassador.question13, 0) && this.state.question13State === "" ) {
        this.setState({ question13State: "success" });
      }

      if (verifyLength(this.props.show_grant_ambassador.question14, 0) && this.state.question14State === "" ) {
        this.setState({ question14State: "success" });
      }



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
      verifyChange(key, "file", "attached", 0, null, this);
    }

    render() {
        const { classes, grant_deadline, errorSubmit, successfull_edit, editError, errorRequired, show_grant, active_user, successful_send, show_grant_ambassador } = this.props;
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
            <center><h3 >{t("title_grant_application")}</h3></center>
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
                      {errorSubmit ? 
                          <SweetAlert
                            warning
                            style={{ display: "block", marginTop: "-100px" }}
                            onConfirm={() => this.deleteClick()}
                            confirmBtnText={t("button_continue")}
                            confirmBtnCssClass={
                              this.props.classes.button + " " + this.props.classes.success
                            }
                          >
                          <h4>{t("label_message_require_fields")}</h4>
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
                  <GridItem xs={12} sm={12} md={2}>
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
                        onKeyUp: event => 
                              verifyChange(event, "code", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <br/>
              <center><InfoBold><h4 className={classes.cardTitleCenter} >{t("label_grant_history")}</h4></InfoBold></center>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={2}>
                    <Field
                      labelText={t("question_startup_grant3")  + " " + t("label_only_numbers")}
                      component={CustomInputReduxMod}
                      name="question3"
                      success={this.state.question3State === "success"}
                      error={this.state.question3State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question3", "length", 0, null, this),
                        type: "number",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={2}>
                    <Field
                      labelText={t("question_startup_grant4") + " " + t("label_only_numbers")}
                      component={CustomInputReduxMod}
                      name="question4"
                      success={this.state.question4State === "success"}
                      error={this.state.question4State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question4", "length", 0, null, this),
                        type: "number",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={2}>
                    <Field
                      labelText={t("question_startup_grant5") + " " + t("label_only_numbers")}
                      component={CustomInputReduxMod}
                      name="question5"
                      success={this.state.question5State === "success"}
                      error={this.state.question5State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question5", "length", 0, null, this),
                        type: "number",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={2}>
                    <Field
                      labelText={t("question_startup_grant7") + " " + t("label_only_numbers")}
                      component={CustomInputReduxMod}
                      name="question7"
                      success={this.state.question7State === "success"}
                      error={this.state.question7State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question7", "length", 0, null, this),
                        type: "number",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <br/>
              <center><InfoBold><h4 className={classes.cardTitleCenter} >{t("label_grant_present_need")}</h4></InfoBold></center>
              <GridContainer >
                <GridItem xs={12} sm={12} md={2}>
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




              <center><h5 className={classes.cardTitleCenter} >{t("question_grant")}</h5></center>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={2}>
                    <Field
                      labelText={t("question_grant3") + " " + t("label_only_numbers")}
                      component={CustomInputReduxMod}
                      name="number"
                      success={this.state.numberState === "success"}
                      error={this.state.numberState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "number", "length", 0, null, this),
                        type: "number",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={11}>
                    <Field
                      labelText={t("question_grant8")}
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
                        rows: 7,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={11}>
                    <Field
                      labelText={t("question_grant9")}
                      component={CustomInputReduxMod}
                      name="question9"
                      success={this.state.question9State === "success"}
                      error={this.state.question9State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question9", "length", 0, null, this),
                        multiline: true,
                        rows: 7,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={11}>
                    <Field
                      labelText={t("question_grant10")}
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
                        rows: 7,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={2}>
                    <Field
                      labelText={t("question_grant6") + " " + t("label_only_numbers")}
                      component={CustomInputReduxMod}
                      name="question6"
                      success={this.state.question6State === "success"}
                      error={this.state.question6State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question6", "length", 0, null, this),
                        type: "number",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <br/><br/>
              <center><InfoBold><h4 className={classes.cardTitleCenter} >{t("label_grant_future_impact")}</h4></InfoBold></center>              
              <br/>
              <GridContainer >
                <GridItem xs={12} sm={12} md={11}>
                    <Field
                      labelText={t("question_grant11")}
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
                        rows: 7,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={11}>
                    <Field
                      labelText={t("question_grant13")}
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
                        rows: 7,
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={11}>
                    <Field
                      labelText={t("question_grant14")}
                      component={CustomInputReduxMod}
                      name="question14"
                      success={this.state.question14State === "success"}
                      error={this.state.question14State === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => verifyChange(event, "question14", "length", 0, null, this),
                        multiline: true,
                        rows: 7,
                      }}
                    />
                </GridItem>
              </GridContainer>
              
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t('label_grant_file')}
                      component={FileInput}
                      name="file"
                      success={this.state.fileState === "success"}
                      error={this.state.fileState === "error"}
                      changeFileName = {this.updateFileName}
                      inputProps={{
                        type: "file",
                      }}
                    /> 
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
                  </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { errorRequired ? <Danger><h6 className={classes.infoText}>{t("label_require_fields")}</h6></Danger>: ""}
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
                        <Button color="info" size="sm" onClick={this.saveClick.bind(this)}>
                        {t("button_save")}
                        </Button>
                        {" "}
                    </div>
                    :""
                  }
                  
                  </GridItem>
              </GridContainer>
              
              </form>
            </GridItem>
          </GridContainer>
                
        );
    }
}

EditForm = reduxForm({
  form: 'grantAmbassadorform', 
  enableReinitialize: true
})(EditForm);


EditForm = connect(
  state => ({
    initialValues: state.grantReducer.data_grant_ambassador,
    errorRequired:state.generalReducer.errorRequired,
    errorSubmit:state.generalReducer.errorSubmit,
    successRequired:state.generalReducer.successRequired,
    successfull_edit:state.generalReducer.successfull_edit,
    show_grant: state.grantReducer.show_grant,
    active_user: state.loginReducer.active_user,
    successful_send:state.generalReducer.successful_send,
    show_grant_ambassador: state.grantReducer.show_grant_ambassador,
    grant_deadline: state.grantReducer.grant_deadline,
  }),
  { dispatchErrorSubmit: errorSubmit, dispatchSuccessSubmit: successSubmit, dispatchSendRevisionGrantAmbassador: sendRevisionGrantAmbassador, loadShowGrant: showGrant, loadShowGrantAmbassador: showGrantAmbassador, dispatchEditGrantAmbassador: editGrantAmbassador, dispatchErrorRequiredFields: errorRequiredFields, dispatchSuccessRequiredFields: successRequiredFields, dispatchDeleteSuccessful: deleteSuccessful},
)(EditForm);

export default  withRouter(translate(withStyles(style)(EditForm)));



