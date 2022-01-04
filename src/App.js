import {  createMuiTheme, createTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Create from './Pages/Create';
import DonationForm from './Pages/DonationForm';
import Notes from './Pages/Notes';
import RegisterForm from './Pages/RegisterForm';
import RegularForm from './Pages/RegularForm';

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
         
      {/*  <RegularForm></RegularForm> */}
      <DonationForm></DonationForm>
        
     {/*  <Layout>
      <Routes>
        
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/notes" exact element={<Notes></Notes>}></Route>
        
        
        
       

        
      </Routes>
      </Layout> */}
      </ThemeProvider>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
