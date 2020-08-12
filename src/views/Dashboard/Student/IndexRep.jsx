import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import IndexTable from './IndexTable.jsx';
import IndexTableSa from './IndexTableSa.jsx';
import Danger from "components/Typography/Danger.jsx";


import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { translate } from 'react-switch-lang';
import { dashboardStudent } from "actions/studentActions.jsx";


const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  } 
};


class IndexRep extends React.Component {
 
  componentDidMount() {
    this.props.dispatchDashboardStudent();    
  }

  render() {
    const { classes, styles, dashboard_student } = this.props;
    let { t } = this.props;
    const login = "es";
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={11}>
          <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitle}>{t("title_progress_dashboard")}</h4>
            </CardHeader>
            <CardBody>                
                <center><h3 className={classes.cardTitleCenter} >{t("title_program_mbs")}</h3></center>
                {dashboard_student.progressMbs.submitted === "state.revision" ? <center><Danger><h5 className={classes.infoText}>{t("label_success_revision")}</h5></Danger></center>: ""}
                <p>{t("label_program_mbs_starting")}</p>
                <br/>
                <IndexTable  />      
            </CardBody>
          </Card>          
        </GridItem>
        <br/>
        {
          dashboard_student.progressSa.student_ambassador === true ? 
          <GridItem xs={12} sm={12} md={11}>
            <Card>
              <CardHeader color="success">
                  <h4 className={classes.cardTitle}>{t("title_progress_dashboard")}</h4>
              </CardHeader> 
              <CardBody>
                  <center><h3 className={classes.cardTitleCenter} >{t("title_program_sa")}</h3></center>
                  {dashboard_student.progressSa.submitted === "state.revision" ? <center><Danger><h5 className={classes.infoText}>{t("label_success_revision")}</h5></Danger></center>: ""}
                  <p>{t("label_program_sa_starting")}</p>
                  <br/>
                  <IndexTableSa  />      
              </CardBody>
            </Card>          
          </GridItem>
          :""
        }        
      </GridContainer>
    );
  }
}

IndexRep.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({ 
  dashboard_student: state.studentReducer.dashboard_student
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchDashboardStudent: () => dispatch( dashboardStudent() ) 
});

const IndexRepComponent = translate(withStyles(styles)(IndexRep));
export default connect(mapStateToProps, mapDispatchToPropsActions)(IndexRepComponent);