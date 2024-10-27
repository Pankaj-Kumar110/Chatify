import { createTheme, alpha } from '@mui/material/styles'; // Added createTheme import
import { varAlpha } from './styles.js'; // Adjust the import path as needed

export const baseVars = (theme) => ({
  // nav
  '--layout-nav-bg': theme.palette.common.white,
  '--layout-nav-border-color': varAlpha(theme.palette.grey['500Channel'], 0.08),
  '--layout-nav-zIndex': 1101,
  '--layout-nav-mobile-width': '320px',
  // nav item
  '--layout-nav-item-height': '44px',
  '--layout-nav-item-color': theme.palette.text.secondary,
  '--layout-nav-item-active-color': theme.palette.primary.main,
  '--layout-nav-item-active-bg': varAlpha(theme.palette.primary.mainChannel, 0.08),
  '--layout-nav-item-hover-bg': varAlpha(theme.palette.primary.mainChannel, 0.16),
  // header
  '--layout-header-blur': '8px',
  '--layout-header-zIndex': 1100,
  '--layout-header-mobile-height': '64px',
  '--layout-header-desktop-height': '72px',
});

// Create a default theme
const theme = createTheme(); // This initializes a default theme

// Export the baseVars function and theme
export { theme };
