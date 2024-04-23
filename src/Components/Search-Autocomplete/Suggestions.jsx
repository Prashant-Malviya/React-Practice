import React from "react";

function Suggestions({ data, handleClick }) {
  return (
    <ul className={`border-2 border-t-0 border-slate-400 shadow-lg rounded-md ${data.length >= 10 ? 'h-52 overflow-y-scroll' : ''}`} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
  
      {data && data.length
        ? data.map((item, index) => (
            <li key={index} onClick={handleClick}
            className="cursor-pointer px-14 rounded-b-md rounded-t-none font-bold text-xl hover:bg-blue-200 "
            >
              {" "}
              {item}{" "}
            </li>
          ))
        : null}
    </ul>
  );
}

export default Suggestions;
