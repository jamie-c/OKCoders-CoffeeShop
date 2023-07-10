import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--very-dark-color)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--very-dark-color)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--very-dark-color)',
    },
  },
});

export default function FormInput() {
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: 'grid',
        gridTemplateColumns: { sm: '1fr 1fr' },
        gap: 2,
      }}
    >
      <FormControl variant="standard">
      <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
      <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
      <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
      <CssTextField label="Custom CSS" id="custom-css-outlined-input" />
      </FormControl>
    </Box>
  );
}