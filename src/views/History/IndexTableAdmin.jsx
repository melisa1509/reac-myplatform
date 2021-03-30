import React from "react";
import PropTypes from "prop-types";

// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { successStory  } from "actions/studentActions.jsx";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import matchSorter from 'match-sorter';
import { translate } from 'react-switch-lang';
import { showDate } from 'assets/functions/general.jsx';

class IndexTableAdmin extends React.Component {
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
    this.props.dispatchSuccessStory(this.props.match.params.id);
  }
 
  render() {
    const { success_story, loading } = this.props;
    let { t } = this.props;
            
    const data = success_story.map((prop, key) => {
      return {
        id: key, 
        name: prop.student.first_name + " " + prop.student.last_name ,
        country: t(prop.student.country),
        nameAmbassador:prop.group.embassador.first_name + " " + prop.group.embassador.last_name ,
        group:prop.group.name,
        date: showDate(prop.student.programmbs.approval_date),
        actions: (
          <div className="actions-left">
            <Link to={"/programmbs/show/history/" + prop.student.programmbs.id}>
              <Button
                size="sm"
                color="success"
              >
                 {t('button_success_story')}
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
                  accessor: "name",
                  width: 250,
                },
                {
                  Header: t("th_country"),
                  accessor: "country",
                  width: 150,
                },
                {
                  Header: t("th_group"),
                  accessor: "group",
                  width: 200,
                },
                {
                  Header: t("label_date"),
                  accessor: "date",
                  width: 100,
                },
                {
                  Header: t("th_ambassador"),
                  accessor: "nameAmbassador",
                  width: 200,
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
                      style: { padding: "5px"}
                    }
                  },
                  filterMethod: (filter, rows) => {
                    const result = matchSorter(rows, filter.value, {
                      keys: [
                        "name",
                        "group",
                        "nameAmbassador"
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
      success_story: state.studentReducer.success_story, 
      loading: state.studentReducer.loading
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchSuccessStory: (key) => dispatch( successStory(key) )
});

const IndexTableAdminComponent = translate(IndexTableAdmin);
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableAdminComponent));

