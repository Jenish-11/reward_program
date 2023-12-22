import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import configureAppStore from "./redux/store.js";
import { ThemeProvider } from "@mui/material";
import { themeOptions } from "./theme/theme.js";
import CssBaseline from "@mui/material/CssBaseline";
const store = configureAppStore();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={themeOptions}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
