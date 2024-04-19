import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/Register";
import Loginpage from "./pages/Login";
import MyNabBar from "./components/NavBar";
import AddListingPage from "./pages/List";
import HomePage from "./pages/Home";
function App() {
  return (
    <div className="App">
      <MyNabBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log" element={<Loginpage />} />
        <Route path="/reg" element={<RegisterPage />} />
        <Route path="/list" element={<AddListingPage />} />
      </Routes>
    </div>
  );
}

export default App;
