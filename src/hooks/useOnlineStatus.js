import { useSyncExternalStore } from "react";

function subscribe(callback) {
  // synchronizing
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);

  //clean up
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export default function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );

  return isOnline;
}
