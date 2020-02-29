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




class PaperworkTab extends React.Component {

  
  render() {
    const { classes, programmbs } = this.props;
    let { t } = this.props;
    let counter = 1;
    const optionsPaperwork2 = {
         value: programmbs.paperwork2,
         options:[
            { label: t("label.paperwork2.option1") },
            { label: t("label.paperwork2.option2") },
            { label: t("label.paperwork2.option3") },
            { label: t("label.paperwork2.option4") }
         ]
    }

    const optionsPaperwork3 = {
        value: programmbs.paperwork3,
        options:[
           { label: t("label.paperwork3.option1") },
           { label: t("label.paperwork3.option2") },
           { label: t("label.paperwork3.option3") },
        ]
    }

    const arrayPaperwork4 = programmbs.paperwork4.p4_array;
    const numColumsPaperwork4 = arrayPaperwork4.length / 5;
    const rowsPaperwork4 = [];
    const widthColumsPaperwork4 = ["10%", "45%", "15%", "15%", "15%"];
    let start = 0;
    let end = 5;
    for (let index = 0; index <= numColumsPaperwork4; index++) {
      rowsPaperwork4.push(arrayPaperwork4.slice(start, end));
      start = start + 5;
      end = end + 5;
    }

    const arrayPaperwork5 = programmbs.paperwork5.p5_array;
    const numColumsPaperwork5 = arrayPaperwork5.length / 2;
    const rowsPaperwork5 = [];
    const widthColumsPaperwork5 = ["70%", "30%"];
    let startP5 = 0;
    let endP5 = 2;
    for (let index = 0; index <= numColumsPaperwork5; index++) {
      rowsPaperwork5.push(arrayPaperwork5.slice(startP5, endP5));
      startP5 = startP5 + 2;
      endP5 = endP5 + 2;
    }

    const arrayPaperwork6 = programmbs.paperwork6.p6_array;
    const numColumsPaperwork6 = arrayPaperwork6.length / 2;
    const rowsPaperwork6 = [];
    const widthColumsPaperwork6 = ["70%", "30%"];
    let startP6 = 0;
    let endP6 = 2;
    for (let index = 0; index <= numColumsPaperwork6; index++) {
      rowsPaperwork6.push(arrayPaperwork6.slice(startP6, endP6));
      startP6 = startP6 + 2;
      endP6 = endP6 + 2;
    }

    const titlePaperwork7 = [];
    const titleArray = Array.from(programmbs.paperwork7.p7_title);
    titleArray.unshift(" ");
    titlePaperwork7.push(titleArray);
    const widthColumsPaperwork7Title = ["28%","8%", "8%", "8%", "8%", "8%", "8%", "8%", "8%", "8%"];

    const initialCapitalPaperwork7 = [];
    const initialCapitalArray = Array.from(programmbs.paperwork7.p7_initial_capital === undefined ? [] : programmbs.paperwork7.p7_initial_capital);
    initialCapitalArray.unshift(t("label.initial_capital"));
    initialCapitalPaperwork7.push(initialCapitalArray);
    const widthColumsPaperwork7InitialCapital = ["28%","8%", "8%", "8%", "8%", "8%", "8%", "8%", "8%", "8%"];

    const arrayPaperwork7 = programmbs.paperwork7.p7_array;
    const numColumsPaperwork7 = arrayPaperwork7.length / 10;
    const rowsPaperwork7 = [];
    const widthColumsPaperwork7 = ["28%","8%", "8%", "8%", "8%", "8%", "8%", "8%", "8%", "8%"];
    let startP7 = 0;
    let endP7 = 10;
    for (let index = 0; index <= numColumsPaperwork7; index++) {
      rowsPaperwork7.push(arrayPaperwork7.slice(startP7, endP7));
      startP7 = startP7 + 10;
      endP7 = endP7 + 10;
    }

    const incomePaperwork7 = [];
    const incomeArray = Array.from(programmbs.paperwork7.p7_income);
    incomeArray.unshift(t("label.total_income"));
    incomePaperwork7.push(incomeArray);

    const arrayPaperwork8 = programmbs.paperwork8.p8_array;
    const numColumsPaperwork8 = arrayPaperwork8.length / 10;
    const rowsPaperwork8 = [];
    const widthColumsPaperwork8 = ["28%","8%", "8%", "8%", "8%", "8%", "8%", "8%", "8%", "8%"];
    let startP8 = 0;
    let endP8 = 10;
    for (let index = 0; index <= numColumsPaperwork8; index++) {
      rowsPaperwork8.push(arrayPaperwork8.slice(startP8, endP8));
      startP8 = startP8 + 10;
      endP8 = endP8 + 10;
    }

    const expensesPaperwork8 = [];
    const expensesArray = Array.from(programmbs.paperwork8.p8_expenses);
    expensesArray.unshift(t("label.total_expenses"));
    expensesPaperwork8.push(expensesArray);

    const earnings_losesPaperwork8 = [];
    const earnings_losesArray = Array.from(programmbs.paperwork8.p8_earnings_loses);
    earnings_losesArray.unshift(t("label.total_earnings_loses"));
    earnings_losesPaperwork8.push(earnings_losesArray);

  
    
    return (
        <Card >
          <CardBody>
            <h3 className={classes.cardTitleCenter} >{t("title.paperwork")}</h3>
            <br/>
            <SuccessBold>
              {t("question.paperwork1")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programmbs.paperwork1}
            </MutedText>
            <br/>
            <SuccessBold>
              {t("question.paperwork2")}
            </SuccessBold>
            <br/>
            <CustomRadio data={optionsPaperwork2} />
            <br/>
            <SuccessBold>
              {t("question.paperwork3")}
            </SuccessBold>
            <br/>
            <CustomCheckbox data={optionsPaperwork3} />
            <br/>
            <h3 className={classes.cardTitleCenter}>{t("title.paperwork4")}</h3>
            <SuccessBold>{t("label.paperwork4")}</SuccessBold>
            <br/>
            <table className={classes.borderSpacing} id="table_paperwork4">
              <thead>
                <tr>
                  <th className={classes.thBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter } colSpan={5}>
                    <h4>{t("title.paperwork4")}</h4>
                  </th>
                </tr>
                <tr>
                  <th className={classes.textCenter + " "+ classes.tdTable + " "+ classes.verticalCenter } style={{ width: '15%' }}><h7 className="td-bold">{t("th.paperwork4_date")}</h7></th>
                  <th className={classes.textCenter + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bold">{t("th.paperwork4_description")}</h7></th>
                  <th className={classes.textCenter + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bold">{t("th.paperwork4_expenses")}</h7></th>
                  <th className={classes.textCenter + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bold">{t("th.paperwork4_income")}</h7></th>
                  <th className={classes.textCenter + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bold">{t("th.paperwork4_balance")}</h7></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter } colSpan={4}><h7 >{t("label.initial_capital")}</h7></td>
                  <td className={classes.tdTable} style={{ width: '15%' }}>
                      <input type="text"  className={classes.inputTable} style={{ width: '100%' }} defaultValue />
                  </td>
                </tr>
                {
                   rowsPaperwork4.map((prop,key) => {
                     return(
                          <RenderCell data={prop} widthColums={widthColumsPaperwork4} />
                     )
                   })     
                }
                
                <tr>
                  <td className={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter } colSpan={4}><h7 >Ending Cash Balance</h7></td>
                  <td className={classes.tdTable} style={{ width: '15%' }}>
                      <input type="text"  className={classes.inputTable} style={{ width: '100%' }} defaultValue />
                  </td>
                </tr>
              </tbody>
            </table>
            <br/>
            <br/>
            <br/>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <table className={classes.borderSpacing} style={{ width: '100%' }}>
                  <thead>
                    <tr>
                      <th className={classes.thBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter } colSpan={2}>
                        <h4 className="td-bold">Income Statement</h4>
                      </th>
                    </tr>
                    <tr>
                      <td className={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bolder">Starting Cash Balance</h7></td>
                      <td className={classes.tdTable} style={{ width: '15%' }}>
                          <input type="text"  style={{ width: '100%' }}  className={classes.inputTable} defaultValue />
                      </td>
                    </tr>
                    <tr>
                    <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold  } colSpan={2}><h7>Income</h7></td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        rowsPaperwork5.map((prop,key) => {
                          return(
                                <RenderCell data={prop} widthColums={widthColumsPaperwork5} />
                          )
                        })     
                    }
                    <tr>
                      <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold + " "+ classes.textAlignRight } style={{ width: '70%' }}><h7 className="td-bold">Total Income</h7></td>
                      <td className={classes.tdTable} style={{ width: '30%' }}>
                          <input type="text" className={classes.inputTable} style={{ width: '100%' }} defaultValue={350000} />
                      </td>
                    </tr>
                <tr>
                <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold  } colSpan={2}><h7 className="td-bolder">Expenses</h7></td>
                </tr>
                  {
                    rowsPaperwork6.map((prop,key) => {
                      return(
                            <RenderCell data={prop} widthColums={widthColumsPaperwork6} />
                      )
                    })     
                  }
                <tr>
                <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold + " "+ classes.textAlignRight } style={{ width: '70%' }}><h7 className="td-bold">Total Expenses</h7></td>
                <td className={classes.tdTable} style={{ width: '30%' }}>
                      <input type="text" className={classes.inputTable} style={{ width: '100%' }} defaultValue={283166} />
                  </td>
                </tr>
                <tr>
                <td className={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bolder">Profit/Loss</h7></td>
                <td className={classes.tdTable} style={{ width: '30%' }}>
                <input type="text" className={classes.inputTable} style={{ width: '100%' }} defaultValue={66834} />
                  </td>
                </tr>
                <tr>
                  <td className={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bolder">Ending Cash Balance</h7></td>
                  <td className={classes.tdTable} style={{ width: '30%' }}>
                  <input type="text" className={classes.inputTable} style={{ width: '100%' }} defaultValue="----------" />
                  </td>
                </tr>
              </tbody>
              </table>
              </GridItem>
            </GridContainer>
            <br/>
            <h3 className={classes.cardTitleCenter}>{t("title.paperwork7")}</h3>
            <SuccessBold>{t("label.paperwork7")}</SuccessBold>
            <br/>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
              <table className={classes.borderSpacing} id="table_paperwork7" style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th className={classes.thBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter} colSpan={10}>
                      <h4 className="td-bold">Cash Flow Projection</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    titlePaperwork7.map((prop,key) => {
                      return(
                            <RenderCell data={prop} widthColums={widthColumsPaperwork7Title} />
                      )
                    })     
                  }
                
                  {
                    initialCapitalPaperwork7.map((prop,key) => {
                      return(
                            <CustomRenderCell data={prop} widthColums={widthColumsPaperwork7Title} cellStyles={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter} />
                      )
                    })     
                  }
                  <tr>
                      <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold  } colSpan={10}><h7 className="td-bolder">Income</h7></td>
                  </tr>
                  {
                    rowsPaperwork7.map((prop,key) => {
                      return(
                            <RenderCell data={prop} widthColums={widthColumsPaperwork7} />
                      )
                    })     
                  }
                  {
                    incomePaperwork7.map((prop,key) => {
                      return(
                            <CustomRenderCell data={prop} widthColums={widthColumsPaperwork7Title} cellStyles={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold + " "+ classes.textAlignRight } />
                      )
                    })     
                  }
                  <tr>
                      <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold  } colSpan={10}><h7 className="td-bolder">Expenses</h7></td>
                  </tr>
                  {
                    rowsPaperwork8.map((prop,key) => {
                      return(
                            <RenderCell data={prop} widthColums={widthColumsPaperwork7Title}  />
                      )
                    })     
                  }
                  {
                    expensesPaperwork8.map((prop,key) => {
                      return(
                            <CustomRenderCell data={prop} widthColums={widthColumsPaperwork7Title} cellStyles={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold + " "+ classes.textAlignRight } />
                      )
                    })     
                  }
                  
      <tr>
        <td className="td-table text-right padding-left-10 vertical-center" style={{
              width: '28%'
            }}><h7 className="td-bold">Total Expenses</h7></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_expenses" style={{
                width: '100%'
              }} className="text-right" defaultValue={333166} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_expenses" style={{
                width: '100%'
              }} className="text-right" defaultValue={171723} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_expenses" style={{
                width: '100%'
              }} className="text-right" defaultValue={317526} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_expenses" style={{
                width: '100%'
              }} className="text-right" defaultValue={286806} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_expenses" style={{
                width: '100%'
              }} className="text-right" defaultValue={268374} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_expenses" style={{
                width: '100%'
              }} className="text-right" defaultValue={245334} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_expenses" style={{
                width: '100%'
              }} className="text-right" defaultValue={275286} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_expenses" style={{
                width: '100%'
              }} className="text-right" defaultValue={267606} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_expenses" style={{
                width: '100%'
              }} className="text-right" defaultValue={256086} /></td>
      </tr>
      <tr>
        <td className="td-table text-left padding-left-10 vertical-center td-background-color" style={{
              width: '28%'
            }}><h7 className="td-bolder">Profit/Loss</h7></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_earnings_loses" style={{
                width: '100%'
              }} className="text-right" defaultValue={16834} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_earnings_loses" style={{
                width: '100%'
              }} className="text-right" defaultValue={33277} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_earnings_loses" style={{
                width: '100%'
              }} className="text-right" defaultValue={77474} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_earnings_loses" style={{
                width: '100%'
              }} className="text-right" defaultValue={68194} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_earnings_loses" style={{
                width: '100%'
              }} className="text-right" defaultValue={62626} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_earnings_loses" style={{
                width: '100%'
              }} className="text-right" defaultValue={55666} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_earnings_loses" style={{
                width: '100%'
              }} className="text-right" defaultValue={64714} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_earnings_loses" style={{
                width: '100%'
              }} className="text-right" defaultValue={62394} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_earnings_loses" style={{
                width: '100%'
              }} className="text-right" defaultValue={58914} /></td>
      </tr>
      <tr>
        <td className="td-table text-left padding-left-10 vertical-center td-background-color" style={{
              width: '28%'
            }}><h7 className="td-bolder">Ending Cash Balance</h7></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_balance" style={{
                width: '100%'
              }} className="text-right" defaultValue={66834} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_balance" style={{
                width: '100%'
              }} className="text-right" defaultValue={100111} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_balance" style={{
                width: '100%'
              }} className="text-right" defaultValue={177474} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_balance" style={{
                width: '100%'
              }} className="text-right" defaultValue={245668} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_balance" style={{
                width: '100%'
              }} className="text-right" defaultValue={308294} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_balance" style={{
                width: '100%'
              }} className="text-right" defaultValue={363960} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_balance" style={{
                width: '100%'
              }} className="text-right" defaultValue={428674} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_balance" style={{
                width: '100%'
              }} className="text-right" defaultValue={491068} /></td>
        <td className="td-table" style={{
              width: '8%'
            }}><input type="text" name="paperwork8_balance" style={{
                width: '100%'
              }} className="text-right" defaultValue={549982} /></td>
      </tr>
    </tbody>
  </table>
  }

}

              </GridItem>
            </GridContainer>
            <br/>
            <RevisionForm name="revisionpaperwork" labelText={t("label.revision_paperwork")+ " *"} />
            <br/>
            <Controls/>
          </CardBody>
        </Card>
    );
  }
}

PaperworkTab.propTypes = {
  classes: PropTypes.object,
};

const mapStateToProps = state => ({ 
  programmbs: state.programmbsReducer.programmbs
});

const mapDispatchToPropsActions = dispatch => ({
  
});


const PaperworkTabComponent = translate('provider')(withStyles(styles)(PaperworkTab));
export default connect(mapStateToProps, mapDispatchToPropsActions)(PaperworkTabComponent);