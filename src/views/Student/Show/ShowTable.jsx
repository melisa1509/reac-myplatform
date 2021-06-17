import React from "react";
import { translate } from 'react-switch-lang';
import { Link } from "react-router-dom";

// react component for creating dynamic tables
import { connect } from "react-redux";
import { showStudent } from "actions/studentActions.jsx";
import { deleteStudent } from "actions/studentActions.jsx";
import { showGrantUser} from "actions/grantActions.jsx";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Accordion from "components/Accordion/Accordion.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Table from "components/Table/Table.jsx";

import { withRouter } from 'react-router-dom';
import { monthDate } from "assets/functions/general";
import Timeline from "./Timeline";

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
};

class ShowTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
     this.deleteClick = this.deleteClick.bind(this);
    }

    deleteClick() {
      this.props.dispatchDeleteStudent(this.props.match.params.id, this.props.history);
    }
    componentDidMount() {
      this.props.dispatchShowStudent(this.props.match.params.id);
      this.props.dispatchShowGrantUser(this.props.match.params.id);
    }

    render() {
        const { show_student, show_grant_user } = this.props;
        let { t } = this.props;
        let group_id = show_student.studentgroup === undefined ? "" : show_student.studentgroup.group.id;
        const tableGroup = 
                          (  
                            <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={12}>
                                  <Table
                                    tableHead={[t("option.program1")]}
                                    striped
                                    tableData={[
                                      [<th>{t("label_group")}</th>, show_student.studentgroup === undefined ? "" : show_student.studentgroup.group.name],    
                                    ]}
                                  />
                                  <Table
                                    tableHead={[t("option.program2")]}
                                    striped
                                    tableData={[
                                      [<th>{t("label_group")}</th>, show_student.studentambassadorgroup === undefined ? "" : show_student.studentambassadorgroup.group.name],    
                                    ]}
                                  />
                                </GridItem>
                            </GridContainer>
                          );

        const data = show_grant_user.map((prop, key) => {
     
          return (
           
                <Table
                  striped
                  tableHead={[prop.grantambassador.grant.title]}
                  tableData={[
                    [<th>{t("label_group")}</th>,prop.group.name],    
                    [<th>{t("label_ambassador")}</th>,prop.grantambassador.ambassador.first_name + " " + prop.grantambassador.ambassador.last_name],
                    [<th>{t("label_date")}</th>,monthDate(prop.grantambassador.created_at)],
                    [<th>{t("label_type_grant")}</th>,t(prop.grantambassador.grant.type)],
                  ]}
                />
             
          );
        });

       

        return (
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={11}>
              <GridItem xs={12} sm={12} md={12}>
              </GridItem>
            <Table
              striped
              tableHead={[]}
              tableData={[
                [<th>{t("label_email")}</th>,<p>{show_student.username}</p>],
                [<th>{t("label_name")}</th>,show_student.first_name],
                [<th>{t("label_lastName")}</th>,show_student.last_name],
                [<th>{t("label_country")}</th>,show_student.country],
                [<th>{t("label_city")}</th>, show_student.city],
                [<th>{t("label_whatsapp")}</th>, show_student.whatsapp],
                [<th>{t("label_language")}</th>,  show_student.language],
              ]}
            />
            
              <br/>
              <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={12}>
                    <Accordion
                        active={-1}
                        collapses={[
                          {
                            title: t("link_participant_follow_up"),
                            content: <Timeline/>                                 
                          }
                        ]}
                    />
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Accordion
                        active={-1}
                        collapses={[
                          {
                            title: t("link_groups"),
                            content: tableGroup                                  
                          }
                        ]}
                    />
                  </GridItem>
              </GridContainer>
              <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <Accordion
                        active={-1}
                        collapses={[
                          {
                            title: t("link_grants"),
                            content: data                                  
                          }
                        ]}
                    />
                  </GridItem>
              </GridContainer>
              <br/>
             <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                      <center>
                      <Link to={"/group/student/" + group_id  }>
                      <Button color="default" size="sm">
                      {t("button_return_to_list")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Link to={"/student/edit/" + show_student.id}>
                      <Button color="rose" size="sm">
                      {t("button_edit")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Link to={"/student/editpassword/" + show_student.id}>
                      <Button color="warning" size="sm">
                      {t("button_change_password")}
                      </Button>
                      {" "}
                      </Link>{" "}
                      <Button color="danger" size="sm" onClick={this.deleteClick}>
                      {t("button_delete")}
                      </Button>
                      {" "}
                      <Link to={"/student/new/" + group_id}>
                      <Button color="info" size="sm">
                      {t("button_create_new")}
                      </Button>
                      </Link>
                      </center>
                  </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
                
        );
    }
}
const mapStateToProps = state => ({ 
  show_student: state.studentReducer.show_student,
  delete_student: state.studentReducer.delete_student, 
  successful_delete: state.generalReducer.successful_delete,
  show_grant_user: state.grantReducer.show_grant_user
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchShowStudent: key => dispatch(showStudent(key)), 
  dispatchDeleteStudent: (key, history) => dispatch(deleteStudent(key, history)),
  dispatchShowGrantUser: key => dispatch(showGrantUser(key))
});

const ShowTableComponent = translate(withStyles(style)(ShowTable));
export default withRouter(connect(mapStateToProps, mapDispatchToPropsActions)(ShowTableComponent));


