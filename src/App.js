import Sidebar from "./components/sidebar/sidebar";
import RoutesPage from "./routes/routes";
import "./styles/app.css";
import Navbar from "./components/navbar/navbar";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <RoutesPage />
    </div>
  );
}

export default App;
