/*!

=========================================================
* Material Dashboard PRO React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  hexToRgb
} from "assets/jss/material-dashboard-pro-react.jsx";

const customLinearProgressStyle = {
  root: {
    height: "4px",
    marginBottom: "20px",
    overflow: "hidden"
  },
  bar: {
    height: "4px"
  },
  primary: {
    backgroundColor: primaryColor[0]
  },
  warning: {
    backgroundColor: warningColor[0]
  },
  danger: {
    backgroundColor: dangerColor[0]
  },
  success: {
    backgroundColor: successColor[0]
  },
  info: {
    backgroundColor: infoColor[0]
  },
  rose: {
    backgroundColor: roseColor[0]
  },
  gray: {
    backgroundColor: grayColor[0]
  },
  primaryBackground: {
    background: "rgba(" + hexToRgb(primaryColor[0]) + ", 0.2)"
  },
  warningBackground: {
    background: "rgba(" + hexToRgb(warningColor[0]) + ", 0.2)"
  },
  dangerBackground: {
    background: "rgba(" + hexToRgb(dangerColor[0]) + ", 0.2)"
  },
  successBackground: {
    background: "rgba(" + hexToRgb(successColor[0]) + ", 0.2)"
  },
  infoBackground: {
    background: "rgba(" + hexToRgb(infoColor[0]) + ", 0.2)"
  },
  roseBackground: {
    background: "rgba(" + hexToRgb(roseColor[0]) + ", 0.2)"
  },
  grayBackground: {
    background: "rgba(" + hexToRgb(grayColor[5]) + ", 0.2)"
  }
};

export default customLinearProgressStyle;
