import React from "react";
import PropTypes from "prop-types";
import { translate } from 'react-switch-lang';
// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { getShowProgrammbs } from "actions/programmbsActions.jsx";
import { store } from "store";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Domain from "@material-ui/icons/Domain";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Timeline from "@material-ui/icons/Timeline";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import FileCopy from "@material-ui/icons/FileCopy";
import AccessibityNew from "@material-ui/icons/AccessibilityNew";
import PanTool from "@material-ui/icons/PanTool";
import Face from "@material-ui/icons/Face";


// core components
import NavPills from "components/NavPills/NavPills.jsx";
import PlanTab from "./PlanTab.jsx";
import ProductTab from "./ProductTab.jsx";
import ProcessTab from './ProcessTab.jsx';
import PriceTab from './PriceTab.jsx';
import PromotionTab from './PromotionTab.jsx';
import PaperworkTab from './PaperworkTab.jsx';
import QualitylifeTab from './QualitylifeTab.jsx';
import ServiceTab from './ServiceTab.jsx';
import HistoryTab from './HistoryTab.jsx';


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




class ShowForm extends React.Component {

   


    render() {
        const { classes, programmbs, progressmbs } = this.props;
        let { t } = this.props;
        return (
          <NavPills
                  color="warning"
                  tabs={[
                    {
                      tabButton: (
                        <div>
                          {t("title_plan")}<div>{progressmbs.plan}</div>
                        </div>
                      ),
                      tabIcon: AccountBalance,
                      tabContent: (
                        <PlanTab />
                      )
                    },
                    {
                      tabButton: (
                        <div>
                          {t("title_product")}<div>{progressmbs.product}</div>
                        </div>
                      ),
                      tabIcon: Domain,
                      tabContent: (
                        <ProductTab />
                      )
                    },
                    {
                      tabButton: (
                        <div>
                          {t("title_process")}<div>{progressmbs.process}</div>
                        </div>
                      ),
                      tabIcon: Timeline,
                      tabContent: (
                        <ProcessTab />
                      )
                    },
                    {
                      tabButton: (
                        <div>
                          {t("title_price")}<div>{progressmbs.price}</div>
                        </div>
                      ),
                      tabIcon: MonetizationOn,
                      tabContent: (
                        <PriceTab />
                      )
                    },
                    {
                      tabButton: (
                        <div>
                          {t("title_promotion")}<div>{progressmbs.promotion}</div>
                        </div>
                      ),
                      tabIcon: RecordVoiceOver,
                      tabContent: (
                        <PromotionTab />
                      )
                    },
                    {
                      tabButton: (
                        <div>
                          {t("title_paperwork")}<div>{progressmbs.paperwork}</div>
                        </div>
                      ),
                      tabIcon: FileCopy,
                      tabContent: (
                        <PaperworkTab />
                      )
                    },
                    {
                      tabButton: (
                        <div>
                          {t("title_quality_life")}<div>{progressmbs.quality}</div>
                        </div>
                      ),
                      tabIcon: AccessibityNew,
                      tabContent: (
                        <QualitylifeTab />
                      )
                    },
                    {
                      tabButton: (
                        <div>
                          {t("title_service")}<div>{progressmbs.service}</div>
                        </div>
                      ),
                      tabIcon: PanTool,
                      tabContent: (
                        <ServiceTab />
                      )
                    },
                    {
                      tabButton: (
                        <div>
                          {t("title_history")}<div>{"*"}</div>
                        </div>
                      ),
                      tabIcon: Face,
                      tabContent: (
                        <HistoryTab />
                      )
                    }                    
                  ]}
                />
                
        );
    }
}

const mapStateToProps = state => ({ 
      programmbs: state.programmbsReducer.programmbs,     
      progressmbs: state.studentReducer.dashboard_student.progressMbs, 
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowProgrammbs: key => dispatch(getShowProgrammbs(key)), 
});

const ShowFormComponent = translate(withStyles(style)(ShowForm));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ShowFormComponent));



