import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import moment from "moment";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import NewForm from 'views/Group/New/NewForm.jsx';

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
class NewRep extends React.Component {
  
  render() {
    const { classes, styles } = this.props;
    let { t } = this.props;
    const initialValuesGroup= {
      modality:"option.modality1",
      program:"option.program1",
      start_date:moment().format('YYYY-MMM-DD'),
      final_date:moment().format('YYYY-MMM-DD'),
      graduation_date:moment().format('YYYY-MMM-DD'),
      id_ambassador:this.props.match.params.id,
    }
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="info">
            <center>
             <h4 className={classes.cardTitle}>{t("title.new_group")}</h4>
             </center>
            </CardHeader>
            <CardBody>
                <NewForm initialValues={initialValuesGroup} />  
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

NewRep.propTypes = {
  classes: PropTypes.object,
};


const mapDispatchToPropsActions = dispatch => ({

});


const NewRepComponent = translate('provider')(withStyles(styles)(NewRep));
export default withRouter(connect(null, mapDispatchToPropsActions)(NewRepComponent));