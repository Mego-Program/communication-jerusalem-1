import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    primary: {
      main: '#F6C927',
    },
    secondary: {
      main: '#0A0A1B'
    },
    background:{
      main:'#21213E'
    },
    text: {
      main:'#121231'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
