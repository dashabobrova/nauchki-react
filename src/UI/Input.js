import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      marginTop: "-10px",
      color: "#0EAC99",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "40px",
        border: "1px solid black",
        color: "black",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #0EAC99",
      },
      "&.Mui-error fieldset": {
        borderColor: "red",
      },
    },
  },
})(TextField);

export const Input = forwardRef((props, ref) => {
  return (
    <CssTextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    />
  );
});
