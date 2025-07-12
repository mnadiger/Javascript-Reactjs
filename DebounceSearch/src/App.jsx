import { useState } from 'react';
import './App.css';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import SearchComponent from './SearchComponent';

function App() {

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
        pt: 6,
      }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Debounce Example
      </Typography>
      <SearchComponent />
    </Box>
  );
}

export default App
