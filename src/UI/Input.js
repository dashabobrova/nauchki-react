import React, { forwardRef } from "react";
import TextField from "@material-ui/core/TextField";
import { styled } from '@material-ui/core/styles';

const SearchBox = styled(TextField)(() => ({
    '& fieldset': {
      borderRadius: '40px',
    },
  }));

export const Input = forwardRef((props, ref) => {


    return (
        <SearchBox 
            variant="outlined" 
            margin="normal" 
            inputRef={ref} 
            fullWidth
            {...props} 
        />
    )
})