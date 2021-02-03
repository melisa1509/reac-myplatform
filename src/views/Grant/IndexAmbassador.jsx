import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { getGrantList } from "actions/grantActions.jsx";
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
    this.props.dispatchGetGrantList();
  }

 
  render() {
    const { grant_list, loading, active_user } = this.props;
    let { t } = this.props;
            
    const data = grant_list.map((prop, key) => {
      let i = 0;
      let date=[];
      for (i = 0; i < 10 ; i++) {
         date[i]=prop.date[i]
      }
      return {
        id: key, 
        ambassador: prop.embassador.first_name + " " + prop.embassador.last_name,
        date:date,
        amount: prop.amount,
        participants_number: prop.participants_number,      
        projects: (
          <div className="actions-left">
            <Link to={"/grant/update/" + prop.id}>
              <Button
                size="sm"
                color="success"
              >
                {t('button_updates')}
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
                  Header: t("th_embassador_mentor"),
                  accessor: "ambassador",
                  sortable: true,
                  width: 300
                },
                {
                  Header: t("th_date_grant"),
                  accessor: "date",
                  sortable: true,
                  width: 100
                },
                {
                  Header: t("th_amount"),
                  accessor: "amount",
                  sortable: true,
                  width: 150
                },
                {
                  Header: t("th_number_students"),
                  accessor: "participants_number",
                  sortable: true,
                  width: 250
                },                
                {
                  Header: "",
                  accessor: "projects",
                  sortable: false,
                  width: 100
                },
                {
                  Header: "",
                  id: 'all',
                  width: 0,
                  resizable: false,
                  sortable: false,
                  
                  getProps: () => {
                    return {
                      style: { padding: "0px"}
                    }
                  },
                  filterMethod: (filter, rows) => {
                    const result = matchSorter(rows, filter.value, {
                      keys: [
                        "ambassador",
                        "date",
                        "amount"
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
      grant_list: state.grantReducer.grant_list, 
      active_user:state.loginReducer.active_user,
      loading: state.grantReducer.loading
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetGrantList: () => dispatch( getGrantList() )
});

const IndexTableComponent = translate(IndexTable);
export default connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent);

