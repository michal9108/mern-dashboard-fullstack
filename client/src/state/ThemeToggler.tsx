import React, { useContext } from 'react';
import { IconButton, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { ColorModeContext }from  './ColorModeContext';
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material';

export default function ThemeToggler() {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 0,
      }}
    >
     
      <IconButton
        sx={{ fontSize: "25px" }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === 'dark' ? (
          <LightModeOutlined />
        ) : (
          <DarkModeOutlined />
        )}
      </IconButton>
    </Box>
  );
}