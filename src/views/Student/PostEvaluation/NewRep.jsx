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
import PostForm from 'views/Student/PostEvaluation/PostForm.jsx';
import Logo from "assets/img/logo_interweave.png";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { translate } from 'react-switch-lang';
import { withRouter } from 'react-router-dom';

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  } 
};



class NewRep extends React.Component {
  
  render() {
    const { classes, styles, active_user } = this.props;
    let { t } = this.props;
    const initialValuePre= {  
        question1:active_user.evaluation.question1,
        question2:active_user.evaluation.question2,
        question3:active_user.evaluation.question3,  
        question4:active_user.evaluation.question4,  
        question5:active_user.evaluation.question5,  
        question6:active_user.evaluation.question6,  
        question7:active_user.evaluation.question7, 
        postquestion1:"option2",
        postquestion2:"option1",
        postquestion3:"option1",
        postquestion4:"option1",
        postquestion5:"option1",
        postquestion6:"option1",
        postquestion7:"option1",
        postquestion8:"option1",
        postquestion9:"option1"    
    }
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="info">
            <center>
             <h4 className={classes.cardTitle}>{t("title_pre_evaluation")+ " "+ "/"+ " " + t("title_post_evaluation")}</h4>
             </center>
            </CardHeader>
            <CardBody>
                <PostForm initialValues={initialValuePre} />  
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

NewRep.propTypes = {
  classes: PropTypes.object,
};

const mapDispatchToPropsActions = dispatch => ({

});
const mapStateToProps = state => ({ 
  new_student: state.studentReducer.new_student,
  active_user: state.loginReducer.active_user, 
});

const NewRepComponent = translate(withStyles(styles)(NewRep));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(NewRepComponent));