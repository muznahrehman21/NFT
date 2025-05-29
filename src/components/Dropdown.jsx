import { useState } from "react";

export default function Dropdown({ selected, setSelected }) {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { label: "Single NFT" },
    { label: "Multi-NFT Collection", sub: "2-1000 images" },
  ];

  return (
    <div className="relative w-[220px] h-14">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-white px-10 py-2 border-[#E7E7E7] border-[2.8px] rounded-[15px] w-full text-[#808080] text-[16px]"
      >
        {selected}

        {/* Flip-style animation using scaleY */}
        <img
          src="/arrowdown.svg"
          alt="arrow"
          className={`ml-2 w-4 h-4 transition-transform cursor-pointer duration-300 ease-in-out transform ${
            isOpen ? "scale-y-[-1]" : "scale-y-100"
          }`}
        />
      </button>

      {isOpen && (
        <div className="z-20 absolute bg-white shadow-lg mt-1 border border-gray-200 rounded-lg w-full">
          {options.map((option, idx) => (
            <div
              key={idx}
              className="hover:bg-gray-100 px-4 py-2 cursor-pointer"
              onClick={() => {
                setSelected(option.label);
                setIsOpen(false);
              }}
            >
              <div className="text-[#808080]">{option.label}</div>
              {option.sub && (
                <div className="text-gray-400 text-sm">{option.sub}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
