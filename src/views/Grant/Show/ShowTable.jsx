import React from "react";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { showGrant } from "actions/grantActions.jsx";
import { deleteGrant } from "actions/grantActions.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
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
      this.props.dispatchDeleteGrant(this.props.match.params.id,  this.props.history);
    }
    componentDidMount() {
      this.props.dispatchShowGrant(this.props.match.params.id);
    }

    render() {
        const { show_grant} = this.props;
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
                tableHead={[]}
                tableData={[
                  [<th>{t("label_embassador_mentor")}</th>,show_grant.embassador.first_name+ " "+ show_grant.embassador.last_name,],
                  [<th>{t("label_date")}</th>,date],
                ]}
              />
              <Table
                striped
                tableData={[
                  [show_grant.description],
                ]}
              />
            <br/>
             <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Link to={"/grant"}>
                      <Button color="default" size="sm">
                      {t("button_return_to_list")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Link to={"/grant/edit/" + show_grant.id}>
                      <Button color="info" size="sm">
                      {t("button_edit")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Button color="danger" size="sm" onClick={this.deleteClick}>
                      {t("button_delete")}
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
  show_grant: state.grantReducer.show_grant,
  delete_grant: state.grantReducer.delete_grant, 
  successful_delete: state.generalReducer.successful_delete
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowGrant: key => dispatch(showGrant(key)), 
  dispatchDeleteGrant: (key, history) => dispatch(deleteGrant(key, history))
});

const ShowTableComponent = translate(withStyles(style)(ShowTable));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ShowTableComponent));


