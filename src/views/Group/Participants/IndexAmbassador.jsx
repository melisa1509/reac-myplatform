import React from "react";
// react component for creating dynamic tables

import ReactTable from "react-table";
import matchSorter from 'match-sorter';
import { connect } from "react-redux";
import { translate } from 'react-switch-lang';
import { withRouter } from 'react-router-dom';
import { getCertificateList } from "actions/certificateActions.jsx";
import { uploadImageAlert } from "actions/groupActions.jsx";
import SweetAlert from "react-bootstrap-sweetalert";
import NewForm from './NewForm.jsx';

import Create from "@material-ui/icons/Create";
import withStyles from "@material-ui/core/styles/withStyles";
import Visibility from "@material-ui/icons/Visibility";
import Close from "@material-ui/icons/Close";

// core components
import Warning from "components/Typography/Warning.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import sweetAlertStyle from "assets/jss/material-dashboard-pro-react/views/sweetAlertStyle.jsx";
import { Link } from "react-router-dom";


const styles = {
  ...sweetAlertStyle
};

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
    this.imageAlert = this.imageAlert.bind(this);
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

  imageAlert(){
    this.props.dispatchUploadImageAlert();
  }
 
  render() {
    const { certificate_list, image_alert, pre_alert} = this.props;
    let { t } = this.props;
    const data = certificate_list.map((prop, key) => {
        let buttonMbs = false;
        let name=""
        let evaluation=false;
        let actions=false;
        let project=false;
        if(prop.student.programmbs == undefined){
          name = prop.student.first_name + " " + prop.student.last_name 
          evaluation = true
          actions = true
          project = true
        }
        else if(prop.student.programmbs.modality == "option.modality1"){
          name = prop.student.first_name + " " + prop.student.last_name 
          evaluation = true
          actions = true
          project = true

          if(prop.student.programmbs.filestudent !== undefined){
            buttonMbs =  true
          } 
        }
      return {
        id: key, 
        full_name:name,
        evaluation:(
          <div className="actions-left">
            {evaluation ?
              <Button
                onClick={this.imageAlert}
                size="sm"
                color="default" 
              >
                {t('button_pre_evaluation')}
              </Button>
            : null}
            {evaluation ?
              <Button
                size="sm"
                color="default" 
              >
                {t('button_post_evaluation')}
              </Button>
            : false}
          </div>
        ),
        projects: (
          <div className="actions-left">
            {project ?
              <Button
                onClick={this.imageAlert}
                size="sm"
                color={buttonMbs==true ? "warning" : "default" }
              >
                {t('button_mbs')}
              </Button>
            : false}
          </div>
        ),
        actions:(
          <div className="actions-left">
           {actions ? <div>
          <Link to={"/student/show/" + prop.student.id}>
            <Button
              justIcon
              round4
              simple
              color="info"
            >
              <Visibility />
            </Button>
          </Link>{" "}
          <Link to={"/student/edit/" + prop.student.id}>
            <Button
              justIcon
              round
              simple             
              color="warning"
            >
              <Create />
            </Button>
          </Link>{" "}
          <Link to={"/student/show/" + prop.student.id}>
            <Button
              justIcon
              round
              simple            
              color="danger"
            >
              <Close />
            </Button>
            </Link>
            </div>: false}
        </div>
      )
      };
    });
    
    return (
      <GridContainer>
        <GridItem xs={12}>
            {image_alert ? 
              <SweetAlert
                  style={{ display: "block", marginTop: "-100px" }}
                  onConfirm={() => this.hideAlert()}
                  onCancel={() => this.hideAlert()}
                  confirmBtnText={t("button_save")}
                  confirmBtnCssClass={
                      this.props.classes.button + " " + this.props.classes.success
                  }
                  >
                  <h4>{t("title_upload_mbs")}</h4>
                  <Warning>{t("label_compress_file")}</Warning>
                  <br/>
                  <NewForm/>
              </SweetAlert>
            : ""}
             {pre_alert ? 
              <SweetAlert
                  style={{ display: "block", marginTop: "-100px" }}
                  onConfirm={() => this.hideAlert()}
                  onCancel={() => this.hideAlert()}
                  confirmBtnText={t("button_save")}
                  confirmBtnCssClass={
                      this.props.classes.button + " " + this.props.classes.success
                  }
                  >
                  <h4>{t("title_pre_evaluation")}</h4>
              </SweetAlert>
            : ""}
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
                  Header: t("th_name"),
                  accessor: "full_name",
                  width:250
                },
                {
                  Header: t("th_evaluation"),
                  accessor: "evaluation",
                },
                {
                  Header: t("th_projects"),
                  accessor: "projects",
                },
                {
                  Header: t("th_actions"),
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
                        {t("button_return_to_list")}
                        </Button>
                        {" "}
                      </Link>{" "}
                      <Button color="warning" size="sm">
                      {t("button_export_list")}
                      </Button>
                      {" "}
                      <Link to={"/student/new/" + this.props.match.params.id}>
                      <Button color="info" size="sm">
                      {t("button_create_new")}
                      </Button>
                      </Link>
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
      image_alert: state.groupReducer.image_alert,
      pre_alert: state.groupReducer.pre_alert,
      active_user: state.loginReducer.active_user,
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetCertificateList: (key) => dispatch( getCertificateList(key)),
  dispatchUploadImageAlert: () => dispatch( uploadImageAlert())
});

const IndexTableComponent = translate(withStyles(styles)(IndexTable));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent));

