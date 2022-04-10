import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider, useMsal } from "@azure/msal-react";
import MsalEventsHandler from "./MsalEventsHandler";

interface Props {
  msalInstance: PublicClientApplication;
}

const MsalInfrastructure: React.FC<Props> = ({ children, msalInstance }) => {
  return (
    <MsalProvider instance={msalInstance}>
      <>
        <MsalEventsHandler />
        {children}
      </>
    </MsalProvider>
  );
};

export default MsalInfrastructure;
