import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import { translate } from 'react-switch-lang';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

// @material-ui/icons
import { Apps, Message, Face, Dashboard, HowToReg, SupervisorAccount, TrackChanges, LibraryBooks, Person, Stars, School, Cancel, Group } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import { getActiveUser, logoutUser } from "actions/loginActions.jsx";

import en from 'assets/translate/en.json';
import fr from 'assets/translate/fr.json';
import es from 'assets/translate/es.json';
import pr from 'assets/translate/pr.json';
import pt from 'assets/translate/pr.json';
import {
  setTranslations,
  setDefaultLanguage,
} from 'react-switch-lang';

setTranslations({ en, fr, es, pr, pt });


class AdminHeaderLinks extends React.Component {
  constructor(props) {
      super(props);
      this.state = {        
      };    
      this.logoutUser= this.logoutUser.bind(this);  
  }

  componentWillMount(){
    this.props.dispatchGetActiveUser(this.props.history);    
  }

  logoutUser(){
    this.props.dispatchLogoutUser(this.props.history);
  }

  render() {
      const { classes, t, active_user } = this.props;
      let links = '';
      let link_menu = "";
      let roles = active_user.roles === undefined ? [] : active_user.roles;
      if( roles.includes("ROLE_ADMIN")  || roles.includes("ROLE_LANGUAGE_ADMIN") ) {
        link_menu = "link_administrator";
        links = [
          <Link to={'/dashboard'} className={classes.dropdownLink}>
            
              <Dashboard color="danger" className={classes.icons} /> {t("link_dashboard")}
            
          </Link>,
          <Link to={'/admin'} className={classes.dropdownLink}>
            
              <Face color="danger" className={classes.icons} /> {t("link_admins")}
        
          </Link>,
          <Link to={'/profile'} className={classes.dropdownLink}>
            
                <Person color="danger" className={classes.icons} /> {t("link_user_profile")}
            
          </Link>,
          <Link to={'/group'} className={classes.dropdownLink}>
            
                <Stars color="danger" className={classes.icons} /> {t("link_groups")}
            
          </Link>,
          <Link to={'/student'} className={classes.dropdownLink}>
            
                <HowToReg color="danger" className={classes.icons} /> {t("link_participants")}
            
          </Link>,
          <Link to={'/ambassadorstudent'} className={classes.dropdownLink}>
            
                <Group color="danger" className={classes.icons} /> {t("link_ambassador_student")}
                        
          </Link>,
          <Link to={'/ambassador'} className={classes.dropdownLink}>
            
                <SupervisorAccount color="danger" className={classes.icons} /> {t("link_ambassadors")}
            
          </Link>,
          <Link to={'/certificate'} className={classes.dropdownLink}>
            
                <School color="danger" className={classes.icons} /> {t("link_certificates")}
            
          </Link>,
          <Link to={'/code'} className={classes.dropdownLink}>
            
                <TrackChanges color="danger" className={classes.icons} /> {t("link_codes")}
            
          </Link>,
          <Link to={'/report'} className={classes.dropdownLink}>
            
                <LibraryBooks color="danger" className={classes.icons} /> {t("link_reports")}
            
          </Link>,
          <Link onClick={this.logoutUser} className={classes.dropdownLink}>
            
                <Cancel color="danger" className={classes.icons} /> {t("link_logout")}
            
          </Link>,

        ]
      }
      else if( roles.includes("ROLE_EMBASSADOR")) {
        link_menu = "link_ambassador";
        links = [
          <Link to={'/dashboard'} className={classes.dropdownLink}>
            
              <Dashboard color="danger" className={classes.icons} /> {t("link_dashboard")}
            
          </Link>,        
          <Link to={'/profile'} className={classes.dropdownLink}>
            
                <Person color="danger" className={classes.icons} /> {t("link_user_profile")}
            
          </Link>,
          <Link to={'/group'} className={classes.dropdownLink}>
            
                <Stars color="danger" className={classes.icons} /> {t("link_groups")}
            
          </Link>,
          <Link to={'/student'} className={classes.dropdownLink}>
            
                <HowToReg color="danger" className={classes.icons} /> {t("link_participants")}
            
          </Link>,      
          <Link to={'/certificate'} className={classes.dropdownLink}>
            
                <School color="danger" className={classes.icons} /> {t("link_certificates")}
            
          </Link>,         
          <Link to={'/report'} className={classes.dropdownLink}>
            
                <LibraryBooks color="danger" className={classes.icons} /> {t("link_reports")}
            
          </Link>,
          <Link onClick={this.logoutUser} className={classes.dropdownLink}>
            
                <Cancel color="danger" className={classes.icons} /> {t("link_logout")}
            
          </Link>,

        ]
      }
      else if(roles.includes("ROLE_STUDENT_EMBASSADOR") ) {
        link_menu = "link_student";
        links = [
          <Link to={'/dashboard/student'} className={classes.dropdownLink}>
            
              <Dashboard color="danger" className={classes.icons} /> {t("link_dashboard")}
            
          </Link>,        
          <Link to={'/profile'} className={classes.dropdownLink}>
            
                <Person color="danger" className={classes.icons} /> {t("link_user_profile")}
            
          </Link>,
         
          <Link to={'/dashboard/student'} className={classes.dropdownLink}>
            
                <LibraryBooks color="danger" className={classes.icons} /> {t("link_program_ambassador")}
            
          </Link>,
          <Link to={'/group'} className={classes.dropdownLink}>
            
                <Stars color="danger" className={classes.icons} /> {t("link_groups")}
            
          </Link>,
          <Link to={'/student'} className={classes.dropdownLink}>
            
                <HowToReg color="danger" className={classes.icons} /> {t("link_participants")}
            
          </Link>,   
          <Link to={'/certificate'} className={classes.dropdownLink}>
            
              <HowToReg color="danger" className={classes.icons} /> {t("link_certificates")}
          
          </Link>, 
          <Link onClick={this.logoutUser} className={classes.dropdownLink}>
            
                <Cancel color="danger" className={classes.icons} /> {t("link_logout")}
            
          </Link>,

        ]
      }
      else if( roles.includes("ROLE_STUDENT")) {
        link_menu = "link_student";
        links = [
          <Link to={'/dashboard/student'} className={classes.dropdownLink}>
            
              <Dashboard color="danger" className={classes.icons} /> {t("link_dashboard")}
            
          </Link>,
          <Link to={'/profile'} className={classes.dropdownLink}>
            
                <Person color="danger" className={classes.icons} /> {t("link_user_profile")}
            
          </Link>,
          <Link to={'/dashboard/student'} className={classes.dropdownLink}>
            
            <School color="danger" className={classes.icons} /> {t("link_program_mbs")}
      
          </Link>,          
          <Link onClick={this.logoutUser} className={classes.dropdownLink}>
            
                <Cancel color="danger" className={classes.icons} /> {t("link_logout")}
            
          </Link>, 
        
        ]
      }
      else {
        link_menu = "link_student";
        links=[];
      }
      
      
      return (
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
            <Link to={'/profile'} className={classes.navLink}>
                 
                        <Face color="danger" className={classes.icons} /> { active_user.first_name + " " + active_user.last_name } | 
            </Link>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText={t(link_menu)}
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
  dispatchGetActiveUser: redirect => dispatch( getActiveUser(redirect)),
  dispatchLogoutUser: redirect => dispatch( logoutUser(redirect))
});

const LoginFormComponent = translate(withStyles(headerLinksStyle)(AdminHeaderLinks));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(LoginFormComponent));

