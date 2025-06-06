import React from "react";
import SellerHeader from "../components/SellerHeader";
import Collections from "../components/Collections";
import CollectionArt from "../components/CollectionArt";

function TopSellersPage() {
  return (
    <div>
      <SellerHeader />
      <Collections />
      <div className="flex flex-col items-center gap-4 mt-8">
        <CollectionArt />
        <CollectionArt number="2" img="/collection2.svg" amount="150" />
        <CollectionArt number="3" img="/collection3.svg" amount="75" />
        <CollectionArt number="4" img="/collection4.svg" amount="75" />
        <CollectionArt number="5" img="/collection5.svg" amount="33" />
        <CollectionArt number="6" img="/collection6.svg" amount="24" />
        <CollectionArt number="7" img="/collection7.svg" amount="22" />
        <CollectionArt number="8" img="/collection8.svg" amount="64" />
        <CollectionArt number="9" img="/collection9.svg" amount="877" />
        <CollectionArt number="10" img="/collection10.svg" amount="55" />
        <CollectionArt number="11" img="/collection11.svg" amount="35" />
        <CollectionArt number="12" img="/collection12.svg" amount="32" />
        <CollectionArt number="13" img="/collection13.svg" amount="94" />
        <CollectionArt number="14" img="/collection14.svg" amount="75" />
        <CollectionArt number="15" img="/collection15.svg" amount="25" />
      </div>
    </div>
  );
}

export default TopSellersPage;
