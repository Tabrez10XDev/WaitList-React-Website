import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Raffle from "./components/Raffle";
import { AptosWalletAdapterProvider } from "@aptos-labs/wallet-adapter-react";
import { PetraWallet } from "petra-plugin-wallet-adapter";
import Leaderboard from "./components/Leaderboard";

const wallets = [new PetraWallet()];

function App() {
  return (
    <AptosWalletAdapterProvider plugins={wallets} autoConnect={true}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/raffle" element={<Raffle />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
    </AptosWalletAdapterProvider>
  );
}

export default App;
