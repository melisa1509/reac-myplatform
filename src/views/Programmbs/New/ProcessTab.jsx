import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CustomInputRedux from 'components/CustomInput/CustomInputRedux.jsx';

// core components
import SuccessBold from "components/Typography/SuccessBold.jsx";
import Controls from './Controls.jsx';
import { loadFormProgrammbs } from "actions/programmbsActions.jsx";

import { translate } from 'react-switch-lang';
import CustomTextarea from "components/CustomInput/CustomTextarea.jsx";


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
            <h3 className={classes.cardTitleCenter} >{t("title_process")}</h3>
            <br/>
            <SuccessBold>
                {t("question_process1")}
            </SuccessBold>
            <br/>
          <svg height="350" width="100%">
              <defs>
                <filter id="f1" x="0" y="0" width="200%" height="200%">
                  <feOffset result="offOut" in="SourceGraphic" dx="15" dy="20" />
                  <feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"/>
                  <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
              </defs>
              <rect x="" y="" width="180" height="100" stroke="#325457" strokeWidth="3" fill="white" filter="url(#f1)" />
              Sorry, your browser does not support inline SVG.
              <foreignObject x="10" y="10" width="160" height="160">
                  <div>
                      <Field
                        component={CustomTextarea}
                        name="process1[0]"
                        success
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 4,
                        }}
                      />
                  </div>
              </foreignObject>


              <defs>
                <marker id="arrowhead1" markerWidth="10" markerHeight="7"
                refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 5 3.5, 0 7" fill="#325457" />
                </marker>
              </defs>
              <line x1="210" y1="50" x2="230" y2="50" stroke="#325457"
              strokeWidth="8" markerEnd="url(#arrowhead1)" />

              <defs>
                <filter id="f2" x="0" y="0" width="200%" height="200%">
                  <feOffset result="offOut" in="SourceGraphic" dx="15" dy="20" />
                  <feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"/>
                  <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
              </defs>
              <rect x="300" y="" width="180" height="100" stroke="#325457" strokeWidth="3" fill="white" filter="url(#f2)" />
              Sorry, your browser does not support inline SVG.
              <foreignObject x="310" y="10" width="160" height="160">
                  <div>
                      <Field
                        component={CustomTextarea}
                        name="process1[1]"
                        success
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 4,
                        }}
                      />
                  </div>
              </foreignObject>



              <defs>
                <marker id="arrowhead2" markerWidth="10" markerHeight="7"
                refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 5 3.5, 0 7" fill="#325457" />
                </marker>
              </defs>
              <line x1="510" y1="50" x2="530" y2="50" stroke="#325457"
              strokeWidth="8" markerEnd="url(#arrowhead2)" />


              <defs>
                <filter id="f3" x="0" y="0" width="200%" height="200%">
                  <feOffset result="offOut" in="SourceGraphic" dx="15" dy="20" />
                  <feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"/>
                  <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
              </defs>
              <rect x="600" y="" width="180" height="100" stroke="#325457" strokeWidth="3" fill="white" filter="url(#f3)" />
              Sorry, your browser does not support inline SVG.
              <foreignObject x="610" y="10" width="160" height="160">
                  <div>
                      <Field
                        component={CustomTextarea}
                        name="process1[2]"
                        success
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 4,
                        }}
                      />
                  </div>
              </foreignObject>


              <defs>
                <marker id="arrowhead4" markerWidth="10" markerHeight="7"
                refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 5 3.5, 0 7" fill="#325457" />
                </marker>
              </defs>
              <line x1="690" y1="120" x2="690" y2="140" stroke="#325457"
              strokeWidth="8" markerEnd="url(#arrowhead4)" />


              <defs>
                <filter id="f4" x="0" y="0" width="200%" height="200%">
                  <feOffset result="offOut" in="SourceGraphic" dx="15" dy="20" />
                  <feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"/>
                  <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
              </defs>
              <rect x="600" y="200" width="180" height="100" stroke="#325457" strokeWidth="3" fill="white" filter="url(#f4)" />
              Sorry, your browser does not support inline SVG.
              <foreignObject x="610" y="210" width="160" height="160">
                  <div>
                      <Field
                        component={CustomTextarea}
                        name="process1[3]"
                        success
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 4,
                        }}
                      />
                  </div>
              </foreignObject>



              <defs>
                <marker id="startarrow" markerWidth="10" markerHeight="7"
                refX="10" refY="3.5" orient="auto">
                  <polygon points="10 0, 10 7, 5 3.5" fill="#325457" />
                </marker>
              </defs>
              <line x1="550" y1="240" x2="570" y2="240" stroke="#325457" strokeWidth="8"
               markerStart="url(#startarrow)" />



              <defs>
                <filter id="f5" x="0" y="0" width="200%" height="200%">
                  <feOffset result="offOut" in="SourceGraphic" dx="15" dy="20" />
                  <feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"/>
                  <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
              </defs>
              <rect x="300" y="200" width="180" height="100" stroke="#325457" strokeWidth="3" fill="white" filter="url(#f5)" />
              Sorry, your browser does not support inline SVG.
              <foreignObject x="310" y="210" width="160" height="160">
                  <div>
                      <Field
                        component={CustomTextarea}
                        name="process1[4]"
                        success
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 4,
                        }}
                      />
                  </div>
              </foreignObject>


              <defs>
                <marker id="startarrow" markerWidth="10" markerHeight="7"
                refX="10" refY="3.5" orient="auto">
                  <polygon points="10 0, 10 7, 5 3.5" fill="#325457" />
                </marker>
              </defs>
              <line x1="250" y1="240" x2="270" y2="240" stroke="#325457" strokeWidth="8"
               markerStart="url(#startarrow)" />


              <defs>
                <filter id="f6" x="0" y="0" width="200%" height="200%">
                  <feOffset result="offOut" in="SourceGraphic" dx="15" dy="20" />
                  <feColorMatrix result = "matrixOut" in = "offOut" type = "matrix" values = "0.2 0 0 0 0 0 0.2 0 0 0 0 0 0.2 0 0 0 0 0 1 0"/>
                  <feGaussianBlur result="blurOut" in="matrixOut" stdDeviation="10" />
                  <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                </filter>
              </defs>
              <rect x="" y="200" width="180" height="100" stroke="#325457" strokeWidth="3" fill="white" filter="url(#f6)" />
              Sorry, your browser does not support inline SVG.
              <foreignObject x="10" y="210" width="160" height="160">
                  <div>
                      <Field
                        component={CustomTextarea}
                        name="process1[5]"
                        success
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 4,
                        }}
                      />
                  </div>
              </foreignObject>
            </svg>
            <br/>
            <form>
                <Field
                  labelText={t("question_price2")}
                  component={CustomInputRedux}
                  name="price2"
                  success
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 7,
                  }}
                />
                <Field
                  labelText={t("question_price3")}
                  component={CustomInputRedux}
                  name="price3"
                  success
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 7,
                  }}
                />
                <br/>
                <Field
                  labelText={t("question_price4")}
                  component={CustomInputRedux}
                  name="price4"
                  success
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 7,
                  }}
                />
                
                <br/>               
            </form>         
            <br/>
           
            <Controls/>
          </CardBody>
        </Card>
    );
  }
}

ProcessTab = reduxForm({
  form: 'programmbs',
  enableReinitialize: true,
})(ProcessTab);


ProcessTab = connect(
  state => ({
  }),
  { load: loadFormProgrammbs }, 
)(ProcessTab);


export default translate(withStyles(styles)(ProcessTab));