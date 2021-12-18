import {  createMuiTheme, createTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Create from './Pages/Create';
import Notes from './Pages/Notes';

const theme = createTheme({
  palette: {
    primary: {
      main: '#f50057'
    },
    secondary: {
      main: '#9c27bO'
    } 
  },
  typography: {
    fontFamily: 'QuickSand',
    fontWeightLight: 300,
   fontWeightRegular: 400,
   fontWeightMedium: 500,
   fontWeightBold: 700
  }

})


function App() {
  
  return (
  
  <div className="App">

      <BrowserRouter>
      <ThemeProvider theme={theme}>
      <Layout>
      <Routes>
       
       
        
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/" element={<Notes></Notes>}></Route>
        
        
       

        
      </Routes>
      </Layout>
      </ThemeProvider>
      </BrowserRouter>
    {/*   <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
