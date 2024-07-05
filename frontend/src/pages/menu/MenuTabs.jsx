import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Food from './Food';
import Drinks from './Drinks';

export default function MenuTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper', marginTop: '2rem' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Food" sx={{fontFamily: 'Philosopher'}}/>
        <Tab label="Drinks" sx={{fontFamily: 'Philosopher'}}/>
      </Tabs>
      {value === 0 && <Food />}
      {value === 1 && <Drinks />}
    </Box>
  );
}
