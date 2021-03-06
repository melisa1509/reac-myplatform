import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import PerfectScrollbarStyle from 'react-perfect-scrollbar/dist/css/styles.css';

// core components
import Footer from "views/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";


import mainPageStyle from "assets/jss/material-kit-react/views/mainPage.jsx";
import ChangePasswordRep from 'views/User/NewPassword/ChangePassword/ChangePasswordRep.jsx';
import PerfectScrollbar from 'react-perfect-scrollbar';


const styles = {
  ...mainPageStyle,
  ...PerfectScrollbarStyle
};

class ChangePassword extends React.Component {
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
              <GridItem xs={8} sm={8} md={8}>
                <ChangePasswordRep generalStyles={styles}/>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ChangePassword);
