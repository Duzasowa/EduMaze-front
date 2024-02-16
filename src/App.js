import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Maze from "./pages/Maze";
import XOBoard from "./pages/XOBoard";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/maze" element={<Maze />} />
        <Route path="/XoBoard" element={<XOBoard />} />
      </Routes>
    </Router>
  );
};

export default App;
