import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { getGroupList } from "actions/groupActions.jsx";
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
import { showDate } from 'assets/functions/general.jsx';


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
    this.props.dispatchGetGroupList();
  }

 
  render() {
    const { group_list, loading, active_user } = this.props;
    let { t } = this.props;
            
    const data = group_list.map((prop, key) => {
     
      return {
        id: key, 
        full_name: prop.name,
        modality: t(prop.modality),
        date: showDate(prop.start_date),
        projects: (
          <div className="actions-left">
            <Link to={"/group/student/" + prop.id}>
              <Button
                size="sm"
                color="success"
              >
                {t('button_manage_students')}
              </Button>
            </Link>
            {" "}
            <Link to={"/group/progress/" + prop.id}>
              <Button
                size="sm"
                color="info"
              >
                {t('button_project_progress')}
              </Button>
            </Link>
          </div>
        ),
        actions: (
          <div className="actions-left">
            <Link to={"/group/show/" + prop.id}>
              <Button
                justIcon
                round
                simple
                color="info"
              >
                <Visibility />
              </Button>
            </Link>{" "}
            <Link to={"/group/edit/" + prop.id}>
              <Button
                justIcon
                round
                simple             
                color="warning"
              >
                <Create />
              </Button>
            </Link>{" "}
            <Link to={"/group/show/" + prop.id}>
              <Button
                justIcon
                round
                simple            
                color="danger"
              >
                <Close />
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
                  Header: t("th_name"),
                  accessor: "full_name",
                  sortable: true
                },
                {
                  Header: t("th_modality"),
                  accessor: "modality",
                  width:150,
                  sortable: true
                },
                {
                  Header: t("th_start_classes"),
                  accessor: "date",
                  width:150,
                  sortable: true,
                  filterable: false
                },
                {
                  Header: t("th_actions"),
                  accessor: "actions",
                  width:150,
                  sortable: false,
                  filterable: false
                },
                {
                  Header: "",
                  accessor: "projects",
                  sortable: false,
                  width:350,
                },
                {
                  Header: "",
                  id: 'all',
                  width: 0,
                  resizable: false,
                  sortable: false,
                  
                  getProps: () => {
                    return {
                      style: {}
                    }
                  },
                  filterMethod: (filter, rows) => {
                    const result = matchSorter(rows, filter.value, {
                      keys: [
                        "full_name",
                        "modality"
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
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <center>
                <Link to={"/group/new/"+ active_user.id}>
                <Button color="info" size="sm">
                {t("button_create_new")}
                </Button>
                {" "}
                </Link>{" "}
                </center>
            </GridItem>
          </GridContainer>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => ({ 
      group_list: state.groupReducer.group_list, 
      active_user:state.loginReducer.active_user,
      loading: state.groupReducer.loading
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetGroupList: () => dispatch( getGroupList() )
});

const IndexTableComponent = translate(IndexTable);
export default connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent);

