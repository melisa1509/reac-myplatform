import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-translate";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { updateLanguageSelect } from "actions/selectActions.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";


// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";



const style = {
    ...customSelectStyle,
    ...validationFormsStyle
};


class LanguageSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            // Select
            simpleSelect: "",
            desgin: false,
            code: false,
            develop: false
        };
        
    }
     
      
    sendState() {
        return this.state;
    }
    handleSimple = event => {
        this.setState({ [event.target.name]: event.target.value });
        this.props.dispatchUpdateLanguageSelect(event.target.value);
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    isValidated() {
        return true;
    }


    render() {
        const { classes, input } = this.props;
        let { t } = this.props;
        console.log(this.props);
        
        return (
                <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                    >
                        {t("label.language")}
                    </InputLabel>
                    <Select
                        MenuProps={{
                            className: classes.selectMenu
                        }}
                        classes={{
                            select: classes.select
                        }}
                            value={input.value}
                            onChange={this.handleSimple , input.onChange}
                            inputProps={{
                            name: "simpleSelect",
                            id: "simple-select"
                        }}
                    >
                        <MenuItem
                            disabled
                            classes={{
                                root: classes.selectMenuItem
                            }}
                            value="-1"
                        >
                            {t("label.chose_language")}
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                            }}
                            value="en"
                        >
                            {t("label.english")}
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                            }}
                            value="es"
                        >
                            {t("label.spanish")}
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                            }}
                            value="fr"
                        >
                            {t("label.french")}
                        </MenuItem>
                        <MenuItem
                            classes={{
                                root: classes.selectMenuItem,
                                selected: classes.selectMenuItemSelected
                            }}
                            value="pr"
                        >
                            {t("label.portuguese")}
                        </MenuItem>
                    </Select>
                </FormControl>
        );
    }
}

const mapStateToProps = state => ({ 
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchUpdateLanguageSelect: key => dispatch( updateLanguageSelect(key) ), 
});

const LanguageSelectComponent = translate('provider')(withStyles(style)(LanguageSelect));
export default connect(mapStateToProps, mapDispatchToPropsActions)(LanguageSelectComponent);



