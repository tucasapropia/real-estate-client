import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Sale from "./components/Sale";
import Rent from "./components/Rent";
import Advisory from "./components/Advisory";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sale" element={<Sale />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/advisory" element={<Advisory />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
