import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import DateRange from "@material-ui/icons/DateRange";
import Icon from "@material-ui/core/Icon";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Muted from "components/Typography/Muted.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { translate } from 'react-switch-lang';
import { withRouter } from 'react-router-dom';

import IndexTable from './IndexTable.jsx';
import CountryTable from "./CountryTable.jsx";
import AmbassadorTable from "./AmbassadorTable.jsx";
import GlobalTable from "./GlobalTable.jsx";


const styles = {
  cardIconTitle:{
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "10px"
  },
    ...dashboardStyle,
};


class IndexRep extends React.Component {
  render() {
    const { classes, report_list } = this.props;
    let { t } = this.props;
    const initialValuesReport= {
      country:"label_all_country",
    }
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
        <GridContainer>
          <GridItem xs={6} sm={6} md={6} lg={6}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>supervisor_account</Icon>
              </CardIcon>
                <p className={classes.cardCategory}>{t("label_student_graduated_mbs")}</p>
                <Muted><h3>{report_list.studentsMbs}</h3></Muted>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                {report_list.dateRange}
              </div>
            </CardFooter> 
          </Card>
          </GridItem>
          <GridItem xs={6} sm={6} md={6} lg={6}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>person_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>{t("label_student_graduated_sa")}</p>
              <Muted><h3>{report_list.studentsAmbassador}</h3></Muted>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <DateRange />
                {report_list.dateRange}
              </div>
            </CardFooter>  
          </Card>
          </GridItem>
          </GridContainer>
          <br/>
          <Card>
            <CardHeader icon >
              <CardIcon color="success">
                <Icon>language</Icon>
              </CardIcon>
              <Muted>
                <h4>{t("title_global_certificates_by_countries")}</h4>
              </Muted>
            </CardHeader>
            <CardBody>
                <GlobalTable />      
            </CardBody>
          </Card>
          <br/>
          <Card>
            <CardHeader icon >
              <CardIcon color="info">
                <Icon>dns</Icon>
              </CardIcon>
              <Muted>
                <h4>{t("title_number_people_improvement") + " " + t( "title_by_country")}</h4>
              </Muted>
            </CardHeader>
            <CardBody>
                <CountryTable initialValues={initialValuesReport}/>      
            </CardBody>
          </Card>
          <br/>
          <Card>
            <CardHeader icon >
              <CardIcon color="warning">
                <Icon>rss_feed</Icon>
              </CardIcon>
              <Muted>
                <h4>{t("title_number_people_improvement") + " " + t( "title_by_ambassador")}</h4>
              </Muted>
            </CardHeader>
            <CardBody>
                <AmbassadorTable/>      
            </CardBody>
          </Card>
          <br/>
          <Card>
            <CardHeader icon >
              <CardIcon color="rose">
              <Icon>equalizer</Icon>
              </CardIcon>
              <Muted>
                <h4>{t("title_evaluation_statistics") + " " + t( "title_by_student")}</h4>
              </Muted>
            </CardHeader>
            <CardBody>
                <IndexTable  />      
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
 }
}

IndexRep.propTypes = {
  classes: PropTypes.object,
};

//export default withStyles(styles)(ReactTables);

const mapStateToProps = state => ({ 
  report_list: state.reportReducer.report_list,
});

const mapDispatchToPropsActions = dispatch => ({
});


const NewRepComponent = translate(withStyles(styles)(IndexRep));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(NewRepComponent));