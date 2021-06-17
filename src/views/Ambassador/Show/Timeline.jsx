import React from "react";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { showTimelineProfile } from "actions/timelineprofileActions.jsx";

// @material-ui/icons
import CardTravel from "@material-ui/icons/CardTravel";
import Extension from "@material-ui/icons/Extension";
import Fingerprint from "@material-ui/icons/Fingerprint";
import FlightLand from "@material-ui/icons/FlightLand";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Timeline from "components/Timeline/ProfileTimeline.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

import { withRouter } from 'react-router-dom';
import { showDate } from "assets/functions/general.jsx";
import { BASE_URL } from 'constants/urlTypes';
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
    ...customSelectStyle
};

class TimelineProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
    }

    
    componentDidMount() {
      this.props.dispatchShowTimelineProfile(this.props.match.params.id);
    }

    render() {
        const { show_timeline_profile, t} = this.props;
        const list = show_timeline_profile === undefined ? [] : show_timeline_profile;
        let ind = 0;
        const updates = list.map((prop, key) => {
            ind++;
            switch (ind) {
              case 1:
                  return {
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
                  <center>
                    <br/>
                    <h4>{t("title_ambassador_timeline")}</h4>
                  </center>
                  <GridItem xs={12} sm={12} md={11}>
                        <Timeline
                         stories={updates} 
                         simple
                         />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={11}>
                        <TimelineForm />
                  </GridItem>
              </GridContainer>
        );
    }
}
const mapStateToProps = state => ({ 
    show_timeline_profile: state.timelineprofileReducer.show_timeline_profile
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowTimelineProfile: key => dispatch(showTimelineProfile(key)), 
});

const TimelineComponent = translate(withStyles(style)(TimelineProfile));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(TimelineComponent));


