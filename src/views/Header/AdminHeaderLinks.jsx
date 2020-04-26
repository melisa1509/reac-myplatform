import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { translate } from "react-translate";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

// @material-ui/icons
import { Apps, Message, Face, Dashboard, HowToReg, SupervisorAccount, TrackChanges, LibraryBooks, Person, Stars, School, Cancel } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import { getActiveUser } from "actions/loginActions.jsx";


class AdminHeaderLinks extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        
      };
      
    
  }

  componentDidMount() {
    this.props.dispatchGetActiveUser(this.props.history);
  }

  render() {
      const { classes, t, active_user } = this.props;
      let links = '';
      let roles = active_user.roles === undefined ? [] : active_user.roles
      if( roles.includes("ROLE_ADMIN")  || roles.includes("ROLE_LANGUAGE_ADMIN") ) {
        links = [
          <Link to={'/dashboard'} className={classes.dropdownLink}>
            
              <Dashboard color="danger" className={classes.icons} /> {t("link.dashboard")}
            
          </Link>,
          <Link to={'/profile'} className={classes.dropdownLink}>
            
                <Person color="danger" className={classes.icons} /> {t("link.user_profile")}
            
          </Link>,
          <Link to={'/group'} className={classes.dropdownLink}>
            
                <Stars color="danger" className={classes.icons} /> {t("link.groups")}
            
          </Link>,
          <Link to={'/student'} className={classes.dropdownLink}>
            
                <HowToReg color="danger" className={classes.icons} /> {t("link.participants")}
            
          </Link>,
          <Link to={'/ambassador'} className={classes.dropdownLink}>
            
                <SupervisorAccount color="danger" className={classes.icons} /> {t("link.ambassadors")}
            
          </Link>,
          <Link to={'/certificate'} className={classes.dropdownLink}>
            
                <School color="danger" className={classes.icons} /> {t("link.certificates")}
            
          </Link>,
          <Link to={'/code'} className={classes.dropdownLink}>
            
                <TrackChanges color="danger" className={classes.icons} /> {t("link.codes")}
            
          </Link>,
          <Link to={'/report'} className={classes.dropdownLink}>
            
                <LibraryBooks color="danger" className={classes.icons} /> {t("link.reports")}
            
          </Link>,
          <Link to={'/login'} className={classes.dropdownLink}>
            
                <Cancel color="danger" className={classes.icons} /> {t("link.logout")}
            
          </Link>,

        ]
      }
      else if( roles.includes("ROLE_EMBASSADOR")) {
        links = [
          
        ]
      }
      else {
        links=[];
      }
      
      
      return (
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Button
              color="transparent"          
              className={classes.navLink}
            >
             <Face color="danger" className={classes.icons} /> { active_user.first_name + " " + active_user.last_name } | 
            </Button>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText={t("link.administrator")}
              buttonProps={{
                className: classes.navLink,
                color: "transparent"
              }}
              hoverColor="info"
              buttonIcon={Apps}
              dropdownList={ links }
            />
          </ListItem>
          <ListItem className={classes.listItem}>
          <Button
                color="transparent" 
                className={classes.navLink}
            >
            <Message color="danger" className={classes.icons} />Messages
          </Button>
          </ListItem>
          
        </List>
      );
  }
}

const mapStateToProps = state => ({ 
    active_user: state.loginReducer.active_user   
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetActiveUser: redirect => dispatch( getActiveUser(redirect) )
});

const LoginFormComponent = translate('provider')(withStyles(headerLinksStyle)(AdminHeaderLinks));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(LoginFormComponent));

