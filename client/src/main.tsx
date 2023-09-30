import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const colors = {
  brand: {
    900: "#d0bc8f",
    800: "#474454",
    700: "#c0786a",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <GoogleOAuthProvider clientId="127982950210-7uq0r36sh6rl8le9sr5rhiucvl42725l.apps.googleusercontent.com">
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
