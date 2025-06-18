import React from "react";
import Card from "../components/cards/Card";
function More() {
  return (
    <div className="flex flex-col gap-3 mt-20">
      <h1 className="font-apex font-normal text-[64px] text-black">
        MORE FROM THIS COLLECTION
      </h1>
      <div className="gap-4 grid grid-cols-4">
        <Card avatar="" />
        <Card avatar="" />
        <Card avatar="" />
        <Card avatar="" />
        <Card avatar="" />
        <Card avatar="" />
        <Card avatar="" />
        <Card avatar="" />
      </div>
    </div>
  );
}

export default More;
