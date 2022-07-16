import Sidebar from "./components/sidebar/sidebar";
import RoutesPage from "./routes/routes";
import "./styles/app.css";
import Navbar from "./components/navbar/navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

function App({ watchlists }) {
  const nav = useNavigate();

  useEffect(() => {
    nav("/");
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlists));
  }, [watchlists]);

  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <RoutesPage />
    </div>
  );
}

export default connect((state) => state)(App);
