import {
  ChevronRight,
  ChevronLeft,
  Users,
  PlusCircle,
  Trash2,
  MessageSquare,
  Eye,
} from "lucide-react";

const Sidebar = ({ isOpen, onToggle }) => {
    const sidebarData = [
      { label: "Applicants", value: 400, icon: Users },
      { label: "Matches", value: 100, icon: Users },
      { label: "Messages", value: 147, icon: MessageSquare },
      { label: "Views", value: 800, icon: Eye },
    ];
  
    return (
      <>
        <div
          className={`fixed inset-y-0 right-0 transform ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:relative md:translate-x-0 transition-transform duration-300 ease-in-out z-30 bg-white`}
        >
          <div className="flex-col h-full p-6 border-l w-80">

            <div className="flex items-center gap-2 mb-6">
            <button className="flex items-center justify-center w-full px-2 py-2 space-x-2 text-red-500 transition-colors border border-red-500 rounded hover:bg-red-50">
                <Trash2 size={20} />
                <span className="text-sm">Delete Job</span>
              </button>
              <button className="flex items-center justify-center w-full px-2 py-2 space-x-2 text-white transition-colors rounded bg-orange hover:bg-red-400">
                <PlusCircle size={20} />
                <span className="text-sm">Add Job</span>
              </button>
            </div>


            <div className="flex-grow space-y-4">
              {sidebarData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <item.icon size={20} className="text-gray-500" />
                    <span>{item.label}</span>
                  </div>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={onToggle}
          className={`fixed top-1/2 right-0 transform -translate-y-1/2 ${
            isOpen ? "translate-x-0" : "-translate-x-0"
          } md:hidden bg-white border border-gray-200 rounded-l-full p-2 z-40 transition-transform duration-300 ease-in-out`}
        >
          {isOpen ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
        </button>
      </>
    );
  };
  
  const Overlay = ({ isVisible, onClick }) => (
    <div
      className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-50 z-20" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
    />
  );

export {Sidebar, Overlay}