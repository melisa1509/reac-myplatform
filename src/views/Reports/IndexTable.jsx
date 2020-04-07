import React from "react";
// react component for creating dynamic tables
import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import { connect } from "react-redux";
import { translate } from "react-translate";

import DragHandle from "@material-ui/icons/DragHandle";
import Navigation from "@material-ui/icons/Navigation";
import SignalWifi from "@material-ui/icons/SignalWifi4Bar";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import { getReports } from "actions/reportActions.jsx";
import Info from "components/Typography/Info.jsx";
import Success from "components/Typography/Success";
import Danger from "components/Typography/Danger";


class IndexTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      filterAll: '',
      
    };
    this.filterAll = this.filterAll.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
  }

  onFilteredChange(filtered) {
    
    if (filtered.length > 1 && this.state.filterAll.length) {
      const filterAll = '';
      this.setState({ filtered: filtered.filter((item) => item.id != 'all'), filterAll })
    }
    else
      this.setState({ filtered });
  }

  filterAll(e) {
    const { value } = e.target;
    const filterAll = value;
    const filtered = [{ id: 'all', value: filterAll }];
    this.setState({ filterAll, filtered });
  }

  searchFilter(e){
    const { value } = e.target;
    if(value.length > 1){
      this.props.dispatchDataRequested();
      this.props.dispatchSetData(value);
    }
    
  }

  componentDidMount() {
    this.props.dispatchGetReports();
  }

 
  render() {
    const { report_list, loading} = this.props;
    let { t } = this.props;
            
    const data = report_list.evaluations.map((prop) => {
      let equal=false
      let improvement=false
      let worsen=false
       if(prop.question1 == "IQUAL"){
         equal=true
       }
       else if(prop.question1 == "IMPROVEMENT"){
        improvement=true
       }
       else {
         worsen=true
       }
      return { 
        name: prop.name,
        question1:(
          <div>
         {equal 
          ?   
          <Info>
              <DragHandle/> 
          </Info>
          : 
          ""
         }
         {improvement 
          ?
          <Success>
              <Navigation/> 
          </Success>
          : 
          ""
         }
         {worsen
          ?   
          <Danger>
              <SignalWifi/> 
          </Danger>
          : 
          ""
         }
         </div>
        ),
        ambassador: prop.ambassador,
        group: prop.group,
      };
    });
    
    return (
      <GridContainer>
        <GridItem xs={12}>
        <CustomInput
          inputProps={{
            placeholder: "Search",
            value:this.state.filterAll, 
            onChange:this.filterAll
          }}
          formControlProps={{
            fullWidth: false
          }}
        />
        
          <ReactTable
              filtered={this.state.filtered}
              ref={r => this.reactTable = r}
              onFilteredChange={this.onFilteredChange.bind(this)}
              defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
              data={data}
              loading={loading}

              columns={[
                {
                  Header: t("th.name"),
                  accessor: "name",
                },
                {
                  Header: t("th.question1"),
                  accessor: "question1",
                  filterable: false
                },
                {
                  Header: t("th.ambassador"),
                  accessor: "ambassador",
                },
                {
                  Header: t("th.group"),
                  accessor: "group",
                },
                {
                  Header: "",
                  id: 'all',
                  width: 0,
                  resizable: false,
                  sortable: false,
                  
                  getProps: () => {
                    return {
                      style: { padding: "20px"}
                    }
                  },
                  filterMethod: (filter, rows) => {
                    const result = matchSorter(rows, filter.value, {
                      keys: [
                        "name",
                        "ambassador"
                      ], threshold: matchSorter.rankings.WORD_STARTS_WITH
                    });
                    return result;
                  },
                  filterAll: true,
                }
              ]}
              defaultPageSize={10}
              showPaginationTop={false}
              showPaginationBottom={true}
              className="-striped -highlight"
          />
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => ({ 
      report_list: state.reportReducer.report_list,
      loading: state.reportReducer.loading 
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetReports: () => dispatch( getReports() )
});

const IndexTableComponent = translate('provider')(IndexTable);
export default connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent);

