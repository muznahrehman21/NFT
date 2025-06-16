import React from "react";
import Card from "../components/cards/Card";
import { useNavigate } from "react-router-dom";
function PixacioArt() {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate("/NFT Detail");
  };

  return (
    <div className="gap-6 grid grid-cols-4 cursor-pointer">
      <Card onClick={handleClick} avatar="/tca.svg" />
      <Card onClick={handleClick} avatar="/tc2.svg" />
      <Card onClick={handleClick} avatar="/tc3.svg" />
      <Card onClick={handleClick} avatar="/tc4.svg" />
      <Card onClick={handleClick} avatar="/tc5.svg" />
      <Card onClick={handleClick} avatar="/tc6.svg" />
      <Card onClick={handleClick} avatar="/tc7.svg" />
      <Card onClick={handleClick} avatar="/tc8.svg" />
      <Card onClick={handleClick} avatar="/tc9.svg" />
      <Card onClick={handleClick} avatar="/tc10.svg" />
      <Card onClick={handleClick} avatar="/tc11.svg" />
      <Card onClick={handleClick} avatar="/tc12.svg" />
      <Card onClick={handleClick} avatar="/tc13.svg" />
      <Card onClick={handleClick} avatar="/tc14.svg" />
    </div>
  );
}

export default PixacioArt;
