import React from "react";
import Button1 from "../buttons/Button1";
import { useState } from "react";
import Card from "../cards/Card";
function NewComponent() {
  const [activeTab, setActiveTab] = useState("All");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-12 w-full">
      <div className="flex flex-row gap-8 w-full">
        <div className="flex justify-center items-center bg-[#FFFFFF] shadow-[4px_4px_15px_0_rgba(0,0,0,2)] shadow-gray-400 rounded-[20px] w-[512px] h-[491px]">
          <img src="/fairy.svg" alt="fairy" className="w-[482px] h-[461px]" />
        </div>

        <div className="flex flex-col gap-7">
          <p className="font-apex font-normal text-[#2B2B2B] text-[64px]">
            WONDERFUL ARTWORK
          </p>
          <div className="gap-2 grid grid-cols-2">
            <div className="flex flex-row justify-between bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,2)] shadow-gray-300 p-3 rounded-[8px] w-[322px] h-[48px]">
              <p className="font-roboto font-normal text-[#808080] text-[14px]">
                Items listed
              </p>
              <p className="font-roboto font-bold text-[#808080] text-[14px]">
                09
              </p>
            </div>
            <div className="flex flex-row justify-between bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,2)] shadow-gray-300 p-3 rounded-[8px] w-[322px] h-[48px]">
              <p className="font-roboto font-normal text-[#808080] text-[14px]">
                Nnm of Sold Items
              </p>
              <p className="font-roboto font-bold text-[#808080] text-[14px]">
                05
              </p>
            </div>
            <div className="flex flex-row justify-between bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,2)] shadow-gray-300 p-3 rounded-[8px] w-[322px] h-[48px]">
              <p className="font-roboto font-normal text-[#808080] text-[14px]">
                Vol FRY
              </p>
              <p className="font-roboto font-bold text-[#808080] text-[14px]">
                18.5 FRY
              </p>
            </div>
          </div>
          <img src="/261.svg" alt="line" className="mt-3" />

          <div className="flex flex-row gap-2">
            <div className="flex justify-center items-center shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[45.71px] h-[42px]">
              <img src="/internet.svg" alt="net" />
            </div>
            <div className="flex justify-between items-center shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-3 rounded-[8px] w-[116.12px] h-[42px]">
              <img src="/bird.svg" alt="bird" />
              <div className="flex justify-center items-center bg-[#FE0101]/20 rounded-[2.4px] w-[44px] h-[22.4px]">
                <p className="font-bold text-[7.45px]">12.3k</p>
              </div>
            </div>

            <div className="flex justify-center items-center shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] rounded-[8px] w-[45.71px] h-[42px]">
              <img src="/dis.svg" alt="discord" />
            </div>
            <div className="flex justify-between items-center shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-3 rounded-[8px] w-[116.12px] h-[42px]">
              <img src="/bino.svg" alt="binoculars" />
              <div className="flex justify-center items-center bg-[#FE0101]/20 rounded-[2.4px] w-[44px] h-[22.4px]">
                <p className="font-bold text-[7.45px]">12.3k</p>
              </div>
            </div>
          </div>

          <div className="flex w-[674px] h-[96px]">
            <p className="font-roboto font-normal text-[#808080] text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              euismod vulputate ipsum, non molestie magna facilisis a. Cras
              tincidunt sem sed lorem dapibus laoreet. Curabitur vel lectus
              purus. In gravida eros ac aliquam facilisis. Suspendisse at
              elementum metus. Proin elementum maximus placerat. Suspendisse
              sapien justo, interdum sit amet sollicitudin quis, porttitor a
              metus. In eu accumsan dolor, eu venenatis eros. Aliquam erat
              volutpat. Etiam suscipit placerat mi. Mauris diam purus, sagittis
              eu feugiat eu, sodales a quam. Cras elit enim.
            </p>
          </div>
        </div>
      </div>
      {/* Cards */}
      <div className="flex flex-col items-center mt-10 w-[1319px] h-[1397px]">
        {/* options */}
        <div className="flex flex-row justify-between w-full">
          <div className="flex flex-row items-center gap-15 w-full">
            {activeTab == "All" ? (
              <Button1
                width="w-[71px]"
                height="h-[49px]"
                radius="rounded-[8px]"
                Btn="All"
                textcolor="text-[#FE0101]"
                fontw="font-normal"
                font="font-roboto"
              />
            ) : (
              <p
                onClick={() => handleTabClick("All")}
                className="font-roboto font-normal text-[18px] text-black cursor-pointer"
              >
                {" "}
                All
              </p>
            )}
            {activeTab == "Generate" ? (
              <Button1
                width="w-[133px]"
                height="h-[49px]"
                radius="rounded-[8px]"
                Btn="Generated"
                textcolor="text-[#FE0101]"
                fontw="font-normal"
                font="font-roboto"
              />
            ) : (
              <p
                onClick={() => handleTabClick("Generate")}
                className="font-roboto font-normal text-[18px] text-black cursor-pointer"
              >
                {" "}
                Generated
              </p>
            )}
            {activeTab == "Minted" ? (
              <Button1
                width="w-[106px]"
                height="h-[49px]"
                radius="rounded-[8px]"
                Btn="Minted"
                textcolor="text-[#FE0101]"
                fontw="font-normal"
                font="font-roboto"
              />
            ) : (
              <p
                onClick={() => handleTabClick("Minted")}
                className="font-roboto font-normal text-[18px] text-black cursor-pointer"
              >
                {" "}
                Minted
              </p>
            )}
            {activeTab == "Sale" ? (
              <Button1
                width="w-[112px]"
                height="h-[49px]"
                radius="rounded-[8px]"
                Btn="On Sale"
                textcolor="text-[#FE0101]"
                fontw="font-normal"
                font="font-roboto"
              />
            ) : (
              <p
                onClick={() => handleTabClick("Sale")}
                className="font-roboto font-normal text-[18px] text-black cursor-pointer"
              >
                {" "}
                On Sale
              </p>
            )}
            {activeTab == "Auction" ? (
              <Button1
                width="w-[112px]"
                height="h-[49px]"
                radius="rounded-[8px]"
                Btn="Auction"
                textcolor="text-[#FE0101]"
                fontw="font-normal"
                font="font-roboto"
              />
            ) : (
              <p
                onClick={() => handleTabClick("Auction")}
                className="font-roboto font-normal text-[18px] text-black cursor-pointer"
              >
                {" "}
                Auction
              </p>
            )}
            {activeTab == "Sold" ? (
              <Button1
                width="w-[86px]"
                height="h-[49px]"
                radius="rounded-[8px]"
                Btn="Sold"
                textcolor="text-[#FE0101]"
                fontw="font-normal"
                font="font-roboto"
              />
            ) : (
              <p
                onClick={() => handleTabClick("Sold")}
                className="font-roboto font-normal text-[18px] text-black cursor-pointer"
              >
                {" "}
                Sold
              </p>
            )}
          </div>

          <Button1
            width="w-[142px]"
            height="h-[49px]"
            radius="rounded-[8px]"
            borderG={true}
            showIcon={true}
            src="/redarrow.svg"
            Btn="Newest"
            textcolor="text-[#FE0101]"
            textsize="text-[18px]"
            fontw="font-normal"
            font="font-roboto"
          />
        </div>
        <div className="gap-8 grid grid-cols-4 mt-10">
          <Card avatar="/i1.svg" />
          <Card avatar="/i2.svg" textb="Boost" />
          <Card avatar="/i3.svg" textb="Boost" />
          <Card avatar="/i4.svg" textb="Boost" />
          <Card avatar="/i5.svg" textb="Boost" />
          <Card avatar="/i6.svg" textb="Boost" />
          <Card avatar="/i7.svg" textb="Boost" />
          <Card avatar="/i8.svg" showButton={false} sold={true} />
          <Card avatar="/i9.svg" showButton={false} sold={true} />
          <Card avatar="/i10.svg" textb="Boost" />
          <Card avatar="/i11.svg" showButton={false} sold={true} />
          <Card avatar="/i12.svg" textb="Boost" />
        </div>
      </div>
    </div>
  );
}

export default NewComponent;
