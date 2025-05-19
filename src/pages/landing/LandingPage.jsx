import React from "react";
import Hero from "../../components/hero/Hero";

import FeaturedCollection from "../../components/FeaturedCollection";
import Footer from "../../components/Footer";
import TrendingNFT from "../../components/TrendingNFT";
import Topseller from "../../components/Topseller";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center gap-66">
        <FeaturedCollection />
        <TrendingNFT />
        <Topseller />
      </div>

      <Footer />
    </>
  );
}
