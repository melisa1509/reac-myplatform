import React from "react";
import PropTypes from "prop-types";
import { translate } from 'react-switch-lang';

// react component for creating dynamic tables
import { connect } from "react-redux";
import { newCourse } from "actions/courseActions.jsx";
import { store } from "store";
import { Editor } from '@tinymce/tinymce-react';


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import LanguageSelect from "views/Select/LanguageSelect.jsx";
import StateSelect from "views/Select/StateSelect.jsx";
// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

import { verifyChange } from "assets/validation/index.jsx";
import { createBrowserHistory } from "history";
import { withRouter } from 'react-router-dom';


const history = createBrowserHistory();

const style = {
    infoText: {
      fontWeight: "300",
      margin: "10px 0 30px",
      textAlign: "center"
    },
    inputAdornmentIcon: {
      color: "#555"
    },
    choiche: {
      textAlign: "center",
      cursor: "pointer",
      marginTop: "20px"
    },
    ...customSelectStyle,
    ...validationFormsStyle
};




class NewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // register form
            registerEmail: "",
            registerEmailState: "",
            registerPassword: "",
            registerPasswordState: "",
            registerConfirmPassword: "",
            registerConfirmPasswordState: "",
            registerCheckbox: false,
            registerCheckboxState: "",
            // login form
            loginEmail: "",
            loginEmailState: "",
            loginPassword: "",
            loginPasswordState: "",
            name: "",
            nameState: "",
            // type validation
            required: "",
            requiredState: "",
            typeEmail: "",
            typeEmailState: "",
            number: "",
            numberState: "",
            url: "",
            urlState: "",
            equalTo: "",
            whichEqualTo: "",
            equalToState: "",
            // range validation
            minLength: "",
            minLengthState: "",
            maxLength: "",
            maxLengthState: "",
            range: "",
            rangeState: "",
            minValue: "",
            minValueState: "",
            maxValue: "",
            maxValueState: "",

            courseName:"",
            courseNameState:"",
            courseDescription:"",
            courseDescriptionState:"",

            // Select
            simpleSelect: "",
            desgin: false,
            code: false,
            develop: false
        };
        this.registerClick = this.registerClick.bind(this);
        this.loginClick = this.loginClick.bind(this);
        this.saveClick = this.saveClick.bind(this);
        this.rangeClick = this.rangeClick.bind(this);
      }
     
      registerClick() {
        if (this.state.registerEmailState === "") {
          this.setState({ registerEmailState: "error" });
        }
        if (this.state.registerPasswordState === "") {
          this.setState({ registerPasswordState: "error" });
        }
        if (this.state.registerConfirmPasswordState === "") {
          this.setState({ registerConfirmPasswordState: "error" });
        }
        if (this.state.registerCheckboxState === "") {
          this.setState({ registerCheckboxState: "error" });
        }
      }
      loginClick() {
        if (this.state.loginEmailState === "") {
          this.setState({ loginEmailState: "error" });
        }
        if (this.state.loginPasswordState === "") {
          this.setState({ loginPasswordState: "error" });
        }
        if (this.state.nameState === "") {
          this.setState({ nameState: "error" });
        }
      }
      saveClick() {
        if (this.state.courseNameState === "") {
          this.setState({ courseNameState: "error" });
        }
        if (this.state.courseDescriptionState === "") {
          this.setState({ courseDescriptionState: "error" });
        }
        if(this.state.courseNameState === "success" && this.state.courseDescriptionState === "success"){
          const params = {
            courseName: this.state.courseName,
            courseDescription: this.state.courseDescription,
            courseLanguage: "En",
            courseState: "state_draft",
            redirect: this.props.history,
          }
          const stateRedux = store.getState();
        this.props.dispatchNewCourse(params);
        //this.props.history.push("/age");
        }
      }

      rangeClick() {
        if (this.state.minLengthState === "") {
          this.setState({ minLengthState: "error" });
        }
        if (this.state.maxLengthState === "") {
          this.setState({ maxLengthState: "error" });
        }
        if (this.state.rangeState === "") {
          this.setState({ rangeState: "error" });
        }
        if (this.state.minValueState === "") {
          this.setState({ minValueState: "error" });
        }
        if (this.state.maxValueState === "") {
          this.setState({ maxValueState: "error" });
        }
      }
    sendState() {
        return this.state;
    }
    handleSimple = event => {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    isValidated() {
        return true;
    }

    componentWillUnmount() {
      localStorage.setItem('someSavedState', JSON.stringify(this.state))
    }

    componentWillMount() {
      const rehydrate = JSON.parse(localStorage.getItem('someSavedState'))
      this.setState(rehydrate)
    }


    render() {
        const { classes, styles } = this.props;
        let { t } = this.props;
        const login = "es";
        
        
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                  <Editor
                    initialValue="<p>This is the initial content of the editor</p>"
                    init={{
                      height: 500,
                      menubar: 'file edit view insert format tools table help',
                      plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
                      toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
                      toolbar_sticky: true,
                      autosave_ask_before_unload: true,
                      autosave_interval: '30s',
                      autosave_prefix: '{path}{query}-{id}-',
                      autosave_restore_when_empty: false,
                      autosave_retention: '2m',
                      image_advtab: true,
                    }}
                    onEditorChange={this.handleEditorChange}
                  />
                  </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
                
        );
    }
}

const mapStateToProps = state => ({ 
      
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchNewCourse: params => dispatch(newCourse(params)), 
});

const NewFormComponent = translate(withStyles(style)(NewForm));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(NewFormComponent));



