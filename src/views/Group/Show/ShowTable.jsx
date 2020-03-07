import React from "react";
import { translate } from "react-translate";
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { showGroup } from "actions/groupActions.jsx";
import { deleteUser } from "actions/userActions.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import SnackbarContent from "components/Snackbar/SnackbarContent";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Table from "components/Table/Table.jsx";

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
     this.deleteClick = this.deleteClick.bind(this);
    }

    deleteClick() {
      this.props.dispatchDeleteUser(this.props.match.params.id);
    }
    componentDidMount() {
      this.props.dispatchShowGroup(this.props.match.params.id);
    }

    render() {
        const { show_group, successful_delete } = this.props;
        let { t } = this.props;
        let i = 0;
        let start_date=[];
        let final_date=[];
          for (i = 0; i < 10 ; i++) {
              start_date[i]=show_group.start_date[i]
              final_date[i]=show_group.final_date[i]
          }
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <GridItem xs={12} sm={12} md={12}>
                  { successful_delete ?      
                  <SnackbarContent
                    message={
                      <center>{t("label.successful_delete")}</center>
                    }
                    close={false}
                    color="success"
                  />
                  : ""}
              </GridItem>
            <Table
              striped
              tableHead={[]}
              tableData={[
                [<th>{t("label.name")}</th>,show_group.name],
                [<th>{t("label.embassador_mentor")}</th>,show_group.embassador.first_name+ " "+ show_group.embassador.last_name,],
                [<th>{t("label.start_date")}</th>,start_date],
                [<th>{t("label.final_date")}</th>,final_date],
                [<th>{t("label.number_students_enrolled")}</th>,show_group.number_students],
                [<th>{t("label.modality")}</th>,t(show_group.modality)],
                [<th>{t("label.program")}</th>,t(show_group.program)],
              ]}
            />
            <br/>
             <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Link to={"/group"}>
                      <Button color="default" size="sm">
                      {t("button.return_to_list")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Link to={"/group/edit/" + show_group.id}>
                      <Button color="info" size="sm">
                      {t("button.edit")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Button color="danger" size="sm" onClick={this.deleteClick}>
                      {t("button.delete")}
                      </Button>
                      {" "}
                      </center>
                  </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
                
        );
    }
}
const mapStateToProps = state => ({ 
  show_group: state.groupReducer.show_group,
  delete_user: state.userReducer.delete_user, 
  successful_delete: state.generalReducer.successful_delete
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowGroup: key => dispatch(showGroup(key)), 
  dispatchDeleteUser: key => dispatch(deleteUser(key))
});

const ShowTableComponent = translate('provider')(withStyles(style)(ShowTable));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ShowTableComponent));


