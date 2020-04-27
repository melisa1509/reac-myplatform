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
import EditForm from 'views/Administrator/Edit/EditForm.jsx';

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
    const { classes, show_administrator  } = this.props;
    let { t } = this.props;
    let i= 0
    let language=show_administrator.language_grader
    for (i = 0; i < 10 ; i++) {
      language[i]={"es" :  true, "fr" : true}
    }
    const initialValuesAdmin= {
      roles: language
    }
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="info">
            <center>
             <h4 className={classes.cardTitle}>{t("title.edit_admin")}</h4>
             </center>
            </CardHeader>
            <CardBody>
                <EditForm initialValues={initialValuesAdmin}  />  
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

const mapStateToProps = state => ({ 
   show_administrator: state.administratorReducer.show_administrator,

});

const mapDispatchToPropsActions = dispatch => ({

});

const EditRepComponent = translate('provider')(withStyles(styles)(EditRep));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(EditRepComponent));