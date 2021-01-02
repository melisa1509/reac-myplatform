import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import PerfectScrollbarStyle from 'react-perfect-scrollbar/dist/css/styles.css';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";


import mainPageStyle from "assets/jss/material-kit-react/views/mainPage.jsx";
import LoginRep from "./LoginRep.jsx";

import LanguageNavbar from "components/LanguageNavBar/LanguageNavbar.jsx";
import { setDefaultLanguage} from 'react-switch-lang';


const styles = {
  ...mainPageStyle,
  ...PerfectScrollbarStyle
};
setDefaultLanguage('en');

var userLang = navigator.language || navigator.userLanguage; 
var lang = userLang.split("-");

class Login extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {

    };
  }


  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <LanguageNavbar route={"/"}/>
        <div
          className={classes.main}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundColor: "#eee"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <LoginRep generalStyles={styles}/>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Login);
