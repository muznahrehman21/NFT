import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/landing/LandingPage";
import SecondPage from "./pages/second/SecondPage";

function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#FFF9F9]">
      <Router>
        <Header />
        {/* Define your routes here */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/second" element={<SecondPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
