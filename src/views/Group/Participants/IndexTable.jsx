import React from "react";
// react component for creating dynamic tables

import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import { connect } from "react-redux";
import { translate } from "react-translate";
import { withRouter } from 'react-router-dom';
import { getCertificateList } from "actions/certificateActions.jsx";

import Create from "@material-ui/icons/Create";
import Visibility from "@material-ui/icons/Visibility";
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import { Link } from "react-router-dom";


class IndexTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filtered: [],
      filterAll: '',
      checked: [],
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
    this.props.dispatchGetCertificateList(this.props.match.params.id);
  }

 
  render() {
    const { certificate_list } = this.props;
    let { t } = this.props;
    const data = certificate_list.map((prop, key) => {
     let state="";
        if(prop.student.programsa !== undefined){
          state=t("label.project_ambassador")+ " " + t(prop.student.programsa.state)
        }
        else if(prop.student.programmbs !== undefined){
          state=t("label.project_mbs")+ " " + t(prop.student.programmbs.state)
        }
        else {
          state=t("label.project_mbs")+ " " + t("state.without_starting")
        }
 
      return {
        id: key, 
        full_name: prop.student.first_name + " " + prop.student.last_name,
        status:state,
        projects: (
          <div className="actions-left">      
            <Button
              size="sm"
              color="info"
            >
              {t('button.mbs')}
            </Button>    
          </div>
        ),
        actions:(
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
            <Button
              justIcon
              round
              simple            
              color="danger"
            >
              <Close />
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
              hover
              columns={[
                {
                  Header: t("th.name"),
                  accessor: "full_name",
                },
                {
                  Header: t("th.status"),
                  accessor: "status",
                },
                {
                  Header: t("th.projects"),
                  accessor: "projects",
                },
                {
                  Header: t("th.actions"),
                  accessor: "actions",
                  sortable: false,
                  width:200
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
                        "full_name",
                        "status"
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
           <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Link to={"/group"}>
                        <Button color="default" size="sm">
                        {t("button.return_to_list")}
                        </Button>
                        {" "}
                      </Link>{" "}
                      <Button color="warning" size="sm">
                      {t("button.export_list")}
                      </Button>
                      {" "}
                      <Button color="info" size="sm">
                      {t("button.create_new")}
                      </Button>
                      {" "}
                      </center>
                  </GridItem>
              </GridContainer>
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => ({ 
      certificate_list: state.certificateReducer.certificate_list, 
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetCertificateList: (key) => dispatch( getCertificateList(key))
});

const IndexTableComponent = translate('provider')(IndexTable);
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent));

