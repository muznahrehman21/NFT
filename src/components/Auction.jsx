import React from "react";
import Card from "./cards/Card";
import Button1 from "./buttons/Button1";
import { useNavigate } from "react-router-dom";
function Auction() {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col justify-center gap-10 w-[1318px] h-[984px]">
      <div className="flex justify-between items-center">
        <h1 className="font-apex font-normal text-black text-6xl"> AUCTION</h1>{" "}
      </div>
      <img src="/d7.png" alt="" className="-right-90 bottom-25 absolute" />
      <img src="/d8.png" alt="" className="absolute" />

      <div className="flex flex-col gap-13">
        <div className="flex flex-row gap-7">
          <Card
            avatar="/auction1.png"
            showButton={false}
            countdown="3 : 06 : 59 : 18"
          />
          <Card
            avatar="/auction2.png"
            showButton={false}
            countdown="3 : 06 : 59 : 18"
          />
          <Card
            avatar="/auction3.png"
            showButton={false}
            countdown="3 : 06 : 59 : 18"
          />
          <Card
            avatar="/auction4.png"
            showButton={false}
            countdown="3 : 06 : 59 : 18"
          />
        </div>
        <div className="flex flex-row gap-7">
          <Card
            avatar="/auction5.png"
            showButton={false}
            countdown="3 : 06 : 59 : 18"
          />
          <Card
            avatar="/auction6.png"
            showButton={false}
            countdown="3 : 06 : 59 : 18"
          />
          <Card
            avatar="/auction7.png"
            showButton={false}
            countdown="3 : 06 : 59 : 18"
          />
          <Card
            avatar="/auction8.png"
            showButton={false}
            countdown="3 : 06 : 59 : 18"
          />
        </div>
      </div>
      <div className="z-20 flex flex-row justify-center items-center gap-5 mt-4">
        <Button1
          Btn="Explore More"
          borderG={false}
          width="w-[228px]"
          height="h-[58px] "
          bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
          textcolor="text-[#FFFFFF]"
          textsize="text-[22px]"
          src={"/DoubleArrow.svg"}
          showIcon={true}
          onClick={() => {
            navigate("/auctionpage");
            console.log("working");
          }}
        />
      </div>
    </div>
  );
}

export default Auction;
