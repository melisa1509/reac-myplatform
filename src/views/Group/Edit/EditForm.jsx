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
import InputLabel from "@material-ui/core/InputLabel";
import SuccessLabel from "components/Typography/SuccessLabel.jsx";
import Accordion from "components/Accordion/Accordion.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import Danger from "components/Typography/Danger.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInputRedux from 'components/CustomInput/CustomInputRedux.jsx'; 
import DateTimePicker from 'components/DateTimePicker/DateTimePickerRedux.jsx';
import { showGroup } from "actions/groupActions.jsx";
import { editGroup } from "actions/groupActions.jsx"; 
import { errorRequiredFields } from "actions/generalActions.jsx";
import { successRequiredFields } from "actions/generalActions.jsx";
import { verifyChange } from "assets/validation/index.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";
import ModalitySelect from "views/Select/ModalitySelect.jsx";
import ProgramSelect from "views/Select/ProgramSelect.jsx";
import FileUpload from "components/CustomUpload/FileUpload.jsx";

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
      fontWeight: "500",
    },
    ...customSelectStyle,
    ...validationFormsStyle
};


class EditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            groupnameState: "success",
            full_nameState: "success",
            interweaveLocalState: "success",
            authorizationCodeState: "success"
        };
        this.saveClick = this.saveClick.bind(this);
        this.deleteClick = this.deleteClick.bind(this);
      }

      updateFileName = (key) => {
        this.props.change('name_image', key);
      }
     
      saveClick() {
        if (this.state.groupnameState === "") {
          this.setState({ groupnameState: "error" });
        }
        if (this.state.full_nameState === "") {
          this.setState({ first_nameState: "error" });
        }
        if (this.state.interweaveLocalState === "") {
          this.setState({ imterweaveLocalState: "error" });
        }
        if (this.state.authorizationCodeState === "") {
          this.setState({ authorizationCodeState: "error" });
        }
        if(this.state.groupnameState === "error" || this.state.full_nameState === "error"){
          const stateRedux = store.getState();
          this.props.dispatchErrorRequiredFields();
        }
        if(this.state.groupnameState === "success" && this.state.full_nameState){
        const reduxState = store.getState();
        this.props.dispatchEditGroup();
        this.props.dispatchSuccessRequiredFields();
        }
      }

      deleteClick(){
        this.props.dispatchDeleteSuccessful();
      }

      componentDidMount() {
        this.props.loadShowGroup(this.props.match.params.id);
      }
      
    render() {
        const { classes, successfull_edit, editError, errorRequired, successRequired } = this.props;
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
                      <SnackbarContent
                        message={
                          <center>{t("label_save_success")}</center>
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
                      labelText={t("label_name")+ " *"}
                      component={CustomInputRedux}
                      name="name"
                      success={this.state.groupnameState === "success"}
                      error={this.state.groupnameState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "name", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>              
              <GridContainer >
                <GridItem xs={12} sm={12} md={6}>
                  <InputLabel className={classes.label}>
                    <SuccessLabel>{t("label_start_classes")}</SuccessLabel>
                  </InputLabel>
                    <Field
                      component={DateTimePicker}
                      name="start_date"
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={6}>
                  <InputLabel className={classes.label}>
                    <SuccessLabel>{t("label_final_clases")}</SuccessLabel>
                  </InputLabel>
                    <Field
                      component={DateTimePicker}
                      name="final_date"
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                <GridItem xs={12} sm={12} md={6}>
                  <InputLabel className={classes.label}>
                    <SuccessLabel>{t("label_graduation_date")}</SuccessLabel>
                  </InputLabel>
                    <Field
                      component={DateTimePicker}
                      name="graduation_date"
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={8}>
                    <Field
                      name="modality"
                      formName="programmbs"
                      component={ModalitySelect}
                    />
                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={8}>
                    <Field
                      name="program"
                      formName="programmbs"
                      component={ProgramSelect}
                    />
                  </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("label_interweave_local")}
                      component={CustomInputRedux}
                      name="interweave_local"
                      success={this.state.interweaveLocalState === "success"}
                      error={this.state.interweaveLocalState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "interweave_local", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                    <Field
                      labelText={t("label_authorization_code")}
                      component={CustomInputRedux}
                      name="authorization_code"
                      success={this.state.authorizationCodeState === "success"}
                      error={this.state.authorizationCodeState === "error"}
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        onKeyUp: event => 
                              verifyChange(event, "authorizationCode", "length", 0, null, this),
                        type: "text",
                      }}
                    />
                </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}> 
                      <InputLabel className={classes.label}>
                        <SuccessLabel>{t("label_name_image")}</SuccessLabel>
                      </InputLabel>
                      <Field
                        component={FileUpload}
                        name="name_image"
                        changeFileName = {this.updateFileName}
                        inputProps={{
                          type: "file",
                        }}
                      />            
                  </GridItem>
              </GridContainer>
              <br/>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Accordion
                        active={0}
                        collapses={[
                          {
                            title: "Collapsible group Item #1",
                            content:
                              "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                          },
                          {
                            title: "Collapsible group Item #2",
                            content:
                              "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                          },
                          {
                            title: "Collapsible group Item #3",
                            content:
                              "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                          }
                        ]}
                    />
                  </GridItem>
              </GridContainer>
              <br/>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      { errorRequired ? <Danger><h6 className={classes.infoText}>{t("label_require_fields")}</h6></Danger>: ""}
                      { successRequired ? "" :  ""}
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Link to={"/group"}>
                      <Button color="default" size="sm" onClick={this.deleteClick}>
                      {t("button_return_to_list")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Button color="info" size="sm" onClick={this.saveClick}>
                      {t("button_save")}
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
  form: 'groupform', 
  enableReinitialize: true
})(EditForm);


EditForm = connect(
  state => ({
    initialValues: state.groupReducer.data,
    errorRequired:state.generalReducer.errorRequired,
    successRequired:state.generalReducer.successRequired,
    edit_group: state.groupReducer.edit_group,
    successfull_edit:state.generalReducer.successfull_edit,
    show_group: state.groupReducer.show_group,
  }),
  { loadShowGroup: showGroup, dispatchEditGroup: editGroup, dispatchErrorRequiredFields: errorRequiredFields, dispatchSuccessRequiredFields: successRequiredFields, dispatchDeleteSuccessful: deleteSuccessful},
)(EditForm);

export default  withRouter(translate(withStyles(style)(EditForm)));



