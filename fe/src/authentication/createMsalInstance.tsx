import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

export default function createMsalInstance() {
  const msalInstance = new PublicClientApplication(msalConfig);
  if (
    !msalInstance.getActiveAccount() &&
    msalInstance.getAllAccounts().length > 0
  ) {
    msalInstance.setActiveAccount(msalInstance.getAllAccounts()[0]);
  }

  return msalInstance;
}
