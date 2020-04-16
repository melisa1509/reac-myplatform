import React from "react";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { translate } from "react-translate";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CountrySelect from "views/Select/CountrySelect.jsx";
import Table from "components/Table/Table.jsx";
import { getReportCountry } from "actions/reportActions.jsx";
import { store } from "store";
import { Field, reduxForm } from 'redux-form';

class PruebaTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }
  componentDidMount(){
    const reduxState = store.getState();
      this.props.dispatchGetReportCountry();
  }
  render() {
    const {report_country} = this.props;
    let { t } = this.props;
    const question = report_country.map((prop)=>{
      let TableData=[]
      return(
        TableData=[[t(prop.question)]]
      );
    });
    const studentPre  = report_country.map((prop)=>{
      let TableData=[]
      return(
        TableData=[prop.studentsPre]
      );
    });
    const students  = report_country.map((prop)=>{
      let TableData=[]
      return(
        TableData=[prop.students]
      );
    });
    const percentagePre  = report_country.map((prop)=>{
      let TableData=[]
      return(
        TableData=[prop.percentagePre +"%"]
      );
    });
    const percentage = report_country.map((prop)=>{
      let TableData=[]
      return(
        TableData=[prop.percentage +"%" ]
      );
      
    });
    return (
      <GridContainer justify="center">
        <GridItem xs={8}>
          <GridContainer justify="center">
            <GridItem xs={4}>
              <Field
                formName="report"
                name="country"
                component={CountrySelect}
              />
            </GridItem> 
          </GridContainer>
        <br/> 
          <Table
              tableData={[
                [<th>Questions</th>,<th>PreEvaluations</th>," ",<th>PostEvaluations</th>," "],
                [question[0],studentPre[0], percentagePre[0],students[0],percentage[0]],
                [question[1],studentPre[1], percentagePre[1],students[1],percentage[1]],
                [question[2],studentPre[2], percentagePre[2],students[2],percentage[2]],
                [question[3],studentPre[3], percentagePre[3],students[3],percentage[3]],
                [question[4],studentPre[4], percentagePre[4],students[4],percentage[4]],
                [question[5],studentPre[5], percentagePre[5],students[5],percentage[5]],
                [question[6],studentPre[6], percentagePre[6],students[6],percentage[6]],
                [question[7],studentPre[7], percentagePre[7],students[7],percentage[7]],
                [question[8],studentPre[8], percentagePre[8],students[8],percentage[8]],
             ]}
          />
        </GridItem>
      </GridContainer>
    );
  }
}

PruebaTable = reduxForm({
  form: 'reportform', 
  enableReinitialize: true,
})(PruebaTable);

const mapStateToProps = state => ({ 
      report_country: state.reportReducer.report_country,
      selected_country: state.selectReducer.selected_country,
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetReportCountry: () => dispatch( getReportCountry() )
});

const PruebaTableComponent = translate('provider')(PruebaTable);
export default connect(mapStateToProps, mapDispatchToPropsActions)(PruebaTableComponent);

