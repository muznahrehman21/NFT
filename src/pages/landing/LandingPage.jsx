import React from "react";
import Hero from "../../components/hero/Hero";

import FeaturedCollection from "../../components/FeaturedCollection";
import Footer from "../../components/Footer";
import TrendingNFT from "../../components/TrendingNFT";
import Topseller from "../../components/Topseller";
import RecentlySold from "../../components/RecentlySold";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center">
        <FeaturedCollection />
        <div className="mt-48">
          <TrendingNFT />
        </div>
        <div className="mt-16">
          <Topseller />
        </div>
        <div className="mt-16">
          <RecentlySold />
        </div>
        <div className="mt-16">
          <Footer />
        </div>
      </div>
    </>
  );
}
