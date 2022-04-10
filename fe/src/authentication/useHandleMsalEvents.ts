import { EventType } from "@azure/msal-browser";
import { useMsal } from "@azure/msal-react";
import { useEffect } from "react";

const useHandleMsalEvents = () => {
  const { instance } = useMsal();

  useEffect(() => {
    const callbackId = instance.addEventCallback((event: any) => {
      if (
        event.eventType === EventType.LOGIN_SUCCESS &&
        event.payload.account
      ) {
        const account = event.payload.account;
        instance.setActiveAccount(account);
      }
    });

    return () => {
      if (callbackId) {
        instance.removeEventCallback(callbackId);
      }
    };
  }, []);
};

export default useHandleMsalEvents;
