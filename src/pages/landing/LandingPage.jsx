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
import Boost from "../../components/Boost";
import FAQ from "../../components/FAQ";
import AnimatedCards from "../../components/AnimatedCards";
export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Hero />
        <div className="mt-0">
          <AnimatedCards />
        </div>
        <div className="mt-60">
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
        <div className="mt-60">
          <Boost />
        </div>
        <div className="mt-30">
          <FAQ />
        </div>
      </div>
    </>
  );
}
