import "./App.css";
import { WagmiConfig, createClient } from "wagmi";
import { getDefaultProvider } from "ethers";
import Dashboard from "./Components/Dashboard"
const client = createClient({
  autoConnect: true,
  provider: getDefaultProvider(),
});

function App() {
  return (
    <WagmiConfig client={client}>
      <Dashboard/>
    </WagmiConfig>
  );
}

export default App;
