import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./context/SocketContext.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { baseVars } from './theme/theme.js';


const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ':root': baseVars,
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <SocketProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </SocketProvider>
    </AuthProvider>
  </BrowserRouter>
);
