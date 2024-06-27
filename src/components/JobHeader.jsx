import { MapPin, Briefcase } from "lucide-react";

const JobHeader = ({ title, location, salary, status }) => (
  <div className="mb-6">
    <div className="flex items-center gap-3">
      <div className="mb-2 text-3xl font-extrabold text-gray-700">{title}</div>
      <div className="flex items-center gap-3">
        <span className="flex items-center text-xs text-gray-500">
          <div className="w-1 h-1 mr-2 bg-gray-400 rounded-full"></div>
          posted 2 days ago
        </span>

        <span
          className={`flex items-center text-xs px-2 py-1 border rounded-full ${
            status === "Open"
              ? "text-green-600 bg-green-100 border-green-500"
              : "text-gray-600 bg-gray-100"
          }`}
        >
          <div
            className={`w-2 h-2 rounded-full mr-2 ${
              status === "Open" ? "bg-green-500 animate-pulse" : "bg-gray-400"
            }`}
          ></div>
          {status}
        </span>
      </div>
    </div>
    <div className="flex items-center space-x-4 text-base text-gray-600">
      <span className="flex items-center gap-2">
        <MapPin size={16} /> {location}
      </span>
      <div className="w-1 h-1 mr-2 bg-gray-400 rounded-full"></div>
      <span className="flex items-center gap-3">
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 5.5C13 6.60457 10.5376 7.5 7.5 7.5C4.46243 7.5 2 6.60457 2 5.5M13 5.5C13 4.39543 10.5376 3.5 7.5 3.5C4.46243 3.5 2 4.39543 2 5.5M13 5.5V7M2 5.5V17.5C2 18.6046 4.46243 19.5 7.5 19.5M7.5 11.5C7.33145 11.5 7.16468 11.4972 7 11.4918C4.19675 11.4 2 10.5433 2 9.5M7.5 15.5C4.46243 15.5 2 14.6046 2 13.5M22 12C22 13.1046 19.5376 14 16.5 14C13.4624 14 11 13.1046 11 12M22 12C22 10.8954 19.5376 10 16.5 10C13.4624 10 11 10.8954 11 12M22 12V19.5C22 20.6046 19.5376 21.5 16.5 21.5C13.4624 21.5 11 20.6046 11 19.5V12M22 15.75C22 16.8546 19.5376 17.75 16.5 17.75C13.4624 17.75 11 16.8546 11 15.75"
            stroke="#5D5D5D"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {salary}
      </span>
    </div>
  </div>
);

export default JobHeader;