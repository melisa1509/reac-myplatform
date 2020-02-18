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
import { Apps, Message, Face } from "@material-ui/icons";

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
      if( roles.includes("ROLE_ADMIN") ){
        links = [
          <Link to={'/user'} className={classes.dropdownLink}>
            Participants
          </Link>,
          <Link to={'/course/new'} className={classes.dropdownLink}>
            Course
          </Link>,
          <Link to={'/student'} className={classes.dropdownLink}>
            Student
          </Link>,
          <Link to={'/profile'} className={classes.dropdownLink}>
            Profile
          </Link>,
          <a
            href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
            target="_blank"
            className={classes.dropdownLink}
          >
            Documentation
          </a>
        ]
      }
      else if( roles.includes("ROLE_STUDENT") ){
        links = [
          <Link to="/" className={classes.dropdownLink}>
            All componentes
          </Link>,
          <Link to={'/age'} className={classes.dropdownLink}>
            AgesStudent
          </Link>,
          <a
            href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
            target="_blank"
            className={classes.dropdownLink}
          >
            Documentation
          </a>
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
             Messages <Message color="danger" className={classes.icons} /> 
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

