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
import { translate } from 'react-switch-lang';
import EmbassadorTable from "./EmbassadorTable.jsx";


const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  } 
};


class IndexRep extends React.Component {
 

  render() {
    const { classes, styles, active_user } = this.props;
    let { t } = this.props;
    const login = "es";
    let rol=false
    if(active_user.roles == "ROLE_EMBASSADOR"){
      rol=true
    }
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitle}>{t("title_student_list_revision")}</h4>
            </CardHeader>
            <CardBody>
                {rol ? <EmbassadorTable/> : <MbsTable /> }  
            </CardBody>
          </Card>
          <br/>
          {rol ? "" :
          <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitle}>{t("title_student_list_ambassador_revision")}</h4>
            </CardHeader>
            <CardBody>
                <AmbassadorTable  />      
            </CardBody>
          </Card>
          }
          <br/>
          {rol ? "" :
          <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitle}>{t("title_student_list_future_ambassador_revision")}</h4>
            </CardHeader>
            <CardBody>
                <FutureAmbassadorTable  />      
            </CardBody>
          </Card>
          }
        </GridItem>
      </GridContainer>
    );
  }
}

IndexRep.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({ 
  active_user: state.loginReducer.active_user,
});

const mapDispatchToPropsActions = dispatch => ({
});

const IndexRepComponent = translate(withStyles(styles)(IndexRep));
export default connect(mapStateToProps, mapDispatchToPropsActions)(IndexRepComponent);