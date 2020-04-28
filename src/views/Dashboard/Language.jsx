import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Switch, Route, Redirect, Router, } from "react-router-dom";
// creates a beautiful scrollbar
import { TranslatorProvider } from "react-translate";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import ListAdmin from 'views/Administrator/Index.jsx';

import rtlStyle from "assets/jss/material-dashboard-pro-react/layouts/rtlStyle.jsx";

import { createBrowserHistory } from "history";
import AdminHeader from "header/AdminHeader.jsx";

const hist = createBrowserHistory();

var ps;

class RTL extends React.Component {
  state = {
    mobileOpen: false,
    miniActive: false,
    image: require("assets/img/sidebar-2.jpg"),
    color: "blue",
    bgColor: "black",
    hasImage: true,
    fixedClasses: "dropdown",
    logo: require("assets/img/logo-white.svg")
  };
 
  
  
  render() {
    const { classes, ...rest } = this.props;
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive
      });
    return (
        
         <div>
             <TranslatorProvider translations={require('assets/translate/fr.json')}>
             <Router history={hist}>
              <Switch>
              <Redirect from="/" to="/admin" />
              </Switch>
          </Router>
          </TranslatorProvider>
          <div><AdminHeader/></div>
          <div> estamos entrando el futuro</div>
         </div>
          
          
    );
  }
}

RTL.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(rtlStyle)(RTL);
