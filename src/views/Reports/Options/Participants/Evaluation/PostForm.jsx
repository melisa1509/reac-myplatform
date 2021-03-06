import React from "react";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";

// core components
import CustomRadioRedux from 'components/CustomRadio/CustomRadioRedux.jsx';
import CustomRadioReduxDisabled from 'components/CustomRadio/CustomRadioReduxDisabled.jsx';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SweetAlert from "react-bootstrap-sweetalert";
import Button from "components/CustomButtons/Button.jsx";

// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import styles from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx";
import { deleteSuccessful } from "actions/generalActions.jsx";
import { withRouter } from 'react-router-dom';
import { sendProject, evaluationPost  } from "actions/programmbsActions.jsx";

const style = {
    scroll: {
      overflowY: "auto",
      overflowX: "hidden",
      display: "block",
      width: "460px",
      height: "400px",
      scrollBehavior: "smooth",
      alignItems: "left",
      justifyContent: "left",
      textAlign: "left"
    },
    infoText: {
      fontWeight: "500",
      textAlign: "left"
    },
    inputAdornmentIcon: {
      color: "#555"
    },
    choiche: {
      textAlign: "left",
      cursor: "pointer",
      marginTop: "20px"
    },
    label:{
      fontWeight: "500",
      color:"success",
    },
    ...validationFormsStyle,
    ...styles
};


class PostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }   
  
    render() {
        const { classes, student_ambassador_list} = this.props;
        let { t } = this.props;  
        var program=""
        const name_ambassador= student_ambassador_list.map((prop, key) => {
          if(this.props.match.params.id==prop.id){
            program= prop.studentgroup.group.program
          }
        })
          
        const radios = {         
          options:[
            { label: t("label_evaluation_question2_option1"),     val: "option1"  },
            { label: t("label_evaluation_question2_option2"),     val: "option2"  },
            { label: t("label_evaluation_question2_option3"),     val: "option3"  },
            { label: t("label_evaluation_question2_option4"),     val: "option4"  },
          ]
        }
        const option1 = {         
          options:[
            { label: t("label_evaluation_question1_option1"),     val: "option1"  },
            { label: t("label_evaluation_question1_option2"),     val: "option2"  },
          ]
        }
        return (
          <GridContainer justify="left">
            <GridItem xs={12} sm={12} md={12}>
              <div className={classes.disabledCustomRadioRedux}>       
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}> 
                    <InputLabel className={classes.label}>
                    { program === "option.program4" ? t("question_jr_evaluation_question1") : t("question_evaluation_question1")}
                    </InputLabel>
                    <GridContainer>
                    <GridItem xs={3} sm={3} md={6}>     
                      <Field
                        component={CustomRadioReduxDisabled}
                        name="question1"
                        data={option1}
                      />      
                    </GridItem> 
                    <GridItem xs={3} sm={3} md={6}> 
                      <Field
                        component={CustomRadioReduxDisabled}
                        name="postquestion1"
                        data={option1}
                      /> 
                    </GridItem> 
                    </GridContainer>  
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}> 
                    <InputLabel className={classes.label}>
                    { program === "option.program4" ? t("question_jr_evaluation_question2") : t("question_evaluation_question2")}
                    </InputLabel>
                    <GridContainer>
                    <GridItem xs={3} sm={3} md={6}> 
                      <Field
                          component={CustomRadioReduxDisabled}
                          name="question2"
                          data={radios}
                       /> 
                    </GridItem> 
                    <GridItem xs={3} sm={3} md={6}> 
                      <Field
                        component={CustomRadioReduxDisabled}
                        name="postquestion2"
                        data={radios}
                      /> 
                    </GridItem> 
                    </GridContainer>              
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}> 
                    <InputLabel className={classes.label}>
                    { program === "option.program4" ? t("question_jr_evaluation_question3") : t("question_evaluation_question3")}
                    </InputLabel>
                    <GridContainer>
                    <GridItem xs={3} sm={3} md={6}> 
                      <Field
                          component={CustomRadioReduxDisabled}
                          name="question3"
                          data={radios}
                       /> 
                    </GridItem>
                    <GridItem xs={3} sm={3} md={6}> 
                      <Field
                        disabled
                        component={CustomRadioReduxDisabled}
                        name="postquestion3"
                        data={radios}
                      />    
                    </GridItem>  
                    </GridContainer>       
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}> 
                    <InputLabel className={classes.label}>
                    { program === "option.program4" ? t("question_jr_evaluation_question4") : t("question_evaluation_question4")}
                    </InputLabel>
                    <GridContainer>
                      <GridItem xs={3} sm={3} md={6}> 
                      <Field
                          component={CustomRadioReduxDisabled}
                          name="question4"
                          data={radios}
                       /> 
                      </GridItem>
                      <GridItem xs={3} sm={3} md={6}> 
                      <Field
                        component={CustomRadioReduxDisabled}
                        name="postquestion4"
                        data={radios}
                      /> 
                    </GridItem>       
                    </GridContainer>   
                  </GridItem> 
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}> 
                    <InputLabel className={classes.label}>
                    { program === "option.program4" ? t("question_jr_evaluation_question5") : t("question_evaluation_question5")}
                    </InputLabel>
                    <GridContainer>
                      <GridItem xs={3} sm={3} md={6}>
                      <Field
                        disabled
                        component={CustomRadioReduxDisabled}
                        name="question5"
                        data={radios}
                      /> 
                      </GridItem>
                      <GridItem xs={3} sm={3} md={6}> 
                      <Field
                        component={CustomRadioReduxDisabled}
                        name="postquestion5"
                        data={radios}
                      /> 
                    </GridItem>       
                    </GridContainer>         
                  </GridItem> 
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}> 
                    <InputLabel className={classes.label}>
                    { program === "option.program4" ? t("question_jr_evaluation_question6") : t("question_evaluation_question6")}
                    </InputLabel>
                    <GridContainer>
                    <GridItem xs={3} sm={3} md={6}>
                    <Field
                      component={CustomRadioReduxDisabled}
                      name="question6"
                      data={radios}
                    />
                    </GridItem>
                    <GridItem xs={3} sm={3} md={6}> 
                      <Field
                        component={CustomRadioReduxDisabled}
                        name="postquestion6"
                        data={radios}
                      /> 
                    </GridItem>       
                    </GridContainer>            
                  </GridItem> 
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}> 
                    <InputLabel className={classes.label}>
                      { program === "option.program4" ? t("question_jr_evaluation_question7") : t("question_evaluation_question7")}
                    </InputLabel>
                      <GridContainer>
                        <GridItem xs={3} sm={3} md={6}>
                          <Field
                            component={CustomRadioReduxDisabled}
                            name="question7"
                            data={radios}
                          /> 
                        </GridItem>
                        <GridItem xs={3} sm={3} md={6}> 
                          <Field
                            component={CustomRadioReduxDisabled}
                            name="postquestion7"
                            data={radios}
                          /> 
                        </GridItem>       
                      </GridContainer>          
                  </GridItem> 
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}> 
                    <InputLabel className={classes.label}>
                      { program === "option.program4" ? t("question_jr_evaluation_question8") : t("question_evaluation_question8")}
                    </InputLabel>
                      <GridContainer>
                        <GridItem xs={3} sm={3} md={6}>
                          <Field
                            component={CustomRadioReduxDisabled}
                            name="question8"
                            data={radios}
                          /> 
                        </GridItem>
                        <GridItem xs={3} sm={3} md={6}> 
                          <Field
                            component={CustomRadioReduxDisabled}
                            name="postquestion8"
                            data={radios}
                          /> 
                        </GridItem>       
                      </GridContainer>          
                  </GridItem> 
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}> 
                    <InputLabel className={classes.label}>
                    { program === "option.program4" ? t("question_jr_evaluation_question9") : t("question_evaluation_question9")}
                    </InputLabel>
                      <GridContainer>
                        <GridItem xs={3} sm={3} md={6}>
                          <Field
                            component={CustomRadioReduxDisabled}
                            name="question8"
                            data={radios}
                          /> 
                        </GridItem>
                        <GridItem xs={3} sm={3} md={6}> 
                          <Field
                            component={CustomRadioReduxDisabled}
                            name="postquestion8"
                            data={radios}
                          /> 
                        </GridItem>       
                      </GridContainer>          
                  </GridItem> 
                </GridContainer>
                </div>
                </GridItem>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <center>
                      <Link to={""}>
                        <Button color="success" size="sm">
                          {t("button_return_to_list")}
                        </Button>
                      </Link>
                    </center>
                  </GridItem>
              </GridContainer>
          </GridContainer>
                
        );
    }
}

PostForm = reduxForm({
  form: 'postform', 
  enableReinitialize: true
})(PostForm);


PostForm = connect(
  state => ({
    evaluation_post: state.evaluationReducer.evaluation_post,
    student_ambassador_list: state.studentReducer.student_ambassador_list,
  }),
  { dispatchEvaluationPost: evaluationPost },
)(PostForm);

export default  withRouter(translate(withStyles(style)(PostForm)));






