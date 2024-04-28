import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Raffle from './components/Raffle';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Dashboard />} ></Route>
        <Route path="/raffle" element={<Raffle />} />
      </Routes>
    </Router>
  );
}

export default App;
