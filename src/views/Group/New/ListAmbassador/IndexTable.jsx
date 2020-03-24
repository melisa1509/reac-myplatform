import React from "react";

// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { getAmbassadorList } from "actions/ambassadorActions.jsx";
import { Link } from "react-router-dom";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import matchSorter from 'match-sorter';
import { translate } from "react-translate";

import { withRouter } from 'react-router-dom';

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
    this.props.dispatchGetAmbassadorList();
  }
 
  render() {
    const { ambassador_list, loading } = this.props;
    let { t } = this.props;
    const data = ambassador_list.map((prop, key) => {
      return {
        id: key, 
        name: prop.first_name,
        last_name:prop.last_name,
        country:prop.country,
        actions: (
          // we've added some custom button actions
          <div className="actions-left">
            <Link to={"/group/new/" + prop.id}>
              <Button
                size="sm"
                color="info"
                onClick={this.saveClick}
              >
                {t('button.create_group')}
              </Button>
            </Link>
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
                  Header: t("th.name"),
                  accessor: "name",
                },
                {
                  Header: t("th.lastname"),
                  accessor: "last_name"
                },
                {
                  Header: t("th.country"),
                  accessor: "country"
                },
                {
                  Header: t("th.actions"),
                  accessor: "actions",
                  sortable: false,
                  filterable: false
                },
                {
                  // NOTE - this is a "filter all" DUMMY column
                  // you can't HIDE it because then it wont FILTER
                  // but it has a size of ZERO with no RESIZE and the
                  // FILTER component is NULL (it adds a little to the front)
                  // You culd possibly move it to the end
                  Header: "",
                  id: 'all',
                  width: 0,
                  resizable: false,
                  sortable: false,
                  
                  getProps: () => {
                    return {
                      style: { padding: "5px"}
                    }
                  },
                  filterMethod: (filter, rows) => {
                    const result = matchSorter(rows, filter.value, {
                      keys: [
                        "name",
                        "last_name",
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
      ambassador_list: state.ambassadorReducer.ambassador_list,
      loading: state.ambassadorReducer.loading
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetAmbassadorList: () => dispatch(getAmbassadorList()),
});

const IndexTableComponent = translate('provider')(IndexTable);
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent));

