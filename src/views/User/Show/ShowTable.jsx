import React from "react";
import { translate } from "react-translate";
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { showUser } from "actions/userActions.jsx";

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
    ...customSelectStyle,
    ...validationFormsStyle
};

class ShowTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }
    componentDidMount() {
      this.props.dispatchShowUser(this.props.match.params.id);
    }

    render() {
        const { show_user } = this.props;
        let { t } = this.props;
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
            <Table
              striped
              tableHead={[]}
              tableData={[
                [<th>{t("label.email")}</th>,<p>{show_user.username}</p>],
                [<th>{t("label.name")}</th>,show_user.first_name],
                [<th>{t("label.lastName")}</th>,show_user.last_name],
                [<th>{t("label.country")}</th>,show_user.country],
                [<th>{t("label.city")}</th>, show_user.city],
                [<th>{t("label.whatsApp")}</th>, show_user.whatsapp],
                [<th>{t("label.language")}</th>,  show_user.language],
              ]}
            />
            <br/>
             <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Button color="default" size="sm" onClick={this.loginClick}>
                      {t("button.return_to_list")}
                      </Button>
                      {" "}
                      <Link to={"/user/edit/" + show_user.id}>
                      <Button color="info" size="sm" onClick={this.loginClick}>
                      {t("button.edit")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Button color="warning" size="sm" onClick={this.saveClick}>
                      {t("button.change_password")}
                      </Button>
                      {" "}
                      <Button color="danger" size="sm" onClick={this.loginClick}>
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
  show_user: state.userReducer.show_user   
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowUser: key => dispatch(showUser(key)), 
});

const ShowTableComponent = translate('provider')(withStyles(style)(ShowTable));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ShowTableComponent));


