import { useEffect, useRef, useState } from "react";

const TabBar = () => {
    const tabs = ["Job preview", "Applicants", "Match", "Messages"];
    const [activeTab, setActiveTab] = useState("Job preview");
    const [underlineStyle, setUnderlineStyle] = useState({});
    const tabRefs = useRef([]);
  
    useEffect(() => {
        const activeTabElement = tabRefs.current[tabs.indexOf(activeTab)];
        if (activeTabElement) {
          const tabWidth = activeTabElement.offsetWidth;
          const underlineWidth = tabWidth * 0.4;
          setUnderlineStyle({
            left: `${activeTabElement.offsetLeft + (tabWidth - underlineWidth) / 2}px`,
            width: `${underlineWidth}px`,
          });
        }
      }, [activeTab]);
  
    return (
      <div className="relative flex px-16 border-b h-14">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            ref={(el) => (tabRefs.current[index] = el)}
            className={`px-4 py-2 text-base text-lg transition-all duration-300 ease-in-out ${
              activeTab === tab ? 'text-orange font-semibold'  : 'text-gray-400 hover:text-black'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <div 
          className="absolute bottom-0 h-0.5 bg-orange transition-all duration-300 ease-in-out"
          style={underlineStyle}
        />
      </div>
    );
  };

export default TabBar;
