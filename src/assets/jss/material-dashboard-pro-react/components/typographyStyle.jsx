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
  defaultFont,
  primaryColor,
  infoColor,
  successColor, 
  warningColor,
  dangerColor,
  grayColor
} from "assets/jss/material-dashboard-pro-react.jsx";

const typographyStyle = {
  defaultFontStyle: {
    ...defaultFont,
    fontSize: "14px"
  },
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid" + grayColor[8]
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: grayColor[1]
  },
  mutedText: {
    color: grayColor[1]
  },
  mutedBoldText: {
    color: grayColor[1],
    fontWeight: "450"
  },
  primaryText: {
    color: primaryColor[0]
  },
  infoText: {
    color: infoColor[0]
  },
  infoBoldText: {
    color: infoColor[0],
    fontWeight: "420"
  },
  successText: {
    color: successColor[0]
  },
  warningText: {
    color: warningColor[0]
  },
  dangerText: {
    color: dangerColor[0]
  },
  successBoldText: {
    color: successColor[0],
    fontWeight: "400"
  },
  successLabelText: {
    color: successColor[0],
    fontWeight: "400",
    fontSize: "10px"
  }
};

export default typographyStyle;
