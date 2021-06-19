import React from "react";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { showTimelineProfile } from "actions/timelineprofileActions.jsx";
import { deleteTimelineProfile } from "actions/timelineprofileActions.jsx";

// @material-ui/icons
import CardTravel from "@material-ui/icons/CardTravel";
import Extension from "@material-ui/icons/Extension";
import Fingerprint from "@material-ui/icons/Fingerprint";
import FlightLand from "@material-ui/icons/FlightLand";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SweetAlert from "react-bootstrap-sweetalert";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Badge from "components/Badge/Badge.jsx";
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";

// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import Close from "@material-ui/icons/Close";

import { withRouter } from 'react-router-dom';
import { showDate } from "assets/functions/general.jsx";
import { BASE_URL } from 'constants/urlTypes';
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import TimelineForm from "./TimelineForm";

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
    ...customSelectStyle,
    ...sweetAlertStyle
};

class TimelineProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.deleteClick = this.deleteClick.bind(this);
    }

    
    componentDidMount() {
      this.props.dispatchShowTimelineProfile(this.props.match.params.id);
    }

    deleteClick(key){
      this.props.dispatchDeleteTimelineProfile(key);
    }

    updateClick(){
      this.props.dispatchDeleteSuccessful();
      this.props.dispatchShowTimelineProfile(this.props.match.params.id);
    }

    render() {
        const { show_timeline_profile, t, successfull_new} = this.props;
        const list = show_timeline_profile === undefined ? [] : show_timeline_profile;
        let ind = 0;
        const updates = list.map((prop, key) => {
            ind++;
            switch (ind) {
              case 1:
                  return {
                    id: prop.id,
                    inverted: true,
                    badgeColor: "danger",
                    badgeIcon: CardTravel,
                    title: prop.admin.first_name + " "+ prop.admin.last_name,
                    titleColor: "danger",
                    body: (
                      <p>
                        {prop.description}
                      </p>
                    ),
                    footerTitle: showDate(prop.create_at)
                   
                  }
              case 2:
                  return {
                    id: prop.id,
                    badgeColor: "success",
                    badgeIcon: Extension,
                    title: prop.admin.first_name + " "+ prop.admin.last_name,
                    titleColor: "success",
                    body: (
                      <p>
                        {prop.description}
                      </p>
                    ),
                    footerTitle: showDate(prop.create_at)
                    
                  }
              case 3:
                  return {
                    id: prop.id,
                    inverted: true,
                    badgeColor: "info",
                    badgeIcon: Fingerprint,
                    title: prop.admin.first_name + " "+ prop.admin.last_name,
                    titleColor: "info",
                    body: (
                      <p>
                        {prop.description}
                      </p>
                    ),
                    footerTitle: showDate(prop.create_at)
                   
                  }
              case 4:
                  ind = 0;
                  return {
                    id: prop.id,
                    badgeColor: "warning",
                    badgeIcon: FlightLand,
                    title: prop.admin.first_name + " "+ prop.admin.last_name,
                    titleColor: "warning",
                    body: (
                      <p>
                        {prop.description}
                      </p>
                    ),
                    footerTitle: showDate(prop.create_at)
                   
                  }
              default:
                  return {
                    id: prop.id,
                    inverted: true,
                    badgeColor: "danger",
                    badgeIcon: CardTravel,
                    title: prop.admin.first_name + " "+ prop.admin.last_name,
                    titleColor: "danger",
                    body: (
                      <p>
                        {prop.description}
                      </p>
                    ),
                    footerTitle: showDate(prop.create_at)
                    
                  }
            }
            
        })
        
       
        return (
            <GridContainer justify="center">
                  { successfull_new ?      
                    <SweetAlert
                      success
                      style={{ display: "block", marginTop: "-100px", close:true }}
                      onConfirm={() => this.updateClick()}
                      confirmBtnCssClass={
                          this.props.classes.button + " " + this.props.classes.success
                      }
                      confirmBtnText={t("button_continue")}
                      >
                      <h4>{t("label_save_success")}</h4>
                    </SweetAlert> 
                  : ""}
                  <center>
                    <br/>
                    <h4>{t("title_ambassador_timeline")}</h4>
                  </center>
                  <GridItem xs={12} sm={12} md={11}>
                  <>
                      {updates.map((prop, key) => {
                        return (
                          <Card>
                            <CardBody>
                                {prop.title ? (
                                  <div >
                                    <Badge color={prop.titleColor}>{prop.title}</Badge>
                                      <Button
                                        justIcon
                                        round4
                                        simple
                                        onClick={() => this.deleteClick(prop.id)}
                                        color="danger"
                                      >
                                        <Close />
                                      </Button>
                                  </div>
                                ) : null}
                                <div >{prop.body}</div>
                                {prop.footerTitle ? (
                                  <h6 >{prop.footerTitle}</h6>
                                ) : null}
                                {prop.footer ? (
                                  <div >{prop.footer}</div>
                                ) : null}
                            </CardBody>
                          </Card>
                        );
                      })}
                    </>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={11}>
                        <TimelineForm />
                  </GridItem>
              </GridContainer>
        );
    }
}
const mapStateToProps = state => ({ 
    show_timeline_profile: state.timelineprofileReducer.show_timeline_profile,
    successfull_new:state.generalReducer.successfull_new,
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowTimelineProfile: key => dispatch(showTimelineProfile(key)), 
  dispatchDeleteTimelineProfile: key => dispatch(deleteTimelineProfile(key))
});

const TimelineComponent = translate(withStyles(style)(TimelineProfile));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(TimelineComponent));


