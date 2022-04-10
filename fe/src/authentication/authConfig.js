import { LogLevel } from "@azure/msal-browser";

const ua = window.navigator.userAgent;
const msie = ua.indexOf("MSIE ");
const msie11 = ua.indexOf("Trident/");
const msedge = ua.indexOf("Edge/");
const firefox = ua.indexOf("Firefox");
const isIE = msie > 0 || msie11 > 0;
const isEdge = msedge > 0;
const isFirefox = firefox > 0;

export const msalConfig = {
  auth: {
    clientId: "20271454-045a-41a4-abdf-d3a5f462c453",
    authority:
      "https://suliborszlachetka.b2clogin.com/suliborszlachetka.onmicrosoft.com/B2C_1_sisu1",
    knownAuthorities: ["suliborszlachetka.b2clogin.com"],
    redirectUri: "/auth-response",
    postLogoutRedirectUri: "/",
    navigateToLoginRequestUrl: false,
  },
  cache: {
    cacheLocation: "sessionStorage",
    storeAuthStateInCookie: isIE || isEdge || isFirefox,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
        }
      },
    },
  },
};

export const loginRequest = {
  scopes: ["https://suliborszlachetka.onmicrosoft.com/webapi1/product.read"],
};
