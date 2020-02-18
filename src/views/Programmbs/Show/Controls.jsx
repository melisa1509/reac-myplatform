import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { editRevisionProgrammbs } from "actions/programmbsActions.jsx";

import { translate } from "react-translate";


const styles = {
  cardTitleCenter:{
    textAlign: "center"
  },
  cardCategory:{
    textAlign: "center"
  },
  verticalSpace:{
    paddingBottom: "30px"
  }
};


class Controls extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleSaveRevision = this.handleSaveRevision.bind(this);
  }

  handleSaveRevision(){
    this.props.dispatchEditRevisionProgrammbs();
  }
 

  render() {
    const { classes, programmbs } = this.props;
    let { t } = this.props;
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={12}>
            <GridContainer justify="center">
                <Button color="warning" size="sm" onClick={this.loginClick}>
                    {t("button.approve_this_section")}
                </Button>
            </GridContainer>
            <GridContainer justify="center" className={ classes.verticalSpace }>
                <Button color="info" size="sm" onClick={this.handleSaveRevision}>
                    {t("button.save_revision")}
                </Button>
                {" "}
                <Button color="danger" size="sm" onClick={this.saveClick}>
                    {t("button.send_correction")}
                </Button>
                <Button color="defaul" size="sm" onClick={this.loginClick}>
                    {t("button.certificate_attendance")}
                </Button>
                {" "}
                <Button color="success" size="sm" onClick={this.saveClick}>
                    {t("button.approved")}
                </Button>
                
            </GridContainer>
        </GridItem>
      </GridContainer>
    );
  }
}

Controls.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({ 
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchEditRevisionProgrammbs: () => dispatch( editRevisionProgrammbs() )
});


const ConstrolsComponent = translate('provider')(withStyles(styles)(Controls));
export default connect(mapStateToProps, mapDispatchToPropsActions)(ConstrolsComponent);