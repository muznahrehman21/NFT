import React from "react";
import SellerHeader from "../components/SellerHeader";
import Collections from "../components/Collections";
import CollectionArt from "../components/CollectionArt";

function TopSellersPage() {
  return (
    <div>
      <SellerHeader />
      <Collections />
      <CollectionArt />
    </div>
  );
}

export default TopSellersPage;
