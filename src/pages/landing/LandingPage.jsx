import React from "react";
import Hero from "../../components/hero/Hero";

import FeaturedCollection from "../../components/FeaturedCollection";
import Footer from "../../components/Footer";
import TrendingNFT from "../../components/TrendingNFT";
import Topseller from "../../components/Topseller";
import RecentlySold from "../../components/RecentlySold";
import Header from "../../components/Header";
import Auction from "../../components/Auction";
import TopCollections from "../../components/TopCollections";
import Imagination from "../../components/Imagination";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center">
        <div className="">
          <FeaturedCollection />
        </div>
        <div className="mt-80">
          <TrendingNFT />
        </div>
        <div className="mt-50">
          <Topseller />
        </div>
        <div className="mt-60">
          <Auction />
        </div>
        <div className="mt-60">
          <TopCollections />
        </div>
        <div className="mt-60">
          <RecentlySold />
        </div>
        <div className="mt-30">
          <Imagination />
        </div>
      </div>
    </>
  );
}
