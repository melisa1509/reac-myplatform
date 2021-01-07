import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import IndexRep from 'views/Reports/Options/IndexRep.jsx';
import AdminHeader from "views/Header/AdminHeader.jsx";
import mainPageStyle from "assets/jss/material-kit-react/views/mainPage.jsx";
import DashboardAmbassador from 'views/Reports/Options/Dashboard/DashboardAmbassador.jsx';

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { translate } from 'react-switch-lang';

const styles = {
   ...mainPageStyle,
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  } 
};


class ShowParticipants extends React.Component {
 

  render() {
    const { classes, styles, active_user,active } = this.props;
    let { t } = this.props;
    let rol=false
    if(active_user.roles == "ROLE_EMBASSADOR" || active_user.roles == "ROLE_STUDENT_EMBASSADOR"){
      rol=true
    }
    const login = "es";
    return (
      <div>
      <AdminHeader/>
      <div
          className={classes.main}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundColor: "#eee"
          }}
        />
      <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
            <IndexRep active={1}/>     
        </GridItem>
      </GridContainer>
      </div>
      </div>
    );
  }
}

IndexRep.propTypes = {
  classes: PropTypes.object,
};

//export default withStyles(styles)(ReactTables);
const mapStateToProps = state => ({ 
  active_user: state.loginReducer.active_user,
});

const mapDispatchToPropsActions = dispatch => ({
});


const ShowParticipantsComponent = translate(withStyles(styles)(ShowParticipants));
export default connect(mapStateToProps, mapDispatchToPropsActions)(ShowParticipantsComponent);