import React from "react";
import Hero from "../../components/hero/Hero";

import FeaturedCollection from "../../components/FeaturedCollection";
import Footer from "../../components/Footer";
import TrendingNFT from "../../components/TrendingNFT";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center gap-55">
        <FeaturedCollection />
        <TrendingNFT />
        <Footer />
      </div>
    </>
  );
}
