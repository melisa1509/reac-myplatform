import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { getStudentAmbassadorList } from "actions/studentActions.jsx";
import { Link } from "react-router-dom";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import matchSorter from 'match-sorter';
import { translate } from 'react-switch-lang';
import { withRouter } from 'react-router-dom';



class AmbassadorTable extends React.Component {
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
    // NOTE: this completely clears any COLUMN filters
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
    this.props.dispatchGetStudentAmbassadorList(this.props.match.params.id);
  }

 
  render() {
    const { student_ambassador_list, loading } = this.props;
    let { t } = this.props;
            
    const data = student_ambassador_list.map((prop, key) => {
      let projectState = "";
      let i = 0;
      let updated_at=[];
      for (i = 1; i < 10 ; i++) {
         updated_at[i]=prop.updated_at[i]
      }
      if (prop.programsa !== undefined) {
            projectState = t("label_project_ambassador") + " " +  t(prop.programsa.state);
            
      }
      else if(prop.programmbs !== undefined){
            projectState = t("state_project_mbs") + " " +  t(prop.programmbs.state);
      }
      else{
            projectState = t("label_project_mbs") + " " +  t("state_without_starting");
      }

      return {
        id: key, 
        full_name: prop.first_name + " "+ prop.last_name,
        state:projectState,
        date:updated_at,
        country: prop.country,
      };
    });

    return (
      <GridContainer justify="center">
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
                  Header: t("label_name"),
                  accessor: "full_name",
                  
                },
                {
                  Header: t("label_state"),
                  accessor: "state",
                },
                {
                  Header: t("th_date"),
                  accessor: "date",
                },
                {
                  Header: t("label_country"),
                  accessor: "country",
                },
                {
                  Header: "",
                  id: 'all',
                  width: 0,
                  resizable: false,
                  sortable: false,
                  
                  getProps: () => {
                    return {
                      style: { height: "40px"}
                    }
                  },
                  filterMethod: (filter, rows) => {
                    // using match-sorter
                    // it will take the content entered into the "filter"
                    // and search for it in EITHER the firstName or lastName
                    const result = matchSorter(rows, filter.value, {
                      keys: [
                        "full_name",
                      ], threshold: matchSorter.rankings.WORD_STARTS_WITH
                    });
                    return result;
                  },
                  filterAll: true,
                }
              ]}
              key={data.length}
              defaultPageSize={data.length < 10 ? data.length : 10}
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
      student_ambassador_list: state.studentReducer.student_ambassador_list, 
      loading: state.studentReducer.loading
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetStudentAmbassadorList: key => dispatch( getStudentAmbassadorList(key) )
});

const AmbassadorTableComponent = translate(AmbassadorTable);
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(AmbassadorTableComponent));

