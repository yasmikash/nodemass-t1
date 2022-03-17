import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import New from "./pages/New";
import List from "./pages/List";
import Single from "./pages/Single";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6B21A8",
      light: "#7E22CE",
      dark: "#7E22CE",
    },
    secondary: {
      main: "#7E22CE",
      light: "7E22CE",
      dark: "#1C1917",
    },
  },
  typography: {
    fontFamily: `font-family: "Inter", sans-serif;`,
    button: {
      textTransform: "none",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route path="list" element={<List />} />
              <Route path="new" element={<New />} />
              <Route path=":userId" element={<Single />} />
            </Route>
            <Route path="products">
              <Route path="list" element={<List />} />
              <Route path="new" element={<New />} />
              <Route path=":productId" element={<Single />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
