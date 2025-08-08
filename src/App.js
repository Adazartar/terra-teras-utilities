import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ItemPlacer from "./ItemPlacer";
import ComingSoon from "./ComingSoon";
import "./App.css";

function App() {
  return (
    <Router basename="/terra-teras-utilities">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item-placer" element={<ItemPlacer />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
    </Router>
  );
}

export default App;
