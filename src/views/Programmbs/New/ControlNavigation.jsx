import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { editProgrammbs, saveProject, activeTab } from "actions/programmbsActions.jsx";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";

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


class ControlNavigation extends React.Component {

 

  render() {
    const { dashboard_student, previous, next } = this.props;
    let { t } = this.props;
    return (
        <GridContainer justify="center">
            <GridItem xs={3} sm={3} md={3}>            
                    <center>
                        <Link to={"/programmbs/new/" + previous}>
                            <Button color="default" fullWidth >
                                {t("button_previous")}
                            </Button>  
                        </Link> 
                    </center>               
            </GridItem>
            <GridItem xs={6} sm={6} md={6}></GridItem>
            <GridItem xs={3} sm={3} md={3}>            
                    <center>
                        <Link to={"/programmbs/new/" + next}>
                            <Button color="rose" fullWidth >
                                {t("button_next")}
                            </Button>  
                        </Link> 
                    </center>               
            </GridItem>
      </GridContainer>
    );
  } 
}

ControlNavigation.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({ 
  dashboard_student: state.studentReducer.dashboard_student
});

const mapDispatchToPropsActions = dispatch => ({  
});


const ConstrolsComponent = translate(withStyles(styles)(ControlNavigation));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ConstrolsComponent));