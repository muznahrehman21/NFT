// import React, { useState } from "react";
// import FilterDown from "./FilterDown";
// function FilterBar() {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div className="top-6 left-105 z-30 absolute flex flex-col justify-center gap-5 bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-4 rounded-[30px] w-[290px]">
//       <div className="flex flex-row justify-between items-center">
//         <img src="/filter.svg" alt="" />
//         <img src="/arrowdown.svg" onClick={() => setToggle(!toggle)} alt="" />
//       </div>
//       <div className="flex justify-center items-center">
//         <img src="/blackline.svg" alt="" />
//       </div>

//       <div className="flex flex-col gap-3">
//         <FilterDown />
//         <FilterDown filter="Price" Quantity="" />
//         <FilterDown filter="Background" Quantity="20" toggle={toggle} />

//         {toggle && <div> HI</div>}
//         <FilterDown filter="Clothing" Quantity="110" />
//         <FilterDown filter="Eye" Quantity="2" />
//         <FilterDown filter="Body Color" Quantity="11" />
//         <FilterDown filter="Head" Quantity="33" />
//       </div>
//     </div>
//   );
// }

// export default FilterBar;

// import React, { useState } from "react";

// function FilterBar() {
//   const [toggles, setToggles] = useState({
//     Popular: false,
//     Price: false,
//     Background: false,
//     Clothing: false,
//     Eye: false,
//     BodyColor: false,
//     Head: false,
//   });

//   const toggleFilter = (filter) => {
//     setToggles((prev) => ({
//       ...prev,
//       [filter]: !prev[filter],
//     }));
//   };

//   return (
//     <div className="top-6 left-105 z-30 absolute flex flex-col justify-center gap-5 bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-4 rounded-[30px] w-[290px]">
//       <div className="flex flex-row justify-between items-center">
//         <img src="/filter.svg" alt="Filter" />
//       </div>

//       <div className="flex justify-center items-center">
//         <img src="/blackline.svg" alt="Divider" />
//       </div>

//       <div className="flex flex-col gap-3">
//         {[
//           { name: "Popular", quantity: 15 },
//           { name: "Price", quantity: 0 },
//           { name: "Background", quantity: 20 },
//           { name: "Clothing", quantity: 110 },
//           { name: "Eye", quantity: 2 },
//           { name: "BodyColor", quantity: 11 },
//           { name: "Head", quantity: 33 },
//         ].map((filter) => (
//           <div key={filter.name} className="flex flex-col p-2 border rounded">
//             <div
//               className="flex justify-between items-center cursor-pointer"
//               onClick={() => toggleFilter(filter.name)}
//             >
//               <span>{filter.name}</span>
//               <span>{filter.quantity}</span>
//               <img
//                 src={toggles[filter.name] ? "/arrowup.svg" : "/arrowdown.svg"}
//                 alt="Toggle"
//               />
//             </div>

//             {toggles[filter.name] && (
//               <div className="mt-2 text-gray-600 text-sm">
//                 {/* Replace this with real dropdown content */}
//                 Expanded content for {filter.name}
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default FilterBar;

import React, { useState } from "react";

function FilterBar() {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="top-6 left-125 z-30 absolute flex flex-col justify-center gap-5 bg-white shadow-[4px_4px_15px_0_rgba(0,0,0,0.2)] p-4 rounded-[30px] w-[290px]">
      {/* Top bar with filter image */}
      <div
        className="flex flex-row justify-between items-center cursor-pointer"
        onClick={() => setShowFilters(!showFilters)}
      >
        <img src="/filter.svg" alt="Filter" />
        <img
          src={showFilters ? "/arrowup.svg" : "/arrowdown.svg"}
          alt="Toggle Arrow"
        />
      </div>

      {/* Divider Line */}
      {showFilters && (
        <>
          <div className="flex justify-center items-center">
            <img src="/blackline.svg" alt="Divider" />
          </div>

          {/* Filters Block */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center p-2 border rounded">
              <span>Popular</span>
              <span>15</span>
            </div>

            <div className="flex justify-between items-center p-2 border rounded">
              <span>Price</span>
              <span>142.02</span>
            </div>

            <div className="flex justify-between items-center p-2 border rounded">
              <span>Background</span>
              <span>20</span>
            </div>

            <div className="flex justify-between items-center p-2 border rounded">
              <span>Clothing</span>
              <span>110</span>
            </div>

            <div className="flex justify-between items-center p-2 border rounded">
              <span>Eye</span>
              <span>2</span>
            </div>

            <div className="flex justify-between items-center p-2 border rounded">
              <span>Body Color</span>
              <span>11</span>
            </div>

            <div className="flex justify-between items-center p-2 border rounded">
              <span>Head</span>
              <span>33</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default FilterBar;
