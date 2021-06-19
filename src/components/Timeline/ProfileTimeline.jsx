import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Badge from "components/Badge/Badge.jsx";
import timelineStyle from "assets/jss/material-dashboard-pro-react/components/timelineStyle.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

function Timeline({ ...props }) {
  const { classes, stories, simple } = props;
  
  return (
    <>
      {stories.map((prop, key) => {
        
        return (
          
          <Card>
            <CardBody>
              
                {prop.title ? (
                  <div >
                    <Badge color={prop.titleColor}>{prop.title}</Badge>
                  </div>
                ) : null}
                <div >{prop.body}</div>
                {prop.footerTitle ? (
                  <h6 >{prop.footerTitle}</h6>
                ) : null}
                {prop.footer ? (
                  <div >{prop.footer}</div>
                ) : null}
            </CardBody>
          </Card>
        );
      })}
    </>
  );
}

Timeline.propTypes = {
  classes: PropTypes.object.isRequired,
  stories: PropTypes.arrayOf(PropTypes.object).isRequired,
  simple: PropTypes.bool
};

export default (Timeline);
