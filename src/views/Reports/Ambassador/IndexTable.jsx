import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { getAmbassadorStatistics } from "actions/reportActions.jsx";
import { Link } from "react-router-dom";

// @material-ui/icons
import Create from "@material-ui/icons/Create";
import Visibility from "@material-ui/icons/Visibility";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import matchSorter from 'match-sorter';
import { translate } from 'react-switch-lang';




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
    this.props.dispatchGetAmbassadorStatistics();
  }

 
  render() {
    const { ambassador_statistics, loading } = this.props;
    let { t } = this.props;
            
    const data = ambassador_statistics.map((prop, key) => {

      return {
        id: key, 
        full_name: prop.first_name + " "+ prop.last_name,
        group: prop.groups,
        participants: prop.participants,
        certificates:prop.certificates,
        stories:prop.stories,
        actions: (
          // we've added some custom button actions
          <div className="actions-left">
            <Link to={"/report/options/" + prop.id}>
              <Button
                size="sm"
                color= "success"
              >
                {t('button_statistics')}
              </Button>
            </Link>{" "}
          </div>
        )
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
                  Header: t("th_name"),
                  accessor: "full_name",
                  width: 250,
                },
                {
                  Header: t("th_certificates"),
                  accessor: "certificates",
                  sortable: false,
                  width: 150,
                },
                {
                  Header: t("th_participants"),
                  accessor: "participants",
                  resizable:true,
                  sortable: false,
                  width: 150,
                },
                {
                  Header: t("th_stories"),
                  accessor: "stories",
                  sortable: false,
                  width: 150,
                },
                {
                  Header: t("th_group"),
                  accessor: "group",
                  sortable: false,
                  width: 150,
                },
                {
                  Header: t("th_actions"),
                  accessor: "actions",
                  sortable: false,
                  filterable: false,
                  width: 150,
                },
                {
                  Header: "",
                  id: 'all',
                  width: 0,
                  resizable: false,
                  sortable: false,
                  
                  getProps: () => {
                    return {
                      // style: { padding: "0px"}
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
      ambassador_statistics: state.reportReducer.ambassador_statistics, 
      loading: state.reportReducer.loading
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetAmbassadorStatistics: () => dispatch( getAmbassadorStatistics() )
});

const IndexTableComponent = translate(IndexTable);
export default connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent);

