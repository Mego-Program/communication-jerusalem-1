import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const theme = createTheme({
  palette: {
    first: {
      yellow: '#F6C927',
      grey: '#21213E'
    },
    second: {
      blueA: '#121231',
      blueB: '#0A0A1B'
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;