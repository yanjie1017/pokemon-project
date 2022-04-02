import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Portfolio from './pages/Portfolio';
import CatchPokemon from './pages/CatchPokemon';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login"
          element={<LoginPage/>}
        />
        <Route exact path="/portfolio/:id"
          element={<Portfolio/>}
        />
        <Route exact path="/catch-pokemon/:id"
          element={<CatchPokemon/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
