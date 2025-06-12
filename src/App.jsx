import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./pages/landing/LandingPage";
import SecondPage from "./pages/second/SecondPage";
import AuctionPage from "./pages/AuctionPage";
import TopSellersPage from "./pages/TopSellersPage";
import CollectionPage from "./pages/CollectionPage";
import SellerCollectionPage from "./pages/SellerCollectionPage";
import Connect from "./pages/Connect";
function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#FFF9F9]">
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/auctionpage" element={<AuctionPage />} />
          <Route path="/topsellers" element={<TopSellersPage />} />
          <Route path="/collections" element={<CollectionPage />} />
          <Route path="/SellerCollections" element={<SellerCollectionPage />} />
          <Route path="/Connect" element={<Connect />} />
        </Routes>
        <div className="mt-30">
          <Footer />
        </div>
      </Router>
    </div>
  );
}
export default App;
