import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import CustomInputTable from 'components/CustomInput/CustomInputTable.jsx';
import CustomInputForm from 'components/CustomInput/CustomInputForm.jsx';
import { loadFormProgrammbs, addRownP4 } from "actions/programmbsActions.jsx";
import { Field, FieldArray, reduxForm } from 'redux-form';
import Button from "components/CustomButtons/Button.jsx";

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

import { translate } from 'react-switch-lang';


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

  constructor(props) {
    super(props);
    this.state = {
        p4_array_state: "initialState",
        p4_state: ["0", "1", "3", "4", "5","0", "1", "3", "4", "5"],
        count: 20
    };
  }

  deleteClick = () => {
    let p4_array = this.props.programmbs.paperwork4.p4_array;    
    p4_array.push("", "", "", "", "");
    //this.setState({p4_array_state : p4_array});
    console.log(p4_array);
    this.props.change('paperwork4.p4_array', p4_array);
  }

  removeRowP4 = () => {
    
    this.setState({p4_array_state : this.state.p4_state});
    this.props.loadAddRownP4();
  }
  
  
  render() {
    const { classes, programmbs } = this.props;
    let { t } = this.props;
    let counter = 1;
    const optionsPaperwork2 = {
         value: programmbs.paperwork2,
         options:[
            { label: t("label_paperwork2_option1") },
            { label: t("label_paperwork2_option2") },
            { label: t("label_paperwork2_option3") },
            { label: t("label_paperwork2_option4") }
         ]
    }

    const optionsPaperwork3 = {
        value: programmbs.paperwork3,
        options:[
           { label: t("label_paperwork3_option1") },
           { label: t("label_paperwork3_option2") },
           { label: t("label_paperwork3_option3") },
        ]
    }
    
    let p4_array_state = this.state.p4_array_state;
    if(this.state.p4_array_state === "initialState"){
      p4_array_state = ["0", "1", "3", "4", "5","0", "1", "3", "4", "5","0", "1", "3", "4", "5"];
    }
       
    let arrayPaperwork4 = programmbs.paperwork4.p4_array.map((prop, key) => {
      return(
        {value: prop, key: key }
      )
    })    
    
    const numColumsPaperwork4 = arrayPaperwork4.length / 5;
    const rowsPaperwork4 = [];
    const widthColumsPaperwork4 = ["10%", "45%", "15%", "15%", "15%"];
    let start = 0;
    let start4 = 0;
    let end = 5;
    let end4 = 4;
    for (let index = 0; index <= numColumsPaperwork4; index++) {
      rowsPaperwork4.push({start: start4, end: end4});
      start = start + 5;
      end = end + 5;
      start4 = start4 + 5;
      end4 = end4 + 5;
    }

    const arrayPaperwork5 = programmbs.paperwork5.p5_array.map((prop, key) => {
      return(
        {value: prop, key: key }
      )
    })
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

    const arrayPaperwork6 = programmbs.paperwork6.p6_array.map((prop, key) => {
      return(
        {value: prop, key: key }
      )
    })
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
    initialCapitalArray.unshift(t("label_initial_capital"));
    initialCapitalPaperwork7.push(initialCapitalArray);
    const widthColumsPaperwork7InitialCapital = ["28%","8%", "8%", "8%", "8%", "8%", "8%", "8%", "8%", "8%"];

    const arrayPaperwork7 = programmbs.paperwork7.p7_array.map((prop, key) => {
      return(
        {value: prop, key: key }
      )
    })
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
    incomeArray.unshift(t("label_total_income"));
    incomePaperwork7.push(incomeArray);

    const arrayPaperwork8 = programmbs.paperwork8.p8_array.map((prop, key) => {
      return(
        {value: prop, key: key }
      )
    })
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
    expensesArray.unshift(t("label_total_expenses"));
    expensesPaperwork8.push(expensesArray);

    const earnings_losesPaperwork8 = [];
    const earnings_losesArray = Array.from(programmbs.paperwork8.p8_earnings_loses);
    earnings_losesArray.unshift(t("label_earnings_loses"));
    earnings_losesPaperwork8.push(earnings_losesArray);

    const balancePaperwork8 = [];
    const balanceArray = Array.from(programmbs.paperwork8.p8_balance);
    balanceArray.unshift(t("label_ending_balance"));
    balancePaperwork8.push(balanceArray);

    const discounts = ({ fields, start, end }) => (
      <tr >
        {
            fields.map((code, index) => {
              return  index >= start && index <= end ?
                <td>
                    <Field
                      name={code}
                      type="text"
                      component={CustomInputForm}
                      label={console.log(code)}
                      autoFocus
                    />
                </td> :
                    ""                   
            }
            )
        }        
      </tr>
    );

  
    
    return (
        <Card >
          <CardBody>
            <h3 className={classes.cardTitleCenter} >{t("title_paperwork")}</h3>
            <br/>
            <SuccessBold>
              {t("question_paperwork1")}
            </SuccessBold>
            <br/>
            <MutedText>
              {programmbs.paperwork1}
            </MutedText>
            <br/>
            <SuccessBold>
              {t("question_paperwork2")}
            </SuccessBold>
            <br/>
            <CustomRadio data={optionsPaperwork2} />
            <br/>
            <SuccessBold>
              {t("question_paperwork3")}
            </SuccessBold>
            <br/>
            <CustomCheckbox data={optionsPaperwork3} />
            <br/>
            <h3 className={classes.cardTitleCenter}>{t("title_paperwork4")}</h3>
            <SuccessBold>{t("label_paperwork4")}</SuccessBold>
            <br/>
            <table className={classes.borderSpacing} id="table_paperwork4">
              <thead>
                <tr>
                  <th className={classes.thBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter } colSpan={5}>
                    <h4>{t("title_paperwork4")}</h4>
                  </th>
                </tr>
                <tr>
                  <th className={classes.textCenter + " "+ classes.tdTable + " "+ classes.verticalCenter } style={{ width: '15%' }}><h7 className="td-bold">{t("th_paperwork4_date")}</h7></th>
                  <th className={classes.textCenter + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bold">{t("th_paperwork4_description")}</h7></th>
                  <th className={classes.textCenter + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bold">{t("th_paperwork4_expenses")}</h7></th>
                  <th className={classes.textCenter + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bold">{t("th_paperwork4_income")}</h7></th>
                  <th className={classes.textCenter + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bold">{t("th_paperwork4_balance")}</h7></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter } colSpan={4}><h7 >{t("label_initial_capital")}</h7></td>
                  <td className={classes.tdTable} style={{ width: '15%' }}>
                      <Field component={CustomInputTable} name="paperwork4[p4_initial_capital]" />
                  </td>
                </tr>
                {
                   rowsPaperwork4.map((prop) => {
                     return(
                      <FieldArray name="paperwork4[p4_array]" start={prop.start} end={prop.end} component={discounts} /> 
                     )
                   })     
                }
                <tr>
                <Button color="default" size="sm" onClick={this.deleteClick}>
                      agregar fila
                      </Button>
                      <Button color="default" size="sm" onClick={this.removeRowP4}>
                      eliminar fila
                      </Button>
                </tr>
                <tr>
                  <td className={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter } colSpan={4}><h7 >{t("label_ending_balance")}</h7></td>
                  <td className={classes.tdTable} style={{ width: '15%' }}>
                      <Field component={CustomInputTable} name="paperwork4[p4_balance]" />
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
                        <h4 className="td-bold">{t("title_result_accounts")}</h4>
                      </th>
                    </tr>
                    <tr>
                      <td className={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bolder">{t("label_initial_capital")}</h7></td>
                      <td className={classes.tdTable} style={{ width: '15%' }}>
                          <Field component={CustomInputTable} name="paperwork5[p5_initial_capital]" />
                      </td>
                    </tr>
                    <tr>
                    <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold  } colSpan={2}><h7>{t("label_income")}</h7></td>
                    </tr>
                  </thead>
                  <tbody>
                    {
                        rowsPaperwork5.map((prop,key) => {
                          return(
                                <RenderCell data={prop} widthColums={widthColumsPaperwork5} nameField="paperwork5[p5_array"/>
                          )
                        })     
                    }
                    <tr>
                      <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold + " "+ classes.textAlignRight } style={{ width: '70%' }}><h7 className="td-bold">{t("label_total_expenses")}</h7></td>
                      <td className={classes.tdTable} style={{ width: '30%' }}>
                          <Field component={CustomInputTable} name="paperwork5[p5_income]" />
                      </td>
                    </tr>
                <tr>
                <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold  } colSpan={2}><h7 className="td-bolder">{t("label_expenses")}</h7></td>
                </tr>
                  {
                    rowsPaperwork6.map((prop,key) => {
                      return(
                            <RenderCell data={prop} widthColums={widthColumsPaperwork6} nameField="paperwork6[p6_array"/> 
                      )
                    })     
                  }
                <tr>
                <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold + " "+ classes.textAlignRight } style={{ width: '70%' }}><h7 className="td-bold">{t("label_total_income")}</h7></td>
                <td className={classes.tdTable} style={{ width: '30%' }}>
                      <Field component={CustomInputTable} name="paperwork6[p6_expenses]" />
                  </td>
                </tr>
                <tr>
                <td className={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bolder">{t("label_earnings_loses")}</h7></td>
                <td className={classes.tdTable} style={{ width: '30%' }}>
                <Field component={CustomInputTable} name="paperwork6[p6_earnings_loses]" />
                  </td>
                </tr>
                <tr>
                  <td className={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter }><h7 className="td-bolder">{t("label_ending_balance")}</h7></td>
                  <td className={classes.tdTable} style={{ width: '30%' }}>
                  <Field component={CustomInputTable} name="paperwork6[p6_balance]" />
                  </td>
                </tr>
              </tbody>
              </table>
              </GridItem>
            </GridContainer>
            <br/>
            <h3 className={classes.cardTitleCenter}>{t("label_paperwork3_option3")}</h3>
            <SuccessBold>{t("label_paperwork7")}</SuccessBold>
            <br/>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
              <table className={classes.borderSpacing} id="table_paperwork7" style={{ width: '100%' }}>
                <thead>
                  <tr>
                    <th className={classes.thBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter} colSpan={10}>
                      <h4 className="td-bold">{t("label_paperwork3_option3")}</h4>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    titlePaperwork7.map((prop,key) => {
                      return(
                            <CustomRenderCell data={prop} widthColums={widthColumsPaperwork7Title} nameField="paperwork7[p7_title"/>
                      )
                    })     
                  }
                
                  {
                    initialCapitalPaperwork7.map((prop,key) => {
                      return(
                            <CustomRenderCell data={prop} widthColums={widthColumsPaperwork7Title} cellStyles={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter} nameField="paperwork7[p7_initial_capital"/>
                      )
                    })     
                  }
                  <tr>
                      <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold  } colSpan={10}><h7 className="td-bolder">{t("label_income")}</h7></td>
                  </tr>
                  {
                    rowsPaperwork7.map((prop,key) => {
                      return(
                            <RenderCell data={prop} widthColums={widthColumsPaperwork7} nameField="paperwork7[p7_array"/>
                      )
                    })     
                  }
                  {
                    incomePaperwork7.map((prop,key) => {
                      return(
                            <CustomRenderCell data={prop} widthColums={widthColumsPaperwork7Title} cellStyles={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold + " "+ classes.textAlignRight } nameField="paperwork7[p7_income"/>
                      )
                    })     
                  }
                  <tr>
                      <td className={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold  } colSpan={10}><h7 className="td-bolder">{t("label_expenses")}</h7></td>
                  </tr>
                  {
                    rowsPaperwork8.map((prop,key) => {
                      return(
                            <RenderCell data={prop} widthColums={widthColumsPaperwork7Title}  nameField="paperwork8[p8_array"/>
                      )
                    })     
                  }
                  {
                    expensesPaperwork8.map((prop,key) => {
                      return(
                            <CustomRenderCell nameField="paperwork8[p8_expenses" data={prop} widthColums={widthColumsPaperwork7Title} cellStyles={classes.tdTable + " "+ classes.verticalCenter + " "+ classes.tdBold + " "+ classes.textAlignRight } />
                      )
                    })     
                  }
                  {
                    earnings_losesPaperwork8.map((prop,key) => {
                      return(
                            <CustomRenderCell nameField="paperwork8[p8_earnings_loses" data={prop} widthColums={widthColumsPaperwork7Title} cellStyles={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter} />
                      )
                    })     
                  }
                  {
                    balancePaperwork8.map((prop,key) => {
                      return(
                            <CustomRenderCell nameField="paperwork8[p8_balance"data={prop} widthColums={widthColumsPaperwork7Title} cellStyles={classes.tdBackgroundColor + " "+ classes.tdTable + " "+ classes.verticalCenter} />
                      )
                    })     
                  }
               
                  </tbody>
                </table>
              </GridItem>
            </GridContainer>
            <br/>
            <RevisionForm name="revisionpaperwork" labelText={t("label_revision_paperwork")+ " *"} />
            <br/>
            <Controls/>
          </CardBody>
        </Card>
    );
  }
}

PaperworkTab = reduxForm({
  form: 'programmbs',
  enableReinitialize: true,
})(PaperworkTab);

PaperworkTab = connect(
  state => ({
    initialValues: state.programmbsReducer.data, 
    programmbs: state.programmbsReducer.programmbs
  }),
  { load: loadFormProgrammbs, loadAddRownP4:  addRownP4}, 
)(PaperworkTab);


export default translate(withStyles(styles)(PaperworkTab));
