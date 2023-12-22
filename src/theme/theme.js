import { createTheme } from "@mui/material/styles";

// import { createTheme } from "@mui/material";

export const themeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0038FF",
    },
    secondary: {
      main: "#0038FF",
    },
    text: {
      primary: "#000000",
      fontFamily: "Montserrat",
    },
    background: {
      paper: "#ffffff",
      // default: "#ffffff",
    },
    typography: {
      fontFamily: "Montserrat",
      fontColor: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "no-bg"
            ? {
                background: "none",
                // border: "1",
                borderRadius: 3,
                textTransform: "unset",
                // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                color: "black",
                // height: 48,
                fontSize: "17px",
                boxShadow: " 0px 0px 4px 0px #00000040",
                justifyContent: "space-between",
                // padding: "0px 20px !important",
                ":hover": {
                  background: "none",
                },
              }
            : ownerState.variant === "text-only"
            ? {
                background: "none",
                border: 0,
                borderRadius: 3,
                textTransform: "unset",
                // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                justifyContent: "flex-start",
                color: "black",
                // height: 48,
                fontSize: "17px",
                // padding: "0 30px",
                ":hover": {
                  background: "none",
                },
              }
            : {
                background: "#0038FF",
                border: 0,
                borderRadius: 3,
                textTransform: "unset",
                // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                color: "white",
                // height: 48,
                fontSize: "17px",
                // padding: "0 30px",
                ":hover": {
                  background: "#0038FF",
                },
              }),
        }),
        // root: {
        //   background: "#0038FF",
        //   border: 0,
        //   borderRadius: 3,
        //   textTransform: "unset",
        //   // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        //   color: "white",
        //   // height: 48,
        //   fontSize: "17px",
        //   // padding: "0 30px",
        //   ":hover": {
        //     background: "#0038FF",
        //   },
        // },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === "medium"
            ? {
                fontSize: "18px",
                fontWeight: "700",
              }
            : ownerState.variant === "small"
            ? {
                fontSize: "14px",
                fontWeight: "500",
                color: "#000",
              }
            : ownerState.variant === "high"
            ? {
                fontSize: "20px",
                fontWeight: "600",
              }
            : ownerState.variant === "normal"
            ? {
                fontSize: "16px",
                fontWeight: "500",
              }
            : ownerState.variant === "xs"
            ? {
                fontSize: "12px",
                fontWeight: "500",
              }
            : ""),
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant !== "primaryy"
            ? {
                background: "none",
                border: "none !important",
                borderRadius: 3,
                textTransform: "unset",
                // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
                color: "black",
                // height: 48,
                fontSize: "17px",
                // boxShadow: " 0px 0px 4px 0px #00000040",
              }
            : ""),
        }),
      },
    },
  },
});
