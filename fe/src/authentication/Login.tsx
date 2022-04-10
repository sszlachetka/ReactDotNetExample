import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { Button } from "@mui/material";
import React from "react";
import { loginRequest } from "./authConfig";

const Login: React.FC = () => {
  const { instance } = useMsal();

  function login() {
    instance.loginRedirect(loginRequest);
  }

  return (
    <>
      <AuthenticatedTemplate>Authenticated</AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <Button onClick={login} style={{ color: "#FFF" }}>
          Sign in
        </Button>
      </UnauthenticatedTemplate>
    </>
  );
};

export default Login;
