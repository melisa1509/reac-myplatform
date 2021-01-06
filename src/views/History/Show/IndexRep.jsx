import React from "react";
import PropTypes from "prop-types";
// react component for creating dynamic tables
import { connect } from "react-redux";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import IndexTable from './IndexTable.jsx';

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";
import { translate } from 'react-switch-lang';
import { withRouter } from 'react-router-dom';


const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  } 
};


class IndexRep extends React.Component {
 

  render() {
    const { classes,success_story } = this.props;
    let { t } = this.props;
    const login = "es";
    let name="";
    const data = success_story.map((prop, key) => {
    if(this.props.match.params.id==prop.student.programmbs.id){
      name= prop.student.first_name + " " + prop.student.last_name
    }
    })
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={10}>
          <Card>
            <CardHeader color="info">
                <h4 className={classes.cardTitle}>{t("title_history")+" "+"/"+" "+name}</h4>
            </CardHeader>
            <CardBody>
                 <IndexTable  />    
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

IndexRep.propTypes = {
  classes: PropTypes.object,
};
const mapStateToProps = state => ({ 
  success_story: state.studentReducer.success_story,
  programmbs: state.programmbsReducer.programmbs
});

const mapDispatchToPropsActions = dispatch => ({
});

const IndexRepComponent = translate(withStyles(styles)(IndexRep));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(IndexRepComponent));