import { useState } from "react";

import Header from "./components/Header";
import TabBar from "./components/TabBar";
import { Sidebar, Overlay } from "./components/Sidebar";
import JobDetails from "./components/JobDetails";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen overflow-hidden font-sans bg-white">
      <Header className=""/>
      <TabBar />
      <div className="relative flex">
        <div className="px-16 overflow-auto">
          <JobDetails />
        </div>
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      </div>
      <Overlay isVisible={isSidebarOpen} onClick={toggleSidebar} />
    </div>
  );
};

export default App;
