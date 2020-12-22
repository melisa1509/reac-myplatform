import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import ReactTable from "react-table";
import { connect } from "react-redux";
import { getAmbassadorStatistics } from "actions/reportActions.jsx";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// @material-ui/icons
import Create from "@material-ui/icons/Create";
import Visibility from "@material-ui/icons/Visibility";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import matchSorter from 'match-sorter';
import Participants from "views/Reports/Options/Participants/AmbassadorTable.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";

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
    const { ambassador_statistics, loading,classes } = this.props;
    let { t } = this.props;
    return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={12}>
      <div>
      <CustomTabs
        headerColor="info"
        tabs={[
          {
            tabName: t("link_participants"),
            tabIcon: Face,
            tabContent: (
              <p className={classes.textCenter}>
                <Participants/>
              </p>
            )
          },
          {
            tabName: "Messages",
            tabIcon: Chat,
            tabContent: (
              <p className={classes.textCenter}>
                I think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that
                things could be at. I will be the leader of a company
                that ends up being worth billions of dollars, because
                I got the answers. I understand culture. I am the
                nucleus. I think that’s a responsibility that I have,
                to push possibilities, to show people, this is the
                level that things could be at.
              </p>
            )
          },
          {
            tabName: "Settings",
            tabIcon: Build,
            tabContent: (
              <p className={classes.textCenter}>
                think that’s a responsibility that I have, to push
                possibilities, to show people, this is the level that
                things could be at. So when you get something that has
                the name Kanye West on it, it’s supposed to be pushing
                the furthest possibilities. I will be the leader of a
                company that ends up being worth billions of dollars,
                because I got the answers. I understand culture. I am
                the nucleus.
              </p>
            )
          }
        ]}
      />
    </div>
        </GridItem>
      </GridContainer>
    );
  }
}
  

const mapStateToProps = state => ({ 
      ambassador_statistics: state.reportReducer.ambassador_statistics, 
      loading: state.reportReducer.loading
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetAmbassadorStatistics: () => dispatch( getAmbassadorStatistics() )
});

const IndexTableComponent = translate(withStyles(styles)(IndexTable));
export default connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent);

