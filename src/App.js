import React from 'react';
import './App.css';
// import 'fontsource-roboto';

import Button from '@material-ui/core/Button';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e0f7fa'
    }
  },
});

// function openResume() {
//   window.open()
// }

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div class="home">
        <div class="bg">
          <div class="group1">
            <div class="hello">
              Hi! I'm Sean
            </div>
            <div class="resume">
              <Button 
                style={{ fontSize:'1.2vw' }} 
                color="primary" variant="outlined"
                onClick={() => console.log("hello")}>
                  Resume  
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
