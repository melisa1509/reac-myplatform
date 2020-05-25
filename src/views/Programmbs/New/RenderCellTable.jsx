import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import CustomInputTable from 'components/CustomInput/CustomInputTable.jsx';
import { Field, reduxForm } from 'redux-form';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CustomInputForm from 'components/CustomInput/CustomInputForm.jsx';

import { translate } from 'react-switch-lang';


const styles = {
  cardTitleCenter:{
    textAlign: "center"
  }, 
  thBackgroundColor:{
    backgroundColor: "#4caf50",
    color: "#fff",
    fontWeight: "bold"
  },
  tdBackgroundColor:{
    backgroundColor: "#4caf5091",
    paddingLeft: "20px",
    color: "#495057",
    fontWeight: "bold"
  },
  verticalCenter: {
    verticalAlign: "middle",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  tdTable: {
    border: "1px solid #49505794",
    boxSizing: "border-box",
  },
  borderSpacing:{
    borderSpacing: "0px",
    borderCollapse: "collapse"
  },
  inputTable:{
    border: "0px",
    color: "#495057",
    paddingLeft: "10px"
  },
  horizontalRight: {
    textAlign: "right",
  },
};




class RenderCell extends React.Component {

  
  render() {
    const { classes, widthColums, fields, start, end } = this.props;
    return (
        <tr>
            {
                  
                fields.map((prop, key) => {
                    return (
                        <td className={ classes.tdTable + " "+ classes.verticalCenter  } style={{ width: widthColums[key] }}>
                            <Field
                            component={CustomInputForm}
                            name={prop}
                            />
                        </td>
                    );                    
                })
            }
        </tr>
    );
  }
}

RenderCell = reduxForm({
  form: 'programmbs',
  enableReinitialize: true,
})(RenderCell);

RenderCell = connect(
  state => ({
    initialValues: state.programmbsReducer.data, 
  }),
  {  }, 
)(RenderCell);

export default translate(withStyles(styles)(RenderCell));
