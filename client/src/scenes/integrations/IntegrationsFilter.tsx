import * as React from 'react';
import Card from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material';


export function IntegrationsFilter(): React.JSX.Element {

  const theme=  useTheme();



  return (
    <Card sx={{ p: 2, m:3,}} style={{backgroundColor: theme.palette.secondary.dark}}>
      <OutlinedInput
      
        defaultValue=""
        fullWidth
        placeholder="Search integration"
        startAdornment={
          <InputAdornment position="start" >
            <SearchIcon  />
          </InputAdornment>
        }
        sx={{ maxWidth: '500px',  backgroundColor:theme.palette.background.default, color:theme.palette.background.default}}
      />
    </Card>
  );
}