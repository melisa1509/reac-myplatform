import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import SuccessBold from "components/Typography/SuccessBold.jsx";
import MutedText from "components/Typography/Muted.jsx";
import Controls from './Controls.jsx';
import RevisionForm from './RevisionForm.jsx';
import {optionQualityLife} from './OptionQualityLife.jsx';

import { translate } from "react-translate";


const styles = {
    cardTitleCenter:{
        textAlign: "center"
      },
    textareaProcess:{
        border: "0px",
        resize: "auto",
        height: "auto !important",
        lineHeight: "1.42857 !important",
        overflow: "auto",
        margin: "0",
        fontFamily: "inherit",
    }, 
};


class ProcessTab extends React.Component {

  render() {
    const { classes, programmbs } = this.props;
    let { t } = this.props;
    return (
        <Card>
          <CardBody>
            <h3 className={classes.cardTitleCenter} >{t("title.quality_life")}</h3>
            <br/>
            <SuccessBold>
                {t("label.quality")}
            </SuccessBold>
            <br/>
            <GridContainer justify="center" className={classes.cardTitleCenter}>
                <GridItem xs={12} sm={12} md={12}>
                  <svg width={550} height={30}>
                    <text id="qualityP1Text" x={230} y={16} fill="black" fontSize={15} fontWeight="bold" >{programmbs.quality_p1}</text>
                  </svg>
                
              <svg width={650} height={350}>
                <circle cx={275} cy={160} r={150} stroke="#8ba8a7" strokeWidth={1} fill="#c2cfd0" />
                <circle cx={275} cy={160} r={130} stroke="#8ba8a7" strokeWidth={1} fill="#c2cfd0" />
                <circle cx={275} cy={160} r={110} stroke="#8ba8a7" strokeWidth={1} fill="#c2cfd0" />
                <circle cx={275} cy={160} r={90} stroke="#8ba8a7" strokeWidth={1} fill="#ffffff" />
                <circle cx={275} cy={160} r={40} stroke="#8ba8a7" strokeWidth={1} fill="#ffffff" />
                <line x1={275} y1={10} x2={275} y2={310} style={{
                      stroke: '#a0a0a0',
                      strokeWidth: 1
                    }} />
                <line x1={125} y1={160} x2={425} y2={160} style={{
                      stroke: '#a0a0a0',
                      strokeWidth: 1
                    }} />
                <line x1={381} y1={266} x2={169} y2={54} style={{
                      stroke: '#a0a0a0',
                      strokeWidth: 1
                    }} />
                <line x1={169} y1={266} x2={381} y2={54} style={{
                      stroke: '#a0a0a0',
                      strokeWidth: 1
                    }} />
                <rect x={269} y={4} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={272} y={12} fill="#21393c" fontSize={8} fontWeight="bold">5</text>
                <rect x={269} y={24} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={272} y={32} fill="#21393c" fontSize={8} fontWeight="bold">4</text>
                <rect x={269} y={44} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={272} y={52} fill="#21393c" fontSize={8} fontWeight="bold">3</text>
                <rect x={269} y={64} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={272} y={72} fill="#21393c" fontSize={8} fontWeight="bold">2</text>
                <rect x={269} y={114} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={272} y={122} fill="#21393c" fontSize={8} fontWeight="bold">1</text>
                <rect x={298} y={127} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={301} y={135} fill="#21393c" fontSize={8} fontWeight="bold">1</text>
                <rect x={333} y={92} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={336} y={100} fill="#21393c" fontSize={8} fontWeight="bold">2</text>
                <rect x={348} y={77} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={351} y={85} fill="#21393c" fontSize={8} fontWeight="bold">3</text>
                <rect x={362} y={63} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={365} y={71} fill="#21393c" fontSize={8} fontWeight="bold">4</text>
                <rect x={376} y={49} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={379} y={57} fill="#21393c" fontSize={8} fontWeight="bold">5</text>
                <rect x={309} y={154} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={312} y={162} fill="#21393c" fontSize={8} fontWeight="bold">1</text>
                <rect x={359} y={154} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={362} y={162} fill="#21393c" fontSize={8} fontWeight="bold">2</text>
                <rect x={379} y={154} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={382} y={162} fill="#21393c" fontSize={8} fontWeight="bold">3</text>
                <rect x={399} y={154} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={402} y={162} fill="#21393c" fontSize={8} fontWeight="bold">4</text>
                <rect x={419} y={154} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={422} y={162} fill="#21393c" fontSize={8} fontWeight="bold">5</text>
                <rect x={298} y={183} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={301} y={191} fill="#21393c" fontSize={8} fontWeight="bold">1</text>
                <rect x={333} y={218} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={336} y={226} fill="#21393c" fontSize={8} fontWeight="bold">2</text>
                <rect x={347} y={232} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={350} y={240} fill="#21393c" fontSize={8} fontWeight="bold">3</text>
                <rect x={362} y={247} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={365} y={255} fill="#21393c" fontSize={8} fontWeight="bold">4</text>
                <rect x={376} y={261} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={379} y={269} fill="#21393c" fontSize={8} fontWeight="bold">5</text>
                <rect x={269} y={194} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={272} y={202} fill="#21393c" fontSize={8} fontWeight="bold">1</text>
                <rect x={269} y={244} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={272} y={252} fill="#21393c" fontSize={8} fontWeight="bold">2</text>
                <rect x={269} y={264} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={272} y={272} fill="#21393c" fontSize={8} fontWeight="bold">3</text>
                <rect x={269} y={284} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={272} y={292} fill="#21393c" fontSize={8} fontWeight="bold">4</text>
                <rect x={269} y={304} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={272} y={312} fill="#21393c" fontSize={8} fontWeight="bold">5</text>
                <rect x={243} y={182} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={246} y={190} fill="#21393c" fontSize={8} fontWeight="bold">1</text>
                <rect x={207} y={218} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={210} y={226} fill="#21393c" fontSize={8} fontWeight="bold">2</text>
                <rect x={193} y={232} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={196} y={240} fill="#21393c" fontSize={8} fontWeight="bold">3</text>
                <rect x={178} y={247} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={181} y={255} fill="#21393c" fontSize={8} fontWeight="bold">4</text>
                <rect x={164} y={261} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={167} y={269} fill="#21393c" fontSize={8} fontWeight="bold">5</text>
                <rect x={229} y={154} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={232} y={162} fill="#21393c" fontSize={8} fontWeight="bold">1</text>
                <rect x={179} y={154} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={182} y={162} fill="#21393c" fontSize={8} fontWeight="bold">2</text>
                <rect x={159} y={154} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={162} y={162} fill="#21393c" fontSize={8} fontWeight="bold">3</text>
                <rect x={139} y={154} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={142} y={162} fill="#21393c" fontSize={8} fontWeight="bold">4</text>
                <rect x={119} y={154} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={122} y={162} fill="#21393c" fontSize={8} fontWeight="bold">5</text>
                <rect x={242} y={127} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={245} y={135} fill="#21393c" fontSize={8} fontWeight="bold">1</text>
                <rect x={207} y={92} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={210} y={100} fill="#21393c" fontSize={8} fontWeight="bold">2</text>
                <rect x={193} y={78} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={196} y={86} fill="#21393c" fontSize={8} fontWeight="bold">3</text>
                <rect x={178} y={63} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={181} y={71} fill="#21393c" fontSize={8} fontWeight="bold">4</text>
                <rect x={164} y={49} width={10} height={10} style={{
                      fill: '#dae0db',
                      strokeWidth: 1,
                      stroke: '#325457'
                    }} />
                <text x={167} y={57} fill="#21393c" fontSize={8} fontWeight="bold">5</text>
                <polygon id="red_line" points={programmbs.quality_q1 + " "+ programmbs.quality_q2 + " "+ programmbs.quality_q3 + " "+ programmbs.quality_q4 + " "+ programmbs.quality_q5 + " "+ programmbs.quality_q6 + " "+ programmbs.quality_q7 + " "+ programmbs.quality_q8} style={{
                      fill: 'none',
                      stroke: 'red',
                      strokeWidth: 3,
                      fillRule: 'evenodd'
                    }} />
                <text id="qualityP4Text" x={424} y={266} fill="black" fontSize={14} fontWeight="bold">{programmbs.quality_p4}</text>
                <text id="qualityP3Text" x={454} y={159} fill="black" fontSize={14} fontWeight="bold">{programmbs.quality_p3}</text>
                <text id="qualityP2Text" x={424} y={52} fill="black" fontSize={14} fontWeight="bold">{programmbs.quality_p2}</text>
                <text id="qualityP6Text" x={30} y={266} fill="black" fontSize={14} fontWeight="bold">{programmbs.quality_p6}</text>
                <text id="qualityP7Text" x={0} y={159} fill="black" fontSize={14} fontWeight="bold">{programmbs.quality_p7}</text>
                <text id="qualityP8Text" x={30} y={52} fill="black" fontSize={14} fontWeight="bold">{programmbs.quality_p8}</text>
                <text id="qualityP5Text" x={230} y={342} fill="black" fontSize={14} fontWeight="bold">{programmbs.quality_p5}</text>
              </svg>
           
              </GridItem>
          </GridContainer>
          <br/>
          <GridContainer className={classes.cardTitleCenter}>
              <GridItem xs={12} sm={12} md={12}>
                <SuccessBold >
                  {t("question.qualityp1")}
                </SuccessBold>
              </GridItem>
          </GridContainer>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_p1}
                    </MutedText>
                    <MutedText>
                      {t(optionQualityLife(programmbs.quality_q1))}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <SuccessBold>
            {t("question.qualityg1")}
          </SuccessBold>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_g1}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <GridContainer className={classes.cardTitleCenter}>
              <GridItem xs={12} sm={12} md={12}>
                <SuccessBold >
                  {t("question.qualityp2")}
                </SuccessBold>
              </GridItem>
          </GridContainer>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_p2}
                    </MutedText>
                    <MutedText>
                      {t(optionQualityLife(programmbs.quality_q2))}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <SuccessBold>
            {t("question.qualityg2")}
          </SuccessBold>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_g3}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <GridContainer className={classes.cardTitleCenter}>
              <GridItem xs={12} sm={12} md={12}>
                <SuccessBold >
                  {t("question.qualityp3")}
                </SuccessBold>
              </GridItem>
          </GridContainer>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_p3}
                    </MutedText>
                    <MutedText>
                      {t(optionQualityLife(programmbs.quality_q3))}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <SuccessBold>
            {t("question.qualityg3")}
          </SuccessBold>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_g3}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <GridContainer className={classes.cardTitleCenter}>
              <GridItem xs={12} sm={12} md={12}>
                <SuccessBold >
                  {t("question.qualityp4")}
                </SuccessBold>
              </GridItem>
          </GridContainer>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_p4}
                    </MutedText>
                    <MutedText>
                      {t(optionQualityLife(programmbs.quality_q4))}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <SuccessBold>
            {t("question.qualityg4")}
          </SuccessBold>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_g4}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <GridContainer className={classes.cardTitleCenter}>
              <GridItem xs={12} sm={12} md={12}>
                <SuccessBold >
                  {t("question.qualityp5")}
                </SuccessBold>
              </GridItem>
          </GridContainer>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_p5}
                    </MutedText>
                    <MutedText>
                      {t(optionQualityLife(programmbs.quality_q5))}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <SuccessBold>
            {t("question.qualityg5")}
          </SuccessBold>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_g5}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <GridContainer className={classes.cardTitleCenter}>
              <GridItem xs={12} sm={12} md={12}>
                <SuccessBold >
                  {t("question.qualityp6")}
                </SuccessBold>
              </GridItem>
          </GridContainer>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_p6}
                    </MutedText>
                    <MutedText>
                      {t(optionQualityLife(programmbs.quality_q6))}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <SuccessBold>
            {t("question.qualityg6")}
          </SuccessBold>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_g6}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <GridContainer className={classes.cardTitleCenter}>
              <GridItem xs={12} sm={12} md={12}>
                <SuccessBold >
                  {t("question.qualityp7")}
                </SuccessBold>
              </GridItem>
          </GridContainer>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_p7}
                    </MutedText>
                    <MutedText>
                      {t(optionQualityLife(programmbs.quality_q7))}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <SuccessBold>
            {t("question.qualityg7")}
          </SuccessBold>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_g7}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <GridContainer className={classes.cardTitleCenter}>
              <GridItem xs={12} sm={12} md={12}>
                <SuccessBold >
                  {t("question.qualityp8")}
                </SuccessBold>
              </GridItem>
          </GridContainer>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.quality_p8}
                    </MutedText>
                    <MutedText>
                      {t(optionQualityLife(programmbs.quality_q8))}
                    </MutedText>
                </GridItem>
          </GridContainer>
          <br/>
          <SuccessBold>
            {t("question.qualityg8")}
          </SuccessBold>
          <GridContainer >
                <GridItem xs={12} sm={12} md={12}>
                    <MutedText>
                      {programmbs.qualityg8}
                    </MutedText>
                </GridItem>
          </GridContainer>

            <RevisionForm name="revisionquality" labelText={t("label.revision_quality")+ " *"}/>
            <Controls/>
          </CardBody>
        </Card>
    );
  }
}

ProcessTab.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({ 
  programmbs: state.programmbsReducer.programmbs
});

const mapDispatchToPropsActions = dispatch => ({
});


const ProcessTabComponent = translate('provider')(withStyles(styles)(ProcessTab));
export default connect(mapStateToProps, mapDispatchToPropsActions)(ProcessTabComponent);