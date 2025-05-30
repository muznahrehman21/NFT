import React from "react";

function Supply({ counter, setCounter }) {
  const handleIncrement = () => {
    setCounter((prev) => (parseInt(prev) + 1).toString());
  };
  const handleDecrement = () => {
    setCounter((prev) => {
      const newValue = parseInt(prev) - 1;
      return newValue > 0 ? newValue.toString() : "1";
    });
  };
  return (
    <div className="flex justify-center items-center gap-3 w-[216px] h-14">
      <p className="font-roboto font-normal text-[#808080] text-[18px]">
        Supply
      </p>
      <div className="flex justify-around items-center p-4 border-[#E7E7E7] border-[2.8px] rounded-2xl w-[139px] h-full text-[#808080]">
        {counter}
        <div className="flex flex-col">
          <button
            onClick={() => {
              handleIncrement();
            }}
            className="flex justify-center items-center hover:bg-gray-200 border-[#E7E7E7] border-t-[0.5px] border-r border-b-0 border-l w-7 h-7"
          >
            <img src="/arrowup.svg" alt="arrow" />
          </button>
          <button
            onClick={() => {
              handleDecrement();
            }}
            className="flex justify-center items-center hover:bg-gray-200 border-[#E7E7E7] border-t-[0.5px] border-r border-b-0 border-l w-7 h-7"
          >
            <img src="/arrowdown.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Supply;
