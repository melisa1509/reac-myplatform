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
import Espanol from "assets/img/flags/ES.png";
import Portugues from "assets/img/flags/PT.png";
import Frances from "assets/img/flags/FR.png";
import Ingles from "assets/img/flags/US.png";

import en from 'assets/translate/en.json';
import fr from 'assets/translate/fr.json';
import es from 'assets/translate/es.json';
import pt from 'assets/translate/pt.json';
import {
  setTranslations,
  setDefaultLanguage,
} from 'react-switch-lang';

setTranslations({ en, fr, es, pt });


class Language extends React.Component {
  constructor(props) {
      super(props);
      this.state = {        
      };    
      this.logoutUser= this.logoutUser.bind(this);  
  }

  componentWillMount(){
       
  }

  logoutUser(){
    this.props.dispatchLogoutUser(this.props.history);
  }

  render() {
      const { classes, t} = this.props;
      let links = '';
      let link_menu = "";
        link_menu = t("label_language");
        links = [
          <Link to={'/login'} className={classes.dropdownLink}>
            
            <img src={Espanol} height="20px" alt="..." />  {t(  "label_spanish")}
            
          </Link>,
          <Link to={'/login'} className={classes.dropdownLink}>
            
            <img src={Portugues} height="20px" alt="..." />  {t(  "label_portuguese")}
            
          </Link>,
          <Link to={'/login'} className={classes.dropdownLink}>
            
            <img src={Frances} height="20px" alt="..." />  {t(  "label_french")}
          
          </Link>,
          <Link to={'/login'} className={classes.dropdownLink}>
            
            <img src={Ingles} height="20px" alt="..." />  {t(  "label_english")}
        
          </Link>,
        ]
      return (
        <List className={classes.list}>
          <ListItem className={classes.listItem}>
          </ListItem>
          <ListItem className={classes.listItem}>
            <CustomDropdown
              noLiPadding
              buttonText={t(link_menu)}
              buttonProps={{
                className: classes.navLink,
                color: "info"
              }}
              hoverColor="info"
              buttonIcon={Apps}
              dropdownList={links}
            />
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

const LanguageComponent = translate(withStyles(headerLinksStyle)(Language));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(LanguageComponent));

