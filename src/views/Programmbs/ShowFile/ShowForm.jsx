import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-translate";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { getShowProgrammbs } from "actions/programmbsActions.jsx";
import { editRevisionProgrammbs, approveProject, sendRevisionProject } from "actions/programmbsActions.jsx";
import moment from "moment";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import RevisionForm from 'views/Programmbs/Show/RevisionForm.jsx';
import { Link } from "react-router-dom";


// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

import { withRouter } from 'react-router-dom';


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




class ShowForm extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    
      this.handleSaveRevision = this.handleSaveRevision.bind(this);
      this.handleApproveProject = this.handleApproveProject.bind(this);
      this.handleSendRevisionProject = this.handleSendRevisionProject.bind(this);
    }

    componentDidMount() {
      this.props.dispatchShowProgrammbs(this.props.match.params.id);
    }

    handleSaveRevision(){
      this.props.dispatchEditRevisionProgrammbs(this.props.history);
    }
  
    handleApproveProject(){
      this.props.dispatchApproveProject(this.props.history);
    }

    handleSendRevisionProject(){
      this.props.dispatchSendRevisionProject(this.props.history);
    }


    render() {
        const { classes, programmbs } = this.props;
        let { t } = this.props;
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <center>
                  <h4 className={classes.cardTitleCenter} >{t("label.file_student")}</h4>
                  <p>{ moment(programmbs.upload_date_student).format('MMM/DD/YYYY  HH:mm')  }</p>
                  <p className={classes.right}>
                    <a
                      href={"https://myplatform.interweavesolutions.org/file/" + programmbs.filestudent}
                      target="_blank"
                    >
                      {t("label.download_file")}
                    </a>{" "}
                  </p>
              </center>
              <RevisionForm name="revisionplan" labelText={t("label.corrections")} />
              <br/>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Button color="danger" size="sm" onClick={this.handleSendRevisionProject}>
                          {t("button.send_correction")}
                      </Button>
                          {" "}
                        <Link to={"/profile/editpassword/"}>
                          <Button color="warning" size="sm">
                          {t("button.clean_pending_list")}
                        </Button>
                        </Link>
                      </center>
                      <center>
                        <Link to={"/profile/edit/"}> 
                          <Button color="default" size="sm">
                          {t("button.certificate_attendance")}
                          </Button>
                        </Link>
                          {" "}
                        <Button color="success" size="sm" onClick={this.handleApproveProject}>
                            {t("button.approved")}
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
      programmbs: state.programmbsReducer.programmbs,
      
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowProgrammbs: key => dispatch(getShowProgrammbs(key)), 
  dispatchEditRevisionProgrammbs: param => dispatch( editRevisionProgrammbs(param) ), 
  dispatchApproveProject: param => dispatch( approveProject(param)),
  dispatchSendRevisionProject: param => dispatch( sendRevisionProject(param))
});

const ShowFormComponent = translate('provider')(withStyles(style)(ShowForm));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ShowFormComponent));


