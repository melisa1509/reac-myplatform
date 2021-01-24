import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import cx from "classnames";
import { BASE_URL } from 'constants/urlTypes';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";

// core components
import SuccessBold from "components/Typography/SuccessBold.jsx";
import MutedText from "components/Typography/Muted.jsx";
import footerStyle from "assets/jss/material-dashboard-pro-react/components/footerStyle";
import { getShowProgrammbs} from "actions/programmbsActions.jsx";

import { translate } from 'react-switch-lang';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";


const styles = {
  cardTitleCenter:{
    textAlign: "center"
  }, 
  ...footerStyle
};


class IndexTable extends React.Component {
  
  componentDidMount() {
    this.props.dispatchShowProgrammbs(this.props.match.params.id);      
  }

  render() {
    const { classes, programmbs, white } = this.props;
    let { t } = this.props;
    var anchor =
    classes.a +
    cx({
      [" " + classes.whiteColor]: white
    });
    return (
      <div>
          <br/>
            <SuccessBold>
              {t("question_history1")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programmbs.history1}
            </MutedText>
            <br/>
            <SuccessBold>
              {t("question_history2")}
            </SuccessBold>
            <br/>
            {
                  programmbs.history2 !== "undefined" ?
                  <a
                    href={BASE_URL +  "/web/file/"  + programmbs.history2}
                    target="_blank"
                  >
                      {t("label_download_file")}
                  </a>:
                  ""
                }
            <br/>
            <SuccessBold>
              {t("question_history4")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programmbs.history3}
            </MutedText>
             <br/>
              <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                <center>
                    <Link to={"/student/successStory/list"}>
                    <Button color="info" size="sm">
                    {t("button_return_to_list")}
                    </Button>
                    </Link>
                </center>
                </GridItem>
              </GridContainer>
      </div>
    );
  }
}

IndexTable.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({ 
  programmbs: state.programmbsReducer.programmbs
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowProgrammbs: key => dispatch(getShowProgrammbs(key)), 
  
});


const IndexTableComponent = translate(withStyles(styles)(IndexTable));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent));