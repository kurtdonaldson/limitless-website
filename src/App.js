// import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import Contact from "./pages/Contact";
// import ScrollToTop from "./components/ScrollToTop";
// import NotFound from "./components/NotFound";
import Closed from "./pages/Closed";

function App() {
  return (
    <div style={{ height: "100vh" }} className="App">
      <Closed />
      {/* <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
