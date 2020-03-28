import React from "react";
// react component for creating dynamic tables

import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import { connect } from "react-redux";
import { translate } from "react-translate";
import { withRouter } from 'react-router-dom';
import { getCertificateList } from "actions/certificateActions.jsx";

import Checkbox from "@material-ui/core/Checkbox";
import Check from "@material-ui/icons/Check";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';


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
     let MBSButton=false;
     let SAButton=false;
        if(prop.student.programsa !== undefined){
          state=t("label.project_ambassador")+ " " + t(prop.student.programsa.state)
          if(prop.student.programsa.state == 'state.approved'){
            SAButton=true;
          }
          if(prop.student.programsa.state == 'state.approved' && prop.student.programmbs.state == 'state.approved'){
            MBSButton=true;
            SAButton=true;
          }
        }
        else if(prop.student.programmbs !== undefined){
          state=t("label.project_mbs")+ " " + t(prop.student.programmbs.state)
          if(prop.student.programmbs.state == 'state.approved'){
            MBSButton=true;
          }
        }
        else {
          state=t("label.project_mbs")+ " " + t("state.without_starting")
        }
 
      return {
        id: key, 
        full_name: prop.student.first_name + " " + prop.student.last_name,
        status:state,
        MBScertificate: (
          <div className="actions-left">   
          {MBSButton 
          ?    
            <Button
              size="sm"
              color="info"
              href={"https://myplatform.interweavesolutions.org/certificate/mbs?id=" + prop.student.id}
            >
              {t('button.certificate_mbs')}
            </Button>
          :
            "Certificate Not Available"
          }      
          </div>
        ),
        SAcertificate:(
          <div className="actions-left">
          {SAButton ?
          <Button
            size="sm"
            color="success"
            href={"https://myplatform.interweavesolutions.org/certificate/ambassador?id=" + prop.student.id}
          >
            {t('button.certificate_ambassador')}
          </Button>
          :
            "Certificate Not Available"
          }
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
                  Header: t("th.certificate_mbs"),
                  accessor: "MBScertificate",
                },
                {
                  Header: t("th.certificate_ambassador"),
                  accessor: "SAcertificate",
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
                        "full_name",
                      ], threshold: matchSorter.rankings.WORD_STARTS_WITH
                    });
                    return result;
                  },
                  filterAll: true,
                }
              ]}
              defaultPageSize={6}
              showPaginationTop={false}
              showPaginationBottom={true}
              className="-striped -highlight"
          />
           <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Button color="warning" size="sm">
                      {t("button.download_all_attendance_certificates")}
                      </Button>
                      {" "}
                      <Button color="info" size="sm">
                      {t("button.download_all_mbs_certificates")}
                      </Button>
                      {" "}
                      <Button color="success" size="sm">
                      {t("button.download_all_ambassador_certificates")}
                      </Button>
                      {" "}
                      <Button color="danger" size="sm">
                      {t("button.approve_selected_certificates")}
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

