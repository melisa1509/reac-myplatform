import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { getAmbassadorStatistics } from "actions/reportActions.jsx";
import { translate } from 'react-switch-lang';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";

import Muted from "components/Typography/Muted.jsx"
import Card from "components/Card/Card.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Button from "components/CustomButtons/Button.jsx";

import Participants from "views/Reports/Options/Participants/ParticipantsTable.jsx";
import Groups from "views/Reports/Options/Groups/IndexAmbassador.jsx";
import IndexAmbassadorTable from 'views/Reports/IndexAmbassadorTable.jsx';
import AmbassadorTableReports from 'views/Reports/AmbassadorTableReports.jsx';
import DashboardAmbassador from 'views/Reports/Options/Dashboard/DashboardAmbassador.jsx';
import Histories from 'views/History/IndexTable.jsx';

import Dashboard from "@material-ui/icons/Dashboard";
import Icon from "@material-ui/core/Icon";
import Face from "@material-ui/icons/Face";
import Group from "@material-ui/icons/Group";
import Equalizer from "@material-ui/icons/Equalizer";
import School from "@material-ui/icons/School";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import AmbaJRTableReports from "../AmbaJRTableReports";



const styles = {
  textCenter: {
    
  }
};


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
    const { ambassador_statistics,classes } = this.props;
    let { t } = this.props;
    var name
    const name_ambassador= ambassador_statistics.map((prop, key) => {
      if(this.props.match.params.id==prop.id){
        name= prop.first_name + " " + prop.last_name
      }
    })
    return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={12}>
      <div>
      <CustomTabs
        title= {t("link_reports") +" "+ " / " + " " + name}
        headerColor="info"
        tabs={[
          {
            tabName: t("link_dashboard"),
            tabIcon: Dashboard,
            tabContent: (
              <p className={classes.textCenter}>
                <DashboardAmbassador/>
                <br/>
                <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                  <center>
                      <Link to={"/report/ambassadorstatistics"}>
                      <Button color="success" size="sm">
                      {t("button_return_to_list")}
                      </Button>
                      </Link>
                  </center>
                  </GridItem>
                </GridContainer>
              </p>   
            ),
          },
          {
            tabName: t("link_participants"),
            tabIcon: Face,
            tabContent: (
              <p className={classes.textCenter}>
                <Participants/>
                <br/>
                <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                  <center>
                      <Link to={"/report/ambassadorstatistics"}>
                      <Button color="success" size="sm">
                      {t("button_return_to_list")}
                      </Button>
                      </Link>
                  </center>
                  </GridItem>
                </GridContainer>
              </p>
            ),
            rtlActive:true
          },
          {
            tabName: t("link_groups"),
            tabIcon: Group,
            tabContent: (
              <p className={classes.textCenter}>
                <Groups/>
                <br/>
                <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                  <center>
                      <Link to={"/report/ambassadorstatistics"}>
                      <Button color="success" size="sm">
                      {t("button_return_to_list")}
                      </Button>
                      </Link>
                  </center>
                  </GridItem>
                </GridContainer>
              </p>
            )
          },
          {
            tabName: t("th_evaluation"),
            tabIcon: Equalizer,
            tabContent: (
              <p className={classes.textCenter}>
                <Card>
                  <CardHeader icon >
                    <CardIcon color="success">
                      <Icon>dns</Icon>
                    </CardIcon>
                    <Muted>
                      <h4>{t("title_number_people_improvement")}</h4>
                    </Muted>
                  </CardHeader>
                  <CardBody>
                      <AmbassadorTableReports/>   
                  </CardBody>
                </Card>
                <br/>
                <Card>
                  <CardHeader icon >
                    <CardIcon color="danger">
                      <Icon>dns</Icon>
                    </CardIcon>
                    <Muted>
                      <h4>{t("title_number_people_improvement")}</h4>
                    </Muted>
                  </CardHeader>
                  <CardBody>
                    <AmbaJRTableReports/>   
                  </CardBody>
                </Card>
                <br/>
                <Card>
                  <CardHeader icon >
                    <CardIcon color="rose">
                      <Icon>equalizer</Icon>
                    </CardIcon>
                    <Muted>
                      <h4>{t("title_evaluation_statistics")}</h4>
                    </Muted>
                  </CardHeader>
                  <CardBody>
                    <IndexAmbassadorTable/>   
                  </CardBody>
                </Card>
                <br/>
                <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                  <center>
                      <Link to={"/report/ambassadorstatistics"}>
                      <Button color="success" size="sm">
                      {t("button_return_to_list")}
                      </Button>
                      </Link>
                  </center>
                  </GridItem>
                </GridContainer>
              </p>
            )
          },
          {
            tabName: t("link_success_story"),
            tabIcon: School,
            tabContent: (
              <p className={classes.textCenter}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                      <Histories/>
                  </GridItem>
                </GridContainer>
                <br/>
                <GridContainer >
                  <GridItem xs={12} sm={12} md={12}>
                  <center>
                      <Link to={"/report/ambassadorstatistics"}>
                      <Button color="success" size="sm">
                      {t("button_return_to_list")}
                      </Button>
                      </Link>
                  </center>
                  </GridItem>
                </GridContainer>
              </p>
            )
          },
        ]}
      />
    </div>
        </GridItem>
      </GridContainer>
    );
  }
}
  

const mapStateToProps = state => ({ 
      name_ambassador:state.reportReducer.name_ambassador,
      student_ambassador_list: state.studentReducer.student_ambassador_list,
      ambassador_statistics: state.reportReducer.ambassador_statistics, 
      loading: state.reportReducer.loading
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetAmbassadorStatistics: () => dispatch( getAmbassadorStatistics() )
});

const IndexTableComponent = translate(withStyles(styles)(IndexTable));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent));

