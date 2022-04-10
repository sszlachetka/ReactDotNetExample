import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";

const useAcquireAccessToken = (): (() => Promise<string | undefined>) => {
  const { instance } = useMsal();

  const acquireAccessToken = async () => {
    const account = instance.getActiveAccount();
    if (!account) {
      return;
    }

    const response = await instance.acquireTokenSilent({
      ...loginRequest,
      account: account,
    });

    return response.accessToken;
  };

  return acquireAccessToken;
};

export default useAcquireAccessToken;
