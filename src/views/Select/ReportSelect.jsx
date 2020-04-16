import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-translate";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { updateCountrySelect } from "actions/selectActions.jsx";
import { getReports } from "actions/reportActions.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import { store } from "store";


// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";



const style = {
    ...customSelectStyle,
    ...validationFormsStyle
};


class ReportSelect extends React.Component {
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
        this.props.dispatchUpdateCountrySelect(event.target.value);
        const reduxState = store.getState();
    };
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    isValidated() {
        return true;
    }
    
    render() {
        const { classes, input, report_list } = this.props;
        let { t } = this.props;
        
        return (
                <FormControl fullWidth className={classes.selectFormControl}>
                    <InputLabel
                        htmlFor="simple-select"
                        className={classes.selectLabel}
                    >
                        {t("label.country")}
                    </InputLabel>
                    <Select
                        MenuProps={{
                            className: classes.selectMenu
                        }}
                        classes={{
                            select: classes.select
                        }}
                            value={this.state.simpleSelect}
                            onChange={this.handleSimple}
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
                            {t("label.chose_country")}
                        </MenuItem>
                        {
                            report_list.topNumbers2.map( (prop, key ) => {
                                return(
                                    <MenuItem
                                        classes={{
                                            root: classes.selectMenuItem,
                                            selected: classes.selectMenuItemSelected
                                        }}
                                        value={prop.code}
                                    >
                                        {prop.country}
                                    </MenuItem>
                                )
                            })
                        }

                    </Select>
                </FormControl>
        );
    }
}

const mapStateToProps = state => ({ 
    report_list: state.reportReducer.report_list, 
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchUpdateCountrySelect: key => dispatch( updateCountrySelect(key) ), 
  dispatchGetReports: () => dispatch( getReports() )

});

const ReportSelectComponent = translate('provider')(withStyles(style)(ReportSelect));
export default connect(mapStateToProps, mapDispatchToPropsActions)(ReportSelectComponent);



