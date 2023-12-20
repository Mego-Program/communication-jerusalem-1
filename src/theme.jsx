import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const Theme = createTheme({
  palette: {
    primary: {
      main: '#F6C927',
    },
    secondary: {
      main: '#0A0A1B'
    },
    background:{
      default:'#21213E',
      paper: '#121231'
    },
    text: {
      primary: '#0A0A1B',
      secondary: 'white',

    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
