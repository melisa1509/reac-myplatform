import React from "react";
// react component for creating dynamic tables
import { connect } from "react-redux";
import { translate } from 'react-switch-lang';
import { VectorMap } from "react-jvectormap";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { getReports, getReportGlobalMap } from "actions/reportActions.jsx";

const us_flag = require("assets/img/flags/US.png");
const mg_flag = require("assets/img/flags/MG.png");

var mapData = {
  CA: 0
};
var CountryEntire=false

class GlobalTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    
    };
    this.saveClick = this.saveClick.bind(this);
    this.saveMaps = this.saveMaps.bind(this);
  }

  saveClick() {
    if(CountryEntire==false){
      CountryEntire=true
      this.props.dispatchGetReportGlobalMap();
    } 
  }
  saveMaps() {
    if(CountryEntire==true){
      CountryEntire=false
      this.props.dispatchGetReportGlobalMap();
    } 
  }
  
  componentWillMount() {
    this.props.dispatchGetReportGlobalMap();
  }
  render() {
    const { report_list, global_map} = this.props;
    let { t } = this.props;
    let vector_map = mapData; 
    if(global_map !== undefined){
      if(global_map.numCountries !== undefined){
        vector_map = global_map.numCountries
      }
    }
    var top_numbers = [];
    global_map.topNumbers.map(( prop, key) => {
      let props = [
                    <img src={require("assets/img/flags/" + prop.flag + ".png")} alt="bo_flag" key={"flag"} />,
                    prop.country,
                    prop.mbs,
                    prop.jr,
                    prop.sa 
                  ];
      top_numbers.push(props);     
    })    

    if(CountryEntire == true){      
     return (
      <GridContainer justify="space-between">
        <GridItem xs={12} sm={12} md={5}>
          <Table
            tableData={
              top_numbers
            }
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={7}>
          <VectorMap
            map={"world_mill"}
            backgroundColor="transparent"
            zoomOnScroll={false}
            containerStyle={{
              width: "100%",
              height: "290px"
            }} 
            containerClassName="map"
            regionStyle={{
              initial: {
                fill: "#e4e4e4",
                "fill-opacity": 0.9,
                stroke: "none",
                "stroke-width": 0,
                "stroke-opacity": 0
              }
            }}
            series={{
              regions: [
                {
                  values: vector_map,
                  scale: ["#A4BDC6", "#153845"],
                  normalizeFunction: "polynomial"
                }
              ]
            }}
            onRegionTipShow = {function(e, el, code){
              el.html(el.html()+' ('+vector_map[code]+')')} 
            }
          />
        </GridItem>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <center>
                <Button color="default" size="sm" onClick={this.saveMaps}>
                {t("button_hide_all_list")}
                </Button>
                {" "}
                </center>
            </GridItem>
        </GridContainer>
      </GridContainer>
    )};
    if(CountryEntire == false){
    return (
      <GridContainer justify="space-between">
        <GridItem xs={12} sm={12} md={5}>
          <Table
            tableData={
              top_numbers === undefined ? 
                [
                  [
                    <img src={us_flag} alt="us_flag" key={"flag"} />,
                    0,
                    0,
                    0,
                    0
                  ],
                  [
                    <img src={mg_flag} alt="mg_flag" key={"flag"} />,
                    0,
                    0,
                    0,
                    0
                  ]
                ]
                :
                top_numbers.slice(0,9)
            }
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={7}>
          <VectorMap
            map={"world_mill"}
            backgroundColor="transparent"
            zoomOnScroll={false}
            containerStyle={{
              width: "100%",
              height: "290px"
            }}
            containerClassName="map"
            regionStyle={{
              initial: {
                fill: "#e4e4e4",
                "fill-opacity": 0.9,
                stroke: "none",
                "stroke-width": 0,
                "stroke-opacity": 0
              }
            }} 
            series={{
              regions: [
                {
                  values: vector_map,
                  scale: ["#A4BDC6", "#153845"],
                  normalizeFunction: "polynomial"
                }
              ]
            }}            
            onRegionTipShow = {function(e, el, code){
              el.html(el.html()+' ('+vector_map[code]+')')} 
            }
          />
        </GridItem>
        <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
                <center>
                <Button color="default" size="sm" onClick={this.saveClick}>
                {t("button_show_entire_list")}
                </Button>
                {" "}
                </center>
            </GridItem>
        </GridContainer>
      </GridContainer>
    )};
  }
}

const mapStateToProps = state => ({ 
    report_list: state.reportReducer.report_list,
    global_map: state.reportReducer.report_global_map
});

const mapDispatchToPropsActions = dispatch => ({
  dispatchGetReports: () => dispatch( getReports() ),
  dispatchGetReportGlobalMap: () => dispatch( getReportGlobalMap() )
});

const GlobalTableComponent = translate(GlobalTable);
export default connect(mapStateToProps, mapDispatchToPropsActions)(GlobalTableComponent);

