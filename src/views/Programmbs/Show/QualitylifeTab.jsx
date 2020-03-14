import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
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
            <h3 className={classes.cardTitleCenter} >{t("title.process")}</h3>
            <br/>
            <SuccessBold>
                {t("question.process1")}
            </SuccessBold>
            <br/>
            <div className="row ml-auto mr-auto">
    <div className="col-md-2">
    </div>
    <div className="col-md-8">
      <svg width={550} height={30}>
        <text id="qualityP1Text" x={230} y={16} fill="black" fontSize={15} fontWeight="bold" >{programmbs.quality_p1}</text>
      </svg>
    </div>
    <div className="col-md-2">
    </div>
  </div>
  <div className="row ml-auto mr-auto">
    <div className="col-md-2">
    </div>
    <div className="col-md-10">
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
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-5">
      <div className="form-group has-success">
        <label htmlFor="qualityP1">1. Priority #1 of your life</label>
        <input type="text" id="appbundle_programmbs_qualityP1" name="appbundle_programmbs[qualityP1]" maxLength={255} className="form-control" defaultValue="Eglise" />
      </div>
    </div>
    <div className="col-md-5">
      <div className="form-group has-success">
        <select id="appbundle_programmbs_qualityQ1" name="appbundle_programmbs[qualityQ1]" className="form-control quality"><option value="274,119">1. I am not happy with this area of my life.</option><option value="274,69">2. Sometimes I am not happy with this area of my life.</option><option value="274,49">3. Sometimes I am happy with this areas of my life.</option><option value="274,29" selected="selected">4. Normally, I am happy with the area of my life.</option><option value="274,9">5. I am very happy with this area of my life.</option></select>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-10">
      <div className="form-group has-success">
        <label htmlFor="qualityG1">Action steps for priority # 1</label>
        <div className="form-group"><textarea id="appbundle_programmbs_qualityG1" name="appbundle_programmbs[qualityG1]" className="form-control" defaultValue={"pas besoin de modification"} /></div>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-5">
      <div className="form-group has-success">
        <label htmlFor="qualityP1">2. Priority #2 of your life</label>
        <input type="text" id="appbundle_programmbs_qualityP2" name="appbundle_programmbs[qualityP2]" maxLength={255} className="form-control" defaultValue="travail et investissement" />
      </div>
    </div>
    <div className="col-md-5">
      <div className="form-group has-success">
        <select id="appbundle_programmbs_qualityQ2" name="appbundle_programmbs[qualityQ2]" className="form-control quality"><option value="303,132">1. I am not happy with this area of my life.</option><option value="338,97">2. Sometimes I am not happy with this area of my life.</option><option value="353,82" selected="selected">3. Sometimes I am happy with this areas of my life.</option><option value="367,68">4. Normally, I am happy with the area of my life.</option><option value="381,54">5. I am very happy with this area of my life.</option></select>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-10">
      <div className="form-group has-success">
        <label htmlFor="qualityG2">Action steps for priority # 2</label>
        <div className="form-group"><textarea id="appbundle_programmbs_qualityG2" name="appbundle_programmbs[qualityG2]" className="form-control" defaultValue={"je vais tacher d'epargner beaucoup plus en me passant des depenses futiles."} /></div>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-5">
      <div className="form-group has-success">
        <label htmlFor="qualityP3">3. Priority #3 of your life</label>
        <input type="text" id="appbundle_programmbs_qualityP3" name="appbundle_programmbs[qualityP3]" maxLength={255} className="form-control " defaultValue="Famille" />
      </div>
    </div>
    <div className="col-md-5">
      <div className="form-group has-success">
        <select id="appbundle_programmbs_qualityQ3" name="appbundle_programmbs[qualityQ3]" className="form-control quality"><option value="314,159">1. I am not happy with this area of my life.</option><option value="364,159">2. Sometimes I am not happy with this area of my life.</option><option value="384,159">3. Sometimes I am happy with this areas of my life.</option><option value="404,159">4. Normally, I am happy with the area of my life.</option><option value="424,159" selected="selected">5. I am very happy with this area of my life.</option></select>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-10">
      <div className="form-group has-success">
        <label htmlFor="qualityG3">Action steps for priority # 3</label>
        <div className="form-group"><textarea id="appbundle_programmbs_qualityG3" name="appbundle_programmbs[qualityG3]" className="form-control" defaultValue={"je vais passer plus de temps avec ma famille en diminuant mes heures de travail"} /></div>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-5">
      <div className="form-group has-success">
        <label htmlFor="qualityP4">4. Priority #4 of your life</label>
        <input type="text" id="appbundle_programmbs_qualityP4" name="appbundle_programmbs[qualityP4]" maxLength={255} className="form-control" defaultValue="sortir en couple/ rigoler ensemble" />
      </div>
    </div>
    <div className="col-md-5">
      <div className="form-group has-success">
        <select id="appbundle_programmbs_qualityQ4" name="appbundle_programmbs[qualityQ4]" className="form-control quality"><option value="303,188">1. I am not happy with this area of my life.</option><option value="338,223">2. Sometimes I am not happy with this area of my life.</option><option value="352,237">3. Sometimes I am happy with this areas of my life.</option><option value="367,252">4. Normally, I am happy with the area of my life.</option><option value="381,266" selected="selected">5. I am very happy with this area of my life.</option></select>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-10">
      <div className="form-group has-success">
        <label htmlFor="qualityG4">Action steps for priority # 4</label>
        <div className="form-group"><textarea id="appbundle_programmbs_qualityG4" name="appbundle_programmbs[qualityG4]" className="form-control" defaultValue={"pas de modification"} /></div>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-5">
      <div className="form-group has-success">
        <label htmlFor="qualityP5">5. Priority #5 of your life</label>
        <input type="text" id="appbundle_programmbs_qualityP5" name="appbundle_programmbs[qualityP5]" maxLength={255} className="form-control" defaultValue="ecole" />
      </div>
    </div>
    <div className="col-md-5">
      <div className="form-group has-success">
        <select id="appbundle_programmbs_qualityQ5" name="appbundle_programmbs[qualityQ5]" className="form-control quality"><option value="274,199">1. I am not happy with this area of my life.</option><option value="274,249">2. Sometimes I am not happy with this area of my life.</option><option value="274,269">3. Sometimes I am happy with this areas of my life.</option><option value="274,289">4. Normally, I am happy with the area of my life.</option><option value="274,309" selected="selected">5. I am very happy with this area of my life.</option></select>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-10">
      <div className="form-group has-success">
        <label htmlFor="qualityG5">Action steps for priority # 5</label>
        <div className="form-group"><textarea id="appbundle_programmbs_qualityG5" name="appbundle_programmbs[qualityG5]" className="form-control" defaultValue={"pas besoin de modification"} /></div>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-5">
      <div className="form-group has-success">
        <label htmlFor="qualityP6">6.  Priority #6 of your life</label>
        <input type="text" id="appbundle_programmbs_qualityP6" name="appbundle_programmbs[qualityP6]" maxLength={255} className="form-control" defaultValue="vente" />
      </div>
    </div>
    <div className="col-md-5">
      <div className="form-group has-success">
        <select id="appbundle_programmbs_qualityQ6" name="appbundle_programmbs[qualityQ6]" className="form-control quality"><option value="248,187">1. I am not happy with this area of my life.</option><option value="212,223">2. Sometimes I am not happy with this area of my life.</option><option value="198,237">3. Sometimes I am happy with this areas of my life.</option><option value="183,252" selected="selected">4. Normally, I am happy with the area of my life.</option><option value="169,266">5. I am very happy with this area of my life.</option></select>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-10">
      <div className="form-group has-success">
        <label htmlFor="qualityG6">Action steps for priority # 6</label>
        <div className="form-group"><textarea id="appbundle_programmbs_qualityG6" name="appbundle_programmbs[qualityG6]" className="form-control" defaultValue={"pas de modification"} /></div>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-5">
      <div className="form-group has-success">
        <label htmlFor="qualityP7">7. Priority #7 of your life</label>
        <input type="text" id="appbundle_programmbs_qualityP7" name="appbundle_programmbs[qualityP7]" maxLength={255} className="form-control" defaultValue="service" />
      </div>
    </div>
    <div className="col-md-5">
      <div className="form-group has-success">
        <select id="appbundle_programmbs_qualityQ7" name="appbundle_programmbs[qualityQ7]" className="form-control quality"><option value="234,159">1. I am not happy with this area of my life.</option><option value="184,159">2. Sometimes I am not happy with this area of my life.</option><option value="164,159">3. Sometimes I am happy with this areas of my life.</option><option value="144,159">4. Normally, I am happy with the area of my life.</option><option value="124,159" selected="selected">5. I am very happy with this area of my life.</option></select>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-10">
      <div className="form-group has-success">
        <label htmlFor="qualityG7">Action steps for priority # 7</label>
        <div className="form-group"><textarea id="appbundle_programmbs_qualityG7" name="appbundle_programmbs[qualityG7]" className="form-control" defaultValue={"pas de modification"} /></div>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-5">
      <div className="form-group has-success">
        <label htmlFor="qualityP8">8. Priority #8 of your life</label>
        <input type="text" id="appbundle_programmbs_qualityP8" name="appbundle_programmbs[qualityP8]" maxLength={255} className="form-control" defaultValue="exercise" />
      </div>
    </div>
    <div className="col-md-5">
      <div className="form-group has-success">
        <select id="appbundle_programmbs_qualityQ8" name="appbundle_programmbs[qualityQ8]" className="form-control quality"><option value="247,132">1. I am not happy with this area of my life.</option><option value="212,97">2. Sometimes I am not happy with this area of my life.</option><option value="198,83">3. Sometimes I am happy with this areas of my life.</option><option value="183,68" selected="selected">4. Normally, I am happy with the area of my life.</option><option value="169,54">5. I am very happy with this area of my life.</option></select>
      </div>
    </div>
  </div>
  <div className="row ml-auto mr-auto text-center">
    <div className="col-md-10">
      <div className="form-group has-success">
        <label htmlFor="qualityG8">Action steps for priority # 8</label>
        <div className="form-group"><input type="text" id="appbundle_programmbs_qualityG8" name="appbundle_programmbs[qualityG8]" className="form-control" defaultValue="pas de modification" /></div>
      </div>
    </div>
  </div>
            <br/>
            <br/>
            <SuccessBold>
              {t("question.process2")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programmbs.process2}
            </MutedText>
            <br/>
            <SuccessBold>
              {t("question.process3")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programmbs.process3}
            </MutedText>
            <br/>
            <SuccessBold>
              {t("question.process4")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programmbs.process4}
            </MutedText>
            <RevisionForm name="revisionprocess" />
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