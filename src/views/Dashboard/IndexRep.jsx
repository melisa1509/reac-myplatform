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
import MbsTable from './MbsTable.jsx';
import AmbassadorTable from './AmbassadorTable.jsx';
import FutureAmbassadorTable from './FutureAmbassadorTable.jsx';

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { translate } from "react-translate";


const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  } 
};


class IndexRep extends React.Component {
 

  render() {
    const { classes, styles } = this.props;
    let { t } = this.props;
    const login = "es";
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitle}>{t("title.student_list_revision")}</h4>
            </CardHeader>
            <CardBody>
                <MbsTable  />      
            </CardBody>
          </Card>
          <br/>
          <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitle}>{t("title.student_list_ambassador")}</h4>
            </CardHeader>
            <CardBody>
                <AmbassadorTable  />      
            </CardBody>
          </Card>
          <br/>
          <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitle}>{t("title.student_list_future_ambassador_revision")}</h4>
            </CardHeader>
            <CardBody>
                <FutureAmbassadorTable  />      
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

const mapDispatchToPropsActions = dispatch => ({
});

const IndexRepComponent = translate('provider')(withStyles(styles)(IndexRep));
export default connect(null, mapDispatchToPropsActions)(IndexRepComponent);