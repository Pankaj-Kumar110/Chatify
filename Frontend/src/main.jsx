// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";
// import { AuthProvider } from "./context/AuthProvider.jsx";
// import { BrowserRouter } from "react-router-dom";
// import { SocketProvider } from "./context/SocketContext.jsx";
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <BrowserRouter>
//     <AuthProvider>
//       <SocketProvider>
//         <App />
//       </SocketProvider>
//     </AuthProvider>
//   </BrowserRouter>
// );


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./context/AuthProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { SocketProvider } from "./context/SocketContext.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';

// Create a custom theme (optional)
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
