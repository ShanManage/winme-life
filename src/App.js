import './App.css';
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ClientManagement from './pages/ClientManagement';
import SideNav from './components/SideNav';
import Box from '@mui/material/Box';
import TopBar from './components/TopBar';
import CssBaseline from "@mui/material/CssBaseline";
import Container from '@mui/material/Container';

function App() {
  const [clickedTab, setClickedTab] = useState("Client Management");

  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideNav clickedTab={clickedTab} setClickedTab={setClickedTab} />

        <Container maxWidth="xl" className='app-container' >
          <TopBar clickedTab={clickedTab} />

          <ClientManagement />
        </Container>

      </Box>
    </BrowserRouter >
  );
}

export default App;
