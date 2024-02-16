import { useEffect } from "react";
import { useState } from "react";

export default function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function updateState() {
      setIsOnline(navigator.onLine); // navigator.onLine is a browser api which let you know the device is online or offline
    }
    updateState();
    // synchronizing
    window.addEventListener("online", updateState);
    window.addEventListener("offline", updateState);

    //clean up
    return () => {
      window.removeEventListener("online", updateState);
      window.removeEventListener("offline", updateState);
    };
  }, []);

  return isOnline;
}
