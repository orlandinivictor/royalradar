import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Routes from './routes';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#0e2058',
        contrastText: '#fff',
      }
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1600,
      }
    },
    typography: {
      fontFamily: "'Inter','Roboto','Helvetica','Arial',sans-serif"
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
