import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import IdleTimer from 'react-idle-timer'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { editProgrammbs, saveProject, activeTab } from "actions/programmbsActions.jsx";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import { logoutUser } from "actions/loginActions.jsx";
import { idleTimerAlert } from "actions/generalActions.jsx";

import { translate } from 'react-switch-lang';


const styles = {
  cardTitleCenter:{
    textAlign: "center"
  },
  cardCategory:{
    textAlign: "center"
  },
  verticalSpace:{
    paddingBottom: "30px"
  },
  ...sweetAlertStyle
};


class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timer: true 
    };
    this.idleTimer = null
    this.handleSave = this.handleSave.bind(this);    
    this.handleSaveProject = this.handleSaveProject.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleOnAction = this.handleOnAction.bind(this)
    this.handleOnActive = this.handleOnActive.bind(this)
    this.handleOnIdle = this.handleOnIdle.bind(this)
  }

  handleSave(){
    this.props.dispatchEditProgrammbs(this.props.history);
  }  

  handleSaveProject(){
    this.props.dispatchSaveProject(this.props.history);
  }

  handleNext(){
    this.props.dispatchActiveTab(3);
  }

  handleOnAction (event) {
    if(!this.state.timer){
      this.props.dispatchLogoutUser()
    }
  }

  handleOnActive (event) {
  }

  handleOnIdle (event) {
    this.props.dispatchEditProgrammbs(this.props.history);    
    this.setState({timer: false});
    this.props.dispatchIdleTimeAlert();
    setTimeout(this.handleOnAction, 1000 * 60 * 5);
  }
 

  render() {
    const { classes, progressmbs } = this.props;
    let state = progressmbs === undefined ? false : progressmbs.complete;
    let { t } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>            
            <GridContainer justify="center" className={ classes.verticalSpace }>
                <Button color="info" size="sm" onClick={this.handleSave}>
                    {t("button_save")}
                </Button>                
                {" "}
                {state? 
                <Button color="success" size="sm" onClick={this.handleSaveProject}>
                    {t("button_send_revision")}
                </Button>
                : ""
                }
                <IdleTimer
                  ref={ref => { this.idleTimer = ref }}
                  timeout={1000 * 60 * 15}
                  onActive={this.handleOnActive}
                  onIdle={this.handleOnIdle}
                  onAction={this.handleOnAction}
                  debounce={250}
                />              
                
            </GridContainer>
        </GridItem>
      </GridContainer>
    );
  } 
}

Controls.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({ 
  progressmbs: state.studentReducer.dashboard_student.progressMbs
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchEditProgrammbs: param => dispatch( editProgrammbs(param) ),   
  dispatchSaveProject: param => dispatch( saveProject(param)),
  dispatchActiveTab: key => dispatch(activeTab(key)),
  dispatchIdleTimeAlert: () => dispatch( idleTimerAlert()),
  dispatchLogoutUser: () => dispatch( logoutUser()) 
});


const ConstrolsComponent = translate(withStyles(styles)(Controls));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ConstrolsComponent));