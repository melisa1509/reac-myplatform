import React from "react";
import PropTypes from "prop-types";

// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";
import { videoPromotion  } from "actions/studentActions.jsx";
import { BASE_URL } from 'constants/urlTypes';


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
    this.props.dispatchVideoPromotion(this.props.match.params.id);
  }
 
  render() {
    const { video_promotion, loading } = this.props;
    let { t } = this.props;
            
    const data = video_promotion.map((prop, key) => {
      return {
        id: key, 
        name: prop.student.first_name + " " + prop.student.last_name ,
        group:prop.group.name,
        facebook_group: t(prop.student.programmbs.promotion7 !== undefined ? prop.student.programmbs.promotion7 : "state.not_joined_facebook"),
        actions: (
          // we've added some custom button actions
          <div className="actions-left">
              <Button
                size="sm"
                color="success"
                href={ BASE_URL + "/web/file/" + prop.student.programmbs.promotion6}
                target="_blank"
              >
                 {t('button_download_video')}
              </Button>
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
                },
                {
                  Header: t("th_group"),
                  accessor: "group",
                  resizable:true
                },
                {
                  Header: t("th_facebook_group"),
                  accessor: "facebook_group",
                  resizable:true
                },
                {
                  Header: t("th_business_statement_video"),
                  accessor: "actions",
                  sortable: false,
                  filterable: false,
                  width: 300,
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
                        "username",
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
      video_promotion: state.studentReducer.video_promotion, 
      loading: state.studentReducer.loading
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchVideoPromotion: (key) => dispatch( videoPromotion(key) )
});

const IndexTableComponent = translate(IndexTable);
export default  withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent));

