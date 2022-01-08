import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";


const CustomButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 20,
  margin: "2%",
  padding: "6px 12px",
  border: "1px solid",
  lineHeight: 3,
  backgroundColor: "#0063cc",
  borderColor: "#0063cc",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"'
  ].join(","),
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#0062cc",
    borderColor: "#005cbf"
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
  }
});

export default function ActionButton(props) {
  return <CustomButton  variant="contained"  >{props.title}</CustomButton>;
  
}
