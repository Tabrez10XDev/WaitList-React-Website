import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Raffle from "./components/Raffle";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";

const wallets = [new PetraWallet()];

function App() {
  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/raffle" element={<Raffle />} />
        </Routes>
      </Router>
    </AptosWalletAdapterProvider>
  );
}

export default App;