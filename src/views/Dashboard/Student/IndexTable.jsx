import React from "react";
import PropTypes from "prop-types";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { getAmbassadorList } from "actions/ambassadorActions.jsx";
import { translate } from 'react-switch-lang';
import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { Link } from "react-router-dom";

// @material-ui/icons
import Domain from "@material-ui/icons/Domain";
import AccountBalance from "@material-ui/icons/AccountBalance";
import Timeline from "@material-ui/icons/Timeline";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";
import FileCopy from "@material-ui/icons/FileCopy";
import AccessibityNew from "@material-ui/icons/AccessibilityNew";
import PanTool from "@material-ui/icons/PanTool";
import Face from "@material-ui/icons/Face";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import Button from "components/CustomButtons/Button.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import Muted from "components/Typography/Muted.jsx"


const styles = {
  cardIconTitle:{
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "10px"
  },
    ...dashboardStyle,
};


class IndexTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
  }

  

  componentDidMount() {
    this.props.dispatchGetAmbassadorList();
    
  }
 
  render() {
    const { classes } = this.props;
    let { t } = this.props;
            
    
    
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={3} lg={3}>
        <Link to="/" className={classes.dropdownLink}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>account_balance</Icon>
              </CardIcon>
                <p className={classes.cardCategory}>{t("title_plan")}</p>
                <br/>
                <Muted><h3>{32 + "%"}</h3></Muted>
            </CardHeader>            
          </Card>
          </Link>
        </GridItem>
        <GridItem xs={12} sm={12} md={3} lg={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>domain</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>{t("title_product")}</p>
              <br/>
              <Muted><h3>{32 + "%"}</h3></Muted>
            </CardHeader>             
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3} lg={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>timeline</Icon>
              </CardIcon>
                <p className={classes.cardCategory}>{t("title_process")}</p>
                <br/>
                <Muted><h3>{32 + "%"}</h3></Muted>
            </CardHeader>            
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3} lg={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>monetization_on</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>{t("title_price")}</p>
              <br/>
              <Muted><h3>{32 + "%"}</h3></Muted>
            </CardHeader>           
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3} lg={3}>
        <Link to="/" className={classes.dropdownLink}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>record_voice_over</Icon>
              </CardIcon>
                <p className={classes.cardCategory}>{t("title_promotion")}</p>
                <br/>
                <Muted><h3>{32 + "%"}</h3></Muted>
            </CardHeader>            
          </Card>
          </Link>
        </GridItem>
        <GridItem xs={12} sm={12} md={3} lg={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Icon>file_copy</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>{t("title_paperwork")}</p>
              <br/>
              <Muted><h3>{32 + "%"}</h3></Muted>
            </CardHeader>             
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3} lg={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>accessibility_new</Icon>
              </CardIcon>
                <p className={classes.cardCategory}>{t("title_quality_life")}</p>
                <Muted><h3>{32 + "%"}</h3></Muted>
            </CardHeader>            
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={3} lg={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>pan_tool</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>{t("title_service")}</p>
              <br/>
              <Muted><h3>{32 + "%"}</h3></Muted>
            </CardHeader>           
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

const mapStateToProps = state => ({ 
      ambassador_list: state.ambassadorReducer.ambassador_list, 
      loading: state.ambassadorReducer.loading
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetAmbassadorList: () => dispatch( getAmbassadorList() ),
  
});

const IndexTableComponent = translate(withStyles(styles)(IndexTable));
export default connect(mapStateToProps, mapDispatchToPropsActions)(IndexTableComponent);

