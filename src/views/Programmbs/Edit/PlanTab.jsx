import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CustomInputRedux from 'components/CustomInput/CustomInputRedux.jsx';
import Controls from './Controls.jsx';

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

// core components
import { translate } from 'react-switch-lang';
import { loadFormProgrammbs } from "actions/programmbsActions.jsx";



const styles = {
  cardTitleCenter:{
    textAlign: "center"
  }, 
};


class PlanTab extends React.Component {

  
  render() {
    const { classes, programmbs } = this.props;
    let { t } = this.props;
    return (
        <Card >
          <CardBody>
            <h3 className={classes.cardTitleCenter} >{t("title_plan")}</h3>
            <br/>
            <form>
                <Field
                  labelText={t("question_plan1")}
                  component={CustomInputRedux}
                  name="plan1"
                  success
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 7,
                  }}
                />
                <br/>
                <Field
                  labelText={t("question_plan2")}
                  component={CustomInputRedux}
                  name="plan2"
                  success
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 7,
                  }}
                />
            </form>           
            <br/>           
            <Controls/>
          </CardBody>
        </Card>
    );
  }
}

PlanTab = reduxForm({
  form: 'programmbs',
  enableReinitialize: true,
})(PlanTab);


PlanTab = connect(
  state => ({
    initialValues: state.programmbsReducer.data, 
  }),
  { load: loadFormProgrammbs }, 
)(PlanTab);


export default translate(withStyles(styles)(PlanTab));

