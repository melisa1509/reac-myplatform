import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { store } from "store";
import { Field, reduxForm } from 'redux-form';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

// core components
import SuccessBold from "components/Typography/SuccessBold.jsx";
import MutedText from "components/Typography/Muted.jsx";
import Controls from './Controls.jsx';
import RevisionForm from './RevisionForm.jsx';

import { translate } from "react-translate";


const styles = {
  cardTitleCenter:{
    textAlign: "center"
  }, 
};


class PriceTab extends React.Component {

  
  render() {
    const { classes, programmbs } = this.props;
    let { t } = this.props;
    return (
        <Card >
          <CardBody>
            <h3 className={classes.cardTitleCenter} >{t("title.price")}</h3>
            <br/>
            <SuccessBold>
              {t("question.price1")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programmbs.price1}
            </MutedText>
            <br/>
            <SuccessBold>
              {t("question.price2")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programmbs.price2}
            </MutedText>
            <br/>
            <SuccessBold>
              {t("question.price3")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programmbs.price3}
            </MutedText>
            <br/>
            <SuccessBold>
              {t("question.price4")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programmbs.price4}
            </MutedText>
            <br/>
            <RevisionForm name="revisionprice" labelText={t("label.revision_price")+ " *"} />
            <br/>
            <Controls/>
          </CardBody>
        </Card>
    );
  }
}

PriceTab.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({ 
  programmbs: state.programmbsReducer.programmbs
});

const mapDispatchToPropsActions = dispatch => ({
  
});


const PriceTabComponent = translate('provider')(withStyles(styles)(PriceTab));
export default connect(mapStateToProps, mapDispatchToPropsActions)(PriceTabComponent);