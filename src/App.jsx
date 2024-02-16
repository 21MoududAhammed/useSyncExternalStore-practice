import useOnlineStatus from "./hooks/useOnlineStatus";

export default function App() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "Connected" : "Disconnected"}</h1>;
}
