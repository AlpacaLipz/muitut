import React from 'react';
import './App.css';
import { LocalizationProvider } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { MuiButton } from './components/MuiButton';
import { MuiTypography } from './components/MuiTypography';
import { MuiTable } from './components/MuiTable';
import { MuiLayout } from './components/MuiLayout';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadio } from './components/MuiRadio';
import { MuiCheckBox } from './components/MuiCheckBox';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiRatings } from './components/MuiRatings';
import { MuiAutoComplete } from './components/MuiAutoComplete';
import { MuiCard } from './components/MuiCard';
import { MuiNavBar } from './components/MuiNavBar';
import { MuiLink } from './components/MuiLink';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiSnackBar } from './components/MuiSnackBar';
import { MuiMasonry } from './components/MuiMasonry';
import { MuiResponsiveness } from './components/MuiResponsiveness';
import { ThemeProvider, Box, createTheme, colors  } from '@mui/material';







const theme = createTheme({
  status: {
    danger: '#212121',
  },
  palette:{
  secondary:{
    main: colors.pink['A400'],
    },
  success:{
    main: colors.grey[900]
  },
  info:{
    main: colors.lightBlue[300]
  },
  text: {
    primary: '#212121',
    secondary: '#212121',
  }
  },
  typography: {
    allVariants: {
      color: 'black'
      
    },
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Box>
      <MuiNavBar  />

      
      {/* <MuiResponsiveness /> */}
        {/* <MuiTypography/> */}
        {/* <MuiButton/> */}
        {/* <MuiTextField />  */}
        {/* <MuiTable />  */}
        {/* <MuiLayout /> */}
        {/* <MuiSelect /> */}
        {/* <MuiRadio /> */}
        {/* <MuiCheckBox /> */}
        {/* <MuiSwitch /> */}
        {/* <MuiRatings /> */}
        {/* <MuiAutoComplete /> */}
        {/* <MuiCard /> */}
        {/* <MuiSnackBar />  */}
        {/* <MuiLink /> */}
        {/* <MuiMasonry /> */}
        
      <MuiBottomNavigation />
    </Box>
    </ThemeProvider>
  );
}
export default App;
