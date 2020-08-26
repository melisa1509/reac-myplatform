import React from "react";
import PropTypes from "prop-types";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { getAmbassadorList } from "actions/ambassadorActions.jsx";

import { translate } from 'react-switch-lang';
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import { getShowProgrammbs } from "actions/programmbsActions.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Muted from "components/Typography/Muted.jsx"


const styles = {
  cardIconTitle:{
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "10px"
  },
    ...dashboardStyle,
};


class IndexTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  
 
  render() {
    const { classes, dashboard_student } = this.props;
    let { t } = this.props;        
    
      
    
    return (
      <GridContainer>
        <GridItem xs={6} sm={6} md={3} lg={3}>
        <Link to={dashboard_student.progressMbs.state === "new" ? "/programmbs/new/plan" : "/programmbs/edit/plan/" + dashboard_student.progressMbs.id} className={classes.dropdownLink} >
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>account_balance</Icon>
              </CardIcon>
                <p className={classes.cardCategory}>{t("title_plan")}</p>
                <br/>
                <Muted><h3>{dashboard_student.progressMbs.plan}</h3></Muted>
            </CardHeader>            
          </Card>
          </Link>
        </GridItem>
        <GridItem xs={6} sm={6} md={3} lg={3}>
        <Link to={dashboard_student.progressMbs.state === "new" ? "/programmbs/new/product" : "/programmbs/edit/product/" + dashboard_student.progressMbs.id} className={classes.dropdownLink} >
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>domain</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>{t("title_product")}</p>
              <br/>
              <Muted><h3>{dashboard_student.progressMbs.product}</h3></Muted>
            </CardHeader>             
          </Card>
          </Link>
        </GridItem>
        <GridItem xs={6} sm={6} md={3} lg={3}>
        <Link to={dashboard_student.progressMbs.state === "new" ? "/programmbs/new/process" : "/programmbs/edit/process/" + dashboard_student.progressMbs.id} className={classes.dropdownLink} >
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>timeline</Icon>
              </CardIcon>
                <p className={classes.cardCategory}>{t("title_process")}</p>
                <br/>
                <Muted><h3>{dashboard_student.progressMbs.process}</h3></Muted>
            </CardHeader>            
          </Card>
          </Link>
        </GridItem>
        <GridItem xs={6} sm={6} md={3} lg={3}>
        <Link to={dashboard_student.progressMbs.state === "new" ? "/programmbs/new/price" : "/programmbs/edit/price/" + dashboard_student.progressMbs.id} className={classes.dropdownLink} >
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>monetization_on</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>{t("title_price")}</p>
              <br/>
              <Muted><h3>{dashboard_student.progressMbs.price}</h3></Muted>
            </CardHeader>           
          </Card>
          </Link>
        </GridItem>
        <GridItem xs={6} sm={6} md={3} lg={3}>
        <Link to={dashboard_student.progressMbs.state === "new" ? "/programmbs/new/promotion" : "/programmbs/edit/promotion/" + dashboard_student.progressMbs.id} className={classes.dropdownLink} >
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>record_voice_over</Icon>
              </CardIcon>
                <p className={classes.cardCategory}>{t("title_promotion")}</p>
                <br/>
                <Muted><h3>{dashboard_student.progressMbs.promotion}</h3></Muted>
            </CardHeader>            
          </Card>
          </Link>
        </GridItem>
        <GridItem xs={6} sm={6} md={3} lg={3}>
        <Link to={dashboard_student.progressMbs.state === "new" ? "/programmbs/new/paperwork" : "/programmbs/edit/paperwork/" + dashboard_student.progressMbs.id} className={classes.dropdownLink} >
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>file_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>{t("title_paperwork")}</p>
              <br/>
              <Muted><h3>{dashboard_student.progressMbs.paperwork}</h3></Muted>
            </CardHeader>             
          </Card>
          </Link>
        </GridItem>
        <GridItem xs={6} sm={6} md={3} lg={3}>
        <Link to={dashboard_student.progressMbs.state === "new" ? "/programmbs/new/quality" : "/programmbs/edit/quality/" + dashboard_student.progressMbs.id} className={classes.dropdownLink} >
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>accessibility_new</Icon>
              </CardIcon>
                <p className={classes.cardCategory}>{t("title_quality_life")}</p>
                <Muted><h3>{dashboard_student.progressMbs.quality}</h3></Muted>
            </CardHeader>            
          </Card>
          </Link>
        </GridItem>
        <GridItem xs={6} sm={6} md={3} lg={3}>
        <Link to={dashboard_student.progressMbs.state === "new" ? "/programmbs/new/service" : "/programmbs/edit/service/" + dashboard_student.progressMbs.id} className={classes.dropdownLink} >
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>pan_tool</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>{t("title_service")}</p>
              <br/>
              <Muted><h3>{dashboard_student.progressMbs.service}</h3></Muted>
            </CardHeader>           
          </Card>
          </Link>
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => ({ 
      dashboard_student: state.studentReducer.dashboard_student
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowProgrammbs: key => dispatch(getShowProgrammbs(key))
});

const IndexTableComponent = translate(withStyles(styles)(IndexTable));
export default connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent);

