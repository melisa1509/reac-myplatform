import React from "react";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { showGrant } from "actions/grantActions.jsx";
import { showGrantAmbassador } from "actions/grantActions.jsx";
import { newGrantUpdate } from "actions/grantActions.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";

// core components
import Danger from "components/Typography/Danger.jsx";
import MutedText from "components/Typography/Muted.jsx";
import SuccessBold from "components/Typography/SuccessBold.jsx";


// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

import { withRouter } from 'react-router-dom';
import { showDate } from "assets/functions/general.jsx";
import { BASE_URL } from 'constants/urlTypes';

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

    componentWillMount() {
      this.props.dispatchShowGrant(this.props.match.params.grant);
      this.props.dispatchShowGrantAmbassador(this.props.match.params.id);
    }
   

    render() {
        const { show_grant, show_grant_ambassador, classes} = this.props;
        let { t } = this.props;
        
        return (
          <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <center><h3 >{t("title_grant_overview")}</h3></center>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={11}>
                   
                          {show_grant_ambassador.state === "state.approved" ? <center><Danger><h5>{t("label_grant_application_approved")}</h5></Danger></center>: ""}
                        
                  </GridItem>
                  <GridItem xs={12} sm={12} md={11}>
                    <Table
                      striped
                      tableData={[
                        [<th>{t("label_administrator")}</th>,show_grant.administrator.first_name+ " "+ show_grant.administrator.last_name,],
                        [<th>{t("label_date")}</th>, showDate(show_grant.date)],                        
                        [<th>{t("label_language")}</th>, t(show_grant.language)],
                        [<th>{t("label_ambassador")}</th>, show_grant_ambassador.ambassador.first_name + " " + show_grant_ambassador.ambassador.last_name],
                        [<th>{t("label_total_amount_approved")}</th>, show_grant_ambassador.amount],
                        
                      ]}
                    />
                    <Table
                      striped={false}
                      tableData={[
                        [<div dangerouslySetInnerHTML={{ __html: show_grant.description }}></div>],
                      ]}
                    />
                  <br/>
                  </GridItem>
                  <br/>
                  <center><h3 >{t("title_grant_application")}</h3></center>
                  <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={11}>
                      <SuccessBold>
                        {t("label_success_ambassador_code")}
                      </SuccessBold>
                      <br/>
                      <MutedText>
                        {show_grant_ambassador.code}
                      </MutedText>
                      <br/>
                      <SuccessBold>
                        {t("question_grant1")}
                      </SuccessBold>
                      <br/>
                        <div dangerouslySetInnerHTML={{ __html: show_grant_ambassador.question1 }}></div>
                      <br/>
                      <SuccessBold>
                        {t("question_grant2")}
                      </SuccessBold>
                      <br/>
                        <div dangerouslySetInnerHTML={{ __html: show_grant_ambassador.question2 }}></div>
                    </GridItem>
                  </GridContainer>
                  <center><h5 className={classes.cardTitleCenter} >{t("question_grant")}</h5></center>
                  <GridContainer justify="center">
                      <GridItem xs={12} sm={12} md={11}>
                        <SuccessBold>
                          {t("question_grant3")}
                        </SuccessBold>
                        <br/>
                        <MutedText>
                          {show_grant_ambassador.number}
                        </MutedText>
                        <br/>
                        <SuccessBold>
                          {t("question_grant4")}
                        </SuccessBold>
                        <br/>
                        <MutedText>
                          {show_grant_ambassador.question4}
                        </MutedText>
                        <br/>
                        <SuccessBold>
                          {t("question_grant5")}
                        </SuccessBold>
                        <br/>
                        <MutedText>
                          {show_grant_ambassador.question5}
                        </MutedText>
                        <br/>
                        <SuccessBold>
                          {t("question_grant6")}
                        </SuccessBold>
                        <br/>
                        <MutedText>
                          {show_grant_ambassador.question6}
                        </MutedText>
                        <br/>
                        <SuccessBold>
                          {t("label_grant_file")}
                        </SuccessBold>
                        <br/>
                        {
                          show_grant_ambassador.file !== undefined ?
                          <a
                            href={BASE_URL +  "/web/file/"  + show_grant_ambassador.file}
                            target="_blank"
                          >
                              {t("label_download_file")}
                          </a>:
                          ""
                        }
                        <br/><br/>
                        <SuccessBold>
                          {t("label_grant_file2")}
                        </SuccessBold>
                        <br/>
                        {
                          show_grant_ambassador.file2 !== undefined ?
                          <a
                            href={BASE_URL +  "/web/file/"  + show_grant_ambassador.file2}
                            target="_blank"
                          >
                              {t("label_download_file")}
                          </a>:
                          ""
                        }
                        <br/>
                    </GridItem>
                  </GridContainer>
              <br/>
            </GridContainer>
                
        );
    }
}
const mapStateToProps = state => ({ 
  show_grant: state.grantReducer.show_grant,
  delete_grant: state.grantReducer.delete_grant, 
  show_grant_ambassador: state.grantReducer.show_grant_ambassador,
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchNewGrantUpdate: () => dispatch(newGrantUpdate()),
  dispatchDeleteSuccessful: () => dispatch(deleteSuccessful()),
  dispatchShowGrant: key => dispatch(showGrant(key)),
  dispatchShowGrantAmbassador: key => dispatch(showGrantAmbassador(key)),
});

const ShowTableComponent = translate(withStyles(style)(ShowTable));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ShowTableComponent));


