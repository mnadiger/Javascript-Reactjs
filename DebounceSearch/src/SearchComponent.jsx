import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DisplaySearchComponent from './DisplaySearchComponent';

const SearchComponent = () => {
  const [selected, setSelected] = useState("");
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <DisplaySearchComponent onSelect={setSelected} />
      <Typography variant="body1" sx={{ mt: 3 }}>
        Search term: {selected}
      </Typography>
    </Box>
  );
};

export default SearchComponent;
