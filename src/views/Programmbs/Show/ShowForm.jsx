import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-translate";
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

    componentDidMount() {
      this.props.dispatchShowProgrammbs(this.props.match.params.id);
    }


    render() {
        const { classes, programmbs } = this.props;
        let { t } = this.props;
        return (
          <NavPills
                  color="warning"
                  tabs={[
                    {
                      tabButton: t("title.plan"),
                      tabIcon: AccountBalance,
                      tabContent: (
                        <PlanTab />
                      )
                    },
                    {
                      tabButton: t("title.product"),
                      tabIcon: Domain,
                      tabContent: (
                        <ProductTab />
                      )
                    },
                    {
                      tabButton: t("title.process"),
                      tabIcon: Timeline,
                      tabContent: (
                        <ProcessTab />
                      )
                    },
                    {
                      tabButton: t("title.price"),
                      tabIcon: MonetizationOn,
                      tabContent: (
                        <PriceTab />
                      )
                    },
                    {
                      tabButton: t("title.promotion"),
                      tabIcon: RecordVoiceOver,
                      tabContent: (
                        <PromotionTab />
                      )
                    },
                    {
                      tabButton: t("title.paperwork"),
                      tabIcon: FileCopy,
                      tabContent: (
                        <PaperworkTab />
                      )
                    },
                    {
                      tabButton: t("title.quality_life"),
                      tabIcon: AccessibityNew,
                      tabContent: (
                        <QualitylifeTab />
                      )
                    },
                    {
                      tabButton: t("title.service"),
                      tabIcon: PanTool,
                      tabContent: (
                        <ServiceTab />
                      )
                    },
                    {
                      tabButton: t("title.history"),
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
      
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowProgrammbs: key => dispatch(getShowProgrammbs(key)), 
});

const ShowFormComponent = translate('provider')(withStyles(style)(ShowForm));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ShowFormComponent));



