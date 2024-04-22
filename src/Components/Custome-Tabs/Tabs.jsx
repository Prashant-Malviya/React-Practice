import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabIdx, setCurrentTabIdx] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIdx(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <>
      <div className="wrapper flex flex-col justify-center items-center">
        <div className="heading flex flex-row my-5 ">
          {tabsContent.map((tabItem, index) => (
            <div
              onClick={() => handleOnClick(index)}
              key={tabItem.label}
              className={`px-5 py-3 font-bold mx-3 rounded-md cursor-pointer ${
                currentTabIdx === index ? "bg-yellow-400" : "bg-blue-300"
              }`}
            >
              {tabItem.label}

              <span className="label">{tabItem.label}</span>
            </div>
          ))}
        </div>

        <div className="content text-red-500 font-bold text-3xl">
          {tabsContent[currentTabIdx] && tabsContent[currentTabIdx].content}
        </div>
      </div>
    </>
  );
}
