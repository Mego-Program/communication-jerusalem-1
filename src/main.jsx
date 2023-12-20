import React from 'react'
import ReactDOM from 'react-dom/client'
import AppCommunication from './AppCommunication.jsx'
import { ThemeProvider } from '@mui/material/styles';
import Theme from './Theme.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={Theme}>
    <AppCommunication />
    </ThemeProvider>

)
