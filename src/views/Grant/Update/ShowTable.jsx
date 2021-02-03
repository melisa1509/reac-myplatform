import React from "react";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { showGrant } from "actions/grantActions.jsx";
import { newGrantUpdate } from "actions/grantActions.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Table from "components/Table/Table.jsx";
import SweetAlert from "react-bootstrap-sweetalert";

import UpdateForm from 'views/Grant/Update/UpdateForm.jsx';

// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

import { withRouter } from 'react-router-dom';

const style = {
    infoText: {
      fontWeight: "300",
      margin: "10px 0 30px",
      textAlign: "center"
    },
    inputAdornmentIcon: {
      color: "#555"
    },
    choiche: {
      textAlign: "center",
      cursor: "pointer",
      marginTop: "20px"
    },
    ...validationFormsStyle,
    ...customSelectStyle
};

class ShowTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
   
    componentDidMount() {
      this.props.dispatchShowGrant(this.props.match.params.id);
    }

    render() {
        const { show_grant, successfull_new} = this.props;
        console.log(successfull_new);
        let { t } = this.props;
        let i = "";
        let date=[];
          for (i = 0; i < 10 ; i++) {
              date[i]=show_grant.date[i]
          }
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={9}>
              <Table
                striped
                tableData={[
                  [<th>{t("label_embassador_mentor")}</th>,show_grant.embassador.first_name+ " "+ show_grant.embassador.last_name,],
                  [<th>{t("label_date")}</th>,date],
                  [<th>{t("label_number_students")}</th>,show_grant.participants_number],
                  [<th>{t("label_amount")}</th>,show_grant.amount],
                ]}
              />
              <Table
                striped
                tableData={[
                  [show_grant.description],
                ]}
              />
            </GridItem>
          </GridContainer>
                
        );
    }
}
const mapStateToProps = state => ({ 
  show_grant: state.grantReducer.show_grant,
  delete_grant: state.grantReducer.delete_grant, 
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowGrant: key => dispatch(showGrant(key)), 
  dispatchNewGrantUpdate: () => dispatch(newGrantUpdate()),
  dispatchDeleteSuccessful: () => dispatch(deleteSuccessful())
});

const ShowTableComponent = translate(withStyles(style)(ShowTable));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ShowTableComponent));


