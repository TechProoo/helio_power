import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard";
import Services_Page from "./Pages/Services_Page";
import Portfolio_Page from "./Pages/Portfolio_Page";
import ContactPage from "./Pages/ContactPage";
import { NavProvider } from "./NavContext";

function App() {
  return (
    <NavProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/services" element={<Services_Page />} />
          <Route path="/portfolio" element={<Portfolio_Page />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </NavProvider>
  );
}

export default App;
