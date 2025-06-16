import React from "react";

function SearchBar() {
  return (
    <div className="flex justify-end items-center mt-25">
      <div className="flex flex-row gap-5 bg-[#FFF9F9] p-4 border-[#E7E7E7] border-[2.8px] rounded-[15px] w-[613px] h-[55px]">
        <img src="/s.svg" alt="s" />
        <input
          type="text"
          placeholder="Search by name"
          className="outline-none font-roboto font-normal text-[#808080] text-[18px]"
        />
      </div>
    </div>
  );
}

export default SearchBar;
