import { Link } from "react-router-dom";
import "./App.css";

export default function Home() {
  return (
    <div className="main-app">
        <div className="header-text">Welcome to the Terra Teras Utilities Collection</div>
        <Link to="/item-placer" className="nav-button">Item Placer</Link>
        <Link to="/coming-soon" className="nav-button">Coming Soon</Link>
    </div>
  );
}
