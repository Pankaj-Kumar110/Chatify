// src/theme/styles.js
import { createTheme } from '@mui/material/styles';
import { alpha } from '@mui/material/styles';

const theme = createTheme({
  // Customize your theme here
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export const varAlpha = (color, alphaValue) => alpha(color, alphaValue);

export const baseVars = () => ({
  '--layout-nav-bg': theme.palette.common.white,
  '--layout-nav-border-color': varAlpha(theme.palette.grey['500'], 0.08),
  '--layout-nav-zIndex': 1101,
  '--layout-nav-mobile-width': '320px',
  '--layout-nav-item-height': '44px',
  '--layout-nav-item-color': theme.palette.text.secondary,
  '--layout-nav-item-active-color': theme.palette.primary.main,
  '--layout-nav-item-active-bg': varAlpha(theme.palette.primary.main, 0.08),
  '--layout-nav-item-hover-bg': varAlpha(theme.palette.primary.main, 0.16),
  '--layout-header-blur': '8px',
  '--layout-header-zIndex': 1100,
  '--layout-header-mobile-height': '64px',
  '--layout-header-desktop-height': '72px',
});
