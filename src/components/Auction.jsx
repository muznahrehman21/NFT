import React from "react";
import Card from "./cards/Card";
import Button1 from "./buttons/Button1";
function Auction() {
  return (
    <div className="flex flex-col gap-7 w-[1318px] h-[984px]">
      <div className="flex justify-between items-center">
        <h1 className="font-apex font-normal text-black text-6xl"> AUCTION</h1>{" "}
      </div>
      <div className="flex flex-col gap-7">
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
      <div className="flex flex-row justify-center items-center gap-5 mt-4">
        <Button1
          Btn="Explore More"
          borderG={false}
          width="w-[228px]"
          height="h-[58px] "
          bg="bg-gradient-to-b from-[#FF5F5F] to-[#FF0000]"
          textcolor="text-[#FFFFFF]"
          textsize="text-[22px]"
          src={"/doublearrow.png"}
          showIcon={true}
        />
      </div>
    </div>
  );
}

export default Auction;
