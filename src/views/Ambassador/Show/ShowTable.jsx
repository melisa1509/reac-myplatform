import React from "react";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { showAmbassador } from "actions/ambassadorActions.jsx";
import { deleteAmbassador } from "actions/ambassadorActions.jsx";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Accordion from "components/Accordion/Accordion.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Table from "components/Table/Table.jsx";
import defaultImage from "assets/img/default-avatar.png";
import { monthDate } from "assets/functions/general";
import { BASE_URL } from 'constants/urlTypes';
import Timeline from "./Timeline";

// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

import { withRouter } from 'react-router-dom';
import { showListGrantAmbassador } from "actions/grantActions";

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
      this.props.dispatchDeleteAmbassador(this.props.match.params.id, this.props.history);
    }
    componentDidMount() {
      this.props.dispatchShowListAmbassador(this.props.match.params.id);
      this.props.dispatchShowAmbassador(this.props.match.params.id);
    }

    render() {
        const { show_ambassador, successful_delete, show_list_grant_ambassador } = this.props;
        let { t } = this.props;
        const data = show_list_grant_ambassador.map((prop, key) => {
          return (
           
                <Table
                  striped
                  tableHead={[prop.grant.title]}
                  tableData={[
                    [<th>{t("label_date")}</th>,monthDate(prop.created_at)],
                    [<th>{t("label_type_grant")}</th>,t(prop.grant.type)],
                  ]}
                />
             
          );
        });

        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={11}>
              <GridItem xs={12} sm={12} md={12}>
                  { successful_delete ?      
                  <SnackbarContent
                    message={
                      <center>{t("label_successful_delete")}</center>
                    }
                    close={false}
                    color="success"
                  />
                  : ""}
              </GridItem>
              <div className="picture-container">
                <div className="picture">
                  <img
                    src={show_ambassador.picture === "NULL" || show_ambassador.picture === "undefined" || show_ambassador.picture === undefined ? defaultImage : BASE_URL +  "/web/file/"  + show_ambassador.picture }
                    className="picture-src"
                    alt="..."
                  />
                </div>
              </div>
              <br/>
              <center>
                {
                  show_ambassador.picture !== "undefined" && show_ambassador.picture !== undefined ?
                  <a
                    href={BASE_URL +  "/web/file/"  + show_ambassador.picture}
                    target="_blank"
                  >
                      {t("label_download_file")}
                  </a>:
                  ""
                }    
              </center>            
              <br/>
            <Table
              striped
              tableData={[
                [<th>{t("label_email")}</th>,show_ambassador.username],
                [<th>{t("label_name")}</th>,show_ambassador.first_name],
                [<th>{t("label_lastName")}</th>,show_ambassador.last_name],
                [<th>{t("label_country")}</th>,show_ambassador.country],
                [<th>{t("label_city")}</th>, show_ambassador.city],
                [<th>{t("label_code")}</th>,  show_ambassador.code],
                [<th>{t("label_whatsApp")}</th>, show_ambassador.whatsapp],
              ]}
            />
            <br/>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <Accordion
                        active={-1}
                        collapses={[
                          {
                            title: t("link_ambassador_follow_up"),
                            content: <Timeline/>                                 
                          }
                        ]}
                    />
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Accordion
                        active={-1}
                        collapses={[
                          {
                            title: t("link_grants"),
                            content: data                                  
                          }
                        ]}
                    />
                  </GridItem>
              </GridContainer>
              <br/>
            <br/>
             <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Link to={"/ambassador"}>
                      <Button color="default" size="sm">
                      {t("button_return_to_list")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Link to={"/ambassador/edit/" + show_ambassador.id}>
                      <Button color="info" size="sm">
                      {t("button_edit")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Link to={"/ambassador/editpassword/" + show_ambassador.id}>
                      <Button color="warning" size="sm">
                      {t("button_change_password")}
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
  show_ambassador: state.ambassadorReducer.show_ambassador,
  delete_ambassador: state.ambassadorReducer.delete_ambassador, 
  successful_delete: state.generalReducer.successful_delete,
  show_list_grant_ambassador: state.grantReducer.show_list_grant_ambassador,
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowListAmbassador: key => dispatch(showListGrantAmbassador(key)), 
  dispatchShowAmbassador: key => dispatch(showAmbassador(key)), 
  dispatchDeleteAmbassador: (key, history) => dispatch(deleteAmbassador(key, history))
});

const ShowTableComponent = translate(withStyles(style)(ShowTable));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ShowTableComponent));


