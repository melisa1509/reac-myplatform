import React from "react";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { showGrantUpdate } from "actions/grantActions.jsx";
import { newGrantUpdate } from "actions/grantActions.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";
import isOdd from "is-odd";

// @material-ui/icons
import CardTravel from "@material-ui/icons/CardTravel";
import Extension from "@material-ui/icons/Extension";
import Fingerprint from "@material-ui/icons/Fingerprint";
import FlightLand from "@material-ui/icons/FlightLand";
import Build from "@material-ui/icons/Build";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Timeline from "components/Timeline/Timeline.jsx";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";

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

class UpdateTimeline extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
     this.saveClick = this.saveClick.bind(this);
     this.deleteClick= this.deleteClick.bind(this);
    }

    saveClick() {
      this.props.dispatchNewGrantUpdate();
    }
    componentDidMount() {
      this.props.dispatchShowGrantUpdate(this.props.match.params.id);
    }

    deleteClick(){
      this.props.dispatchDeleteSuccessful();
      this.props.dispatchShowGrant(this.props.match.params.id);
    }

    render() {
        const { show_grant, show_grant_update} = this.props;
        const updates = show_grant_update.map((prop, key) => {
          return {
            inverted: isOdd(key),
            badgeColor: isOdd(key),
            badgeIcon: isOdd(key) ? CardTravel : Extension,
            title: prop.grant.embassador.first_name,
            titleColor: isOdd(key) ? "danger" : "info",
            body: (
              <p>
                {prop.description}
              </p>
            ),
            footerTitle: prop.create_at
          }
        })
        const stories = [
          {
            // First story
            inverted: true,
            badgeColor: "danger",
            badgeIcon: CardTravel,
            title: "Some Title",
            titleColor: "danger",
            body: (
              <p>
                Wifey made the best Father{"'"}s Day meal ever. So thankful so happy so
                blessed. Thank you for making my family We just had fun with the
                “future” theme !!! It was a fun night all together ... The always rude
                Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in
                downtown.
              </p>
            ),
            footerTitle: "11 hours ago via Twitter"
          },
          {
            // Second story
            badgeColor: "success",
            badgeIcon: Extension,
            title: "Another One",
            titleColor: "success",
            body: (
              <p>
                Thank God for the support of my wife and real friends. I also wanted to
                point out that it’s the first album to go number 1 off of streaming!!! I
                love you Ellen and also my number one design rule of anything I do from
                shoes to music to homes is that Kim has to like it....
              </p>
            )
          },
          {
            // Third story
            inverted: true,
            badgeColor: "info",
            badgeIcon: Fingerprint,
            title: "Another Title",
            titleColor: "info",
            body: (
              <div>
                <p>
                  Called I Miss the Old Kanye That’s all it was Kanye And I love you
                  like Kanye loves Kanye Famous viewing @ Figueroa and 12th in downtown
                  LA 11:10PM
                </p>
                <p>
                  What if Kanye made a song about Kanye Royère doesn{"'"}t make a Polar
                  bear bed but the Polar bear couch is my favorite piece of furniture we
                  own It wasn’t any Kanyes Set on his goals Kanye
                </p>
              </div>
            ),
            footer: (
              <CustomDropdown
                buttonIcon={Build}
                buttonProps={{
                  round: true,
                  style: { marginBottom: "0" },
                  color: "info"
                }}
                dropdownList={[
                  "Action",
                  "Another action",
                  "Something else here",
                  { divider: true },
                  "Separated link"
                ]}
              />
            )
          },
          {
            // Fourth story
            badgeColor: "warning",
            badgeIcon: FlightLand,
            title: "Another One",
            titleColor: "warning",
            body: (
              <p>
                Tune into Big Boy{"'"}s 92.3 I{"'"}m about to play the first single from
                Cruel Winter also to Kim’s hair and makeup Lorraine jewelry and the
                whole style squad at Balmain and the Yeezy team. Thank you Anna for the
                invite thank you to the whole Vogue team
              </p>
            )
          }
        ];
        let { t } = this.props;
       
        return (
            <Timeline stories={updates} />
                
        );
    }
}
const mapStateToProps = state => ({ 
  show_grant: state.grantReducer.show_grant,
  delete_grant: state.grantReducer.delete_grant, 
  successfull_new: state.generalReducer.successful_new,
  show_grant_update: state.grantReducer.show_grant_update
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowGrantUpdate: key => dispatch(showGrantUpdate(key)), 
  dispatchNewGrantUpdate: () => dispatch(newGrantUpdate()),
  dispatchDeleteSuccessful: () => dispatch(deleteSuccessful())
});

const UpdateTimelineComponent = translate(withStyles(style)(UpdateTimeline));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(UpdateTimelineComponent));


