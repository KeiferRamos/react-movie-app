import Sidebar from "./components/sidebar/sidebar";
import RoutesPage from "./routes/routes";
import "./styles/app.css";
import Navbar from "./components/navbar/navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const nav = useNavigate();

  useEffect(() => {
    nav("/");
  }, []);

  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <RoutesPage />
    </div>
  );
}

export default App;
