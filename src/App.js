import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Conditions from "./pages/Conditions";
import Services from "./pages/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="conditions" element={<Conditions />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Contact />
    </div>
  );
}

export default App;
