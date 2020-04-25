import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { getStudentList } from "actions/studentActions.jsx";
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
import { translate } from "react-translate";




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
    this.props.dispatchGetStudentList();
  }

 
  render() {
    const { student_list, loading } = this.props;
    let { t } = this.props;
            
    const data = student_list.map((prop, key) => {
      let projectState = "";
      let buttonMbs = false;
      let buttonSa = false;
      let idMbs = "";
      let idSa = "";
      if (prop.programsa !== undefined) {
            projectState = t("label.project_ambassador") + " " +  t(prop.programsa.state);
            buttonSa =  true;
            idSa = prop.programsa.id;
            
      }
      else if(prop.programmbs !== undefined){
            projectState = t("state.project_mbs") + " " +  t(prop.programmbs.state);
            buttonMbs =  true;
            idMbs = prop.programmbs.id;
      }
      else{
            projectState = t("label.project_mbs") + " " +  t("state.without_starting");
      }
      return {
        id: key, 
        full_name: prop.first_name + " "+ prop.last_name,
        state: projectState,
        projects: (
          <div className="actions-left">
            <Link to={buttonMbs ? "/programmbs/show/" + idMbs : "#"}>
              <Button
                size="sm"
                color={buttonMbs ? "success" : "default" }
              >
                {t('button.mbs')}
              </Button>
            </Link>
            {" "}
            <Link to={buttonSa ? "/programsa/show/" + idSa : "#"}>
              <Button
                size="sm"
                color={buttonSa ? "info" : "default" }
              >
                {t('button.embassador')}
              </Button>
            </Link>
            
          </div>
        ),
        actions: (
          // we've added some custom button actions
          <div className="actions-left">
            <Link to={"/student/show/" + prop.id}>
              <Button
                justIcon
                round4
                simple
                color="info"
              >
                <Visibility />
              </Button>
            </Link>{" "}
            <Link to={"/student/edit/" + prop.id}>
              <Button
                justIcon
                round
                simple            
                color="warning"
              >
                <Create />
              </Button>
            </Link>{" "}
            <Link to={"/student/show/" + prop.id}>
              <Button
                justIcon
                round
                simple            
                color="danger"
              >
                <Close />
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
                  Header: t("label.name"),
                  accessor: "full_name"
                },
                {
                  Header: t("label.state"),
                  accessor: "state"
                },
                {
                  Header: t("th.projects"),
                  accessor: "projects"
                },
                {
                  Header: t("th.actions"),
                  accessor: "actions",
                  sortable: false,
                  filterable: false
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
                        "state"
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
      student_list: state.studentReducer.student_list, 
      loading: state.studentReducer.loading
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetStudentList: key => dispatch( getStudentList(key) )
});

const IndexTableComponent = translate('provider')(IndexTable);
export default connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent);

