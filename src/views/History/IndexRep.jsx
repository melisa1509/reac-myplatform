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

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { translate } from 'react-switch-lang';
import IndexTableAdmin from "./IndexTableAdmin.jsx";


const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  } 
};


class IndexRep extends React.Component {
 

  render() {
    const { classes, active_user, success_story} = this.props;
    let { t } = this.props;
    const login = "es";
    let rol=false
    if(active_user.roles == "ROLE_EMBASSADOR" ){
      rol=true
    }
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitle}>{t("label_success_story")}</h4>
            </CardHeader>
            <CardBody>
                {rol ? <IndexTable  /> : <IndexTableAdmin /> }     
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
const mapStateToProps = state => ({ 
  success_story: state.studentReducer.success_story,
  active_user: state.loginReducer.active_user,
});

const mapDispatchToPropsActions = dispatch => ({
});

const IndexRepComponent = translate(withStyles(styles)(IndexRep));
export default connect(mapStateToProps, mapDispatchToPropsActions)(IndexRepComponent);