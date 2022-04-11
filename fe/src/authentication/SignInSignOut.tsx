import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { loginRequest } from "./authConfig";

const buttonStyle = {
  color: "#FFF",
};

const SignInSignOut: React.FC = () => {
  const { instance } = useMsal();
  const account = instance.getActiveAccount();

  function login() {
    instance.loginRedirect(loginRequest);
  }

  function logout() {
    instance.logoutRedirect();
  }

  return (
    <>
      <AuthenticatedTemplate>
        <Typography variant="caption">{account?.username}</Typography>
        <Button onClick={logout} style={buttonStyle}>
          Sign out
        </Button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Button onClick={login} style={buttonStyle}>
          Sign in
        </Button>
      </UnauthenticatedTemplate>
    </>
  );
};

export default SignInSignOut;
