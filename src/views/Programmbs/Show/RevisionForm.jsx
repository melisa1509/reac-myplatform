import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { store } from "store";
import { Field, reduxForm } from 'redux-form';
import LanguageSelect from "views/Select/LanguageSelect.jsx";

import { loadFormProgrammbs } from "actions/programmbsActions.jsx";
import CustomInputRedux from 'components/CustomInput/CustomInputRedux.jsx';
import CustomCheckboxRedux from 'components/CustomCheckbox/CustomCheckboxRedux.jsx';
import { translate } from "react-translate";



  let RevisionForm = props => {
    const { handleSubmit, load, t, name, labelText } = props;
    return (
      <form onSubmit={handleSubmit}>
            <Field
              labelText={labelText}
              component={CustomInputRedux}
              name={name}
              success
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                multiline: true,
                rows: 5,
              }}
            />
      </form>
    );
  };
  
  // Decorate with reduxForm(). It will read the initialValues prop provided by connect()
  RevisionForm = reduxForm({
    form: 'programmbs', // a unique identifier for this form
  })(RevisionForm);

 
  // You have to connect() to any reducers that you wish to connect to yourself
  RevisionForm = connect(
    state => ({
      initialValues: state.programmbsReducer.data, // pull initial values from account reducer
    }),
    { load: loadFormProgrammbs }, // bind account loading action creator
  )(RevisionForm);

  
  export default  translate('provider')(RevisionForm);