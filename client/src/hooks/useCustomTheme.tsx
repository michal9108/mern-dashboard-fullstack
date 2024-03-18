import { useState, useMemo, useEffect } from 'react';
import { useMediaQuery, PaletteMode, createTheme, responsiveFontSizes } from '@mui/material';
import { themeSettings } from '@/theme';

export const useCustomTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [mode, setMode] = useState<PaletteMode>(prefersDarkMode ? 'dark' : 'light');

  useEffect(() => {
    setMode(prefersDarkMode ? 'dark' : 'light');
  }, [prefersDarkMode]);

  const toggleColorMode = () => {
    setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = useMemo(() => {
    let theme = createTheme(themeSettings(mode));
    theme = responsiveFontSizes(theme);
    return theme;
  }, [mode]);

  return { theme, toggleColorMode };
};
