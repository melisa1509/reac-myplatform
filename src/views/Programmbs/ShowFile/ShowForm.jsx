import React from "react";
import PropTypes from "prop-types";
import { translate } from "react-translate";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { getShowProgrammbs } from "actions/programmbsActions.jsx";
import { store } from "store";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { Link } from "react-router-dom";


// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

import { withRouter } from 'react-router-dom';


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




class ShowForm extends React.Component {

    componentDidMount() {
      this.props.dispatchShowProgrammbs(this.props.match.params.id);
    }


    render() {
        const { classes, programmbs } = this.props;
        let { t } = this.props;
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <center>
                  <h3 className={classes.cardTitleCenter} >{t("title.plan")}</h3>
                  <p></p>
                  <p className={classes.right}>
                    &copy; {1900 + new Date().getYear()}{" "}
                    Learn Management System{" "}
                    <a
                      href="https://interweavesolutions.org"
                      target="_blank"
                    >
                      Interweave Solutions International
                    </a>{" "}
                    team@interweavesolutions.org
                  </p>
              </center>
            
            <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                        <Link to={"/profile/edit/"}>
                          <Button color="info" size="sm">
                          {t("button.edit")}
                          </Button>
                        </Link>
                          {" "}
                        <Link to={"/profile/editpassword/"}>
                          <Button color="default" size="sm">
                          {t("button.change_password")}
                        </Button>
                        </Link>
                      </center>
                  </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        );
    }
}

const mapStateToProps = state => ({ 
      programmbs: state.programmbsReducer.programmbs,
      
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowProgrammbs: key => dispatch(getShowProgrammbs(key)), 
});

const ShowFormComponent = translate('provider')(withStyles(style)(ShowForm));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ShowFormComponent));



