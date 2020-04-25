import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { store } from "store";
import { Field, reduxForm } from 'redux-form';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import CustomRadio from 'components/CustomRadio/CustomRadio.jsx';
import CustomCheckbox from 'components/CustomCheckbox/CustomCheckbox.jsx';
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

// core components
import SuccessBold from "components/Typography/SuccessBold.jsx";
import MutedText from "components/Typography/Muted.jsx";
import Controls from './Controls.jsx';
import RevisionForm from './RevisionForm.jsx';
import RenderCell from './RenderCell.jsx';
import CustomRenderCell from './CustomRenderCell.jsx';

import { translate } from "react-translate";


const styles = {
  cardTitleCenter:{
    textAlign: "center"
  }, 
  thBackgroundColor:{
    backgroundColor: "#4caf50",
    color: "#fff",
    fontWeight: "bold"
  },
  tdBackgroundColor:{
    backgroundColor: "#4caf5091",
    paddingLeft: "20px",
    color: "#495057",
    fontWeight: "bold"
  },
  verticalCenter: {
    verticalAlign: "middle",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  tdTable: {
    border: "1px solid #49505794",
    boxSizing: "border-box",
  },
  borderSpacing:{
    borderSpacing: "0px",
    borderCollapse: "collapse"
  },
  inputTable:{
    border: "0px",
    color: "#495057",
    padding: "10px",
  },
  tdBold:{
    fontWeight: "bold",
    paddingLeft: "20px",
    paddingRight: "20px"
  },
  textAlignRight:{
    textAlign: "Right"
  }
};




class GenerateGroupsTab extends React.Component {

  
  render() {
    const { classes, programsa } = this.props;
    let { t } = this.props;
    const optionsGenerateGroups1 = {
         value: programsa.generate_groups1,
         options:[
            { label: t("label.generateGroup1.option1") },
            { label: t("label.generateGroup1.option2") },
            { label: t("label.generateGroup1.option3") },
            { label: t("label.generateGroup1.option4") }
         ]
    }

    const optionsGenerateGroups3 = {
        value: programsa.generate_groups3,
        options:[
           { label: t("label.generateGroup3.option1") },
           { label: t("label.generateGroup3.option2") },
           { label: t("label.generateGroup3.option3") },
        ]
    }

    
    
    return (
        <Card >
          <CardBody>
            <h3 className={classes.cardTitleCenter} >{t("title.generate_groups")}</h3>
            <br/>
            <SuccessBold>
              {t("question.generateGroups1")}
            </SuccessBold>
            <br/>
            <CustomCheckbox data={optionsGenerateGroups1} />
            <br/>
            <SuccessBold>
              {t("question.generateGroups2")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programsa.generate_groups2}
            </MutedText>
            <br/>
            <SuccessBold>
              {t("question.generateGroups3")}
            </SuccessBold>
            <br/>
            <CustomCheckbox data={optionsGenerateGroups3} />
            <br/>
            <SuccessBold>
              {t("question.generateGroups4")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programsa.generate_groups4}
            </MutedText>
            <br/>
            <SuccessBold>
              {t("question.generateGroups5")}
            </SuccessBold>
            {
              programsa.generate_groups5.map((prop, key) => 
              <MutedText>
                {prop}
              </MutedText>
              )
            }
            <br/>
            <SuccessBold>
              {t("question.generateGroups6")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programsa.generate_groups6}
            </MutedText>
            <br/>
            <SuccessBold>
              {t("question.generateGroups7")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programsa.generate_groups7}
            </MutedText>
            <br/>
            <RevisionForm name="revisiongenerategroups" labelText={t("label.revision_generate_groups")} />
            <br/>
            <Controls/>
          </CardBody>
        </Card>
    );
  }
}

GenerateGroupsTab.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({ 
  programsa: state.programsaReducer.programsa
});

const mapDispatchToPropsActions = dispatch => ({
  
});


const GenerateGroupsTabComponent = translate('provider')(withStyles(styles)(GenerateGroupsTab));
export default connect(mapStateToProps, mapDispatchToPropsActions)(GenerateGroupsTabComponent);