import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";

import Home from "./components/home";

import Signin from "./components/auth/Signin";
import Signup from "./components/auth/Signup";

import PrivateNav from "./components/routing/PrivateNav";
import PublicNav from "./components/routing/PublicNav";
import PrivateRoute from "./components/routing/PrivateRoute";
import GuestRoute from "./components/routing/GuestRoute";

import AuthContext from "./contexts/auth";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundColor.primary};
`;

const Navbar = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
`;

const ScreenWrapper = styled.div`
  position: relative;
  top: -2rem;
`;

const theme = {
  color: {
    primary: "#333",
    secondary: "#000"
  },
  backgroundColor: {
    primary: "#EEE",
    secondary: "#AAA"
  }
};

function App() {
  let [auth, setAuth] = useState<
    { uid: string; token: string; client: string } | {}
  >({});

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Router>
          <AuthContext.Provider
            value={{
              // @ts-ignore
              auth,
              signin(auth: { uid: string; token: string; client: string }) {
                setAuth(auth);
              },
              signout() {
                setAuth({});
              }
            }}
          >
            <Navbar>
              {auth.hasOwnProperty("token") ? <PrivateNav /> : <PublicNav />}
            </Navbar>

            <ScreenWrapper>
              <PrivateRoute path="/" exact component={Home} />
              <GuestRoute path="/signin/" component={Signin} />
              <GuestRoute path="/signup/" component={Signup} />
            </ScreenWrapper>
          </AuthContext.Provider>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
