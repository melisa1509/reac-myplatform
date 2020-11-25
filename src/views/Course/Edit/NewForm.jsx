import React from "react";
import PropTypes from "prop-types";
import { translate } from 'react-switch-lang';

// react component for creating dynamic tables
import { connect } from "react-redux";
import { newCourse } from "actions/courseActions.jsx";
import { store } from "store";
import { Editor } from '@tinymce/tinymce-react';


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from 'components/CustomInput/CustomInput.jsx';
import LanguageSelect from "views/Select/LanguageSelect.jsx";
import StateSelect from "views/Select/StateSelect.jsx";
// style for this view
import validationFormsStyle from "assets/jss/material-dashboard-pro-react/views/validationFormsStyle.jsx";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

import { verifyChange } from "assets/validation/index.jsx";
import { createBrowserHistory } from "history";
import { withRouter } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


const history = createBrowserHistory();

const style = {
    infoText: {
      fontWeight: "300",
      margin: "10px 0 30px",
      textAlign: "center"
    },
    inputAdornmentIcon: {
      color: "#555"
    },
    choiche: {
      textAlign: "center",
      cursor: "pointer",
      marginTop: "20px"
    },
    ...customSelectStyle,
    ...validationFormsStyle
};

// fake data generator
const getItems = count =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k}`,
    content: `item ${k}`
  }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? "lightgreen" : "grey",

  // styles we need to apply on draggables
  ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "lightblue" : "lightgrey",
  padding: grid,
  width: 250
});




class NewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          items: getItems(10)
        };
        this.onDragEnd = this.onDragEnd.bind(this);
       
      }
     
      onDragEnd(result) {
        // dropped outside the list
        if (!result.destination) {
          return;
        }
    
        const items = reorder(
          this.state.items,
          result.source.index,
          result.destination.index
        );
    
        this.setState({
          items
        });
      }

    componentWillUnmount() {
      localStorage.setItem('someSavedState', JSON.stringify(this.state))
    }

    componentWillMount() {
      const rehydrate = JSON.parse(localStorage.getItem('someSavedState'))
      this.setState(rehydrate)
    }


    render() {
        const { classes, styles } = this.props;
        let { t } = this.props;
        const login = "es";
        
        
        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={12}>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                  <DragDropContext onDragEnd={this.onDragEnd}>
                        <Droppable droppableId="droppable">
                          {(provided, snapshot) => (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              style={getListStyle(snapshot.isDraggingOver)}
                            >
                              {this.state.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={item.id} index={index}>
                                  {(provided, snapshot) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={getItemStyle(
                                        snapshot.isDragging,
                                        provided.draggableProps.style
                                      )}
                                    >
                                      {item.content}
                                    </div>
                                  )}
                                </Draggable>
                              ))}
                              {provided.placeholder}
                            </div>
                          )}
                        </Droppable>
                      </DragDropContext>
                  </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
                
        );
    }
}

const mapStateToProps = state => ({ 
      
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchNewCourse: params => dispatch(newCourse(params)), 
});

const NewFormComponent = translate(withStyles(style)(NewForm));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(NewFormComponent));



