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
import EditForm from 'views/Ambassador/Edit/EditForm.jsx';

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { translate } from "react-translate";
import { withRouter } from 'react-router-dom';

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  } 
};

class EditRep extends React.Component {
  
  render() {
    const { classes, styles } = this.props;
    let { t } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="info">
            <center>
             <h4 className={classes.cardTitle}>{t("title.edit_ambassador")}</h4>
             </center>
            </CardHeader>
            <CardBody>
                <EditForm  />  
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

EditRep.propTypes = {
  classes: PropTypes.object,
};

//export default withStyles(styles)(ReactTables);

const mapDispatchToPropsActions = dispatch => ({

});


const EditRepComponent = translate('provider')(withStyles(styles)(EditRep));
export default withRouter(connect(null, mapDispatchToPropsActions)(EditRepComponent));