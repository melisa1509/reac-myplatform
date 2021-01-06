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
import PostForm from 'views/Reports/Options/Participants/Evaluation/PostForm.jsx';
import Logo from "assets/img/logo_interweave.png";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { translate } from 'react-switch-lang';
import { withRouter } from 'react-router-dom';
import { showEvaluationPre } from "actions/evaluationActions";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  } 
};



class NewRep extends React.Component {

  componentDidMount() {
    this.props.dispatchShowEvaluationPre(this.props.match.params.id);
  }
  
  render() {
    const { classes, styles, show_evaluation} = this.props;
    let { t } = this.props;
    const initialValuePre= { 
      question1:show_evaluation.question1,
      question2:show_evaluation.question2,
      question3:show_evaluation.question3,  
      question4:show_evaluation.question4,  
      question5:show_evaluation.question5,  
      question6:show_evaluation.question6,  
      question7:show_evaluation.question7,  
      postquestion1:show_evaluation.postquestion1,
      postquestion2:show_evaluation.postquestion2,
      postquestion3:show_evaluation.postquestion3,
      postquestion4:show_evaluation.postquestion4,
      postquestion5:show_evaluation.postquestion5,
      postquestion6:show_evaluation.postquestion6,
      postquestion7:show_evaluation.postquestion7,
      postquestion8:show_evaluation.postquestion8,
      postquestion9:show_evaluation.postquestion9    
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
                <PostForm initialValues={initialValuePre}/>  
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
  dispatchShowEvaluationPre: (key) => dispatch( showEvaluationPre(key) )
});
const mapStateToProps = state => ({ 
  show_evaluation: state.evaluationReducer.show_evaluation,
  new_student: state.studentReducer.new_student,
  active_user: state.loginReducer.active_user, 
});

const NewRepComponent = translate(withStyles(styles)(NewRep));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(NewRepComponent));