import React from "react";
import {
  FaUsers,
  FaChartLine,
  FaBullseye,
  FaCalendarAlt,
  FaFilter,
  FaGlobe,
  FaUserCheck,
} from "react-icons/fa";

const icons = [
  { Icon: FaUsers, label: "Lead Generation" },
  { Icon: FaChartLine, label: "Growth Marketing" },
  { Icon: FaBullseye, label: "Targeted Campaigns" },
  { Icon: FaCalendarAlt, label: "Appointment Booking" },
  { Icon: FaFilter, label: "AI Filtering" },
  { Icon: FaGlobe, label: "Web Presence" },
  { Icon: FaUserCheck, label: "Verified Leads" },
];

const Customers: React.FC = () => {
  return (
    <div className="w-full py-12 bg-black dark:bg-white">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row w-full">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white dark:text-black text-center md:text-left">
                Trusted by 500+ coaches worldwide
              </h2>
              <p className="text-lg text-gray-300 dark:text-gray-700 text-center md:text-left">
                From mindset coaches to fitness trainers, we've helped coaches scale their businesses with qualified, high-intent leads.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end gap-8 md:w-1/2">
              {icons.map(({ Icon, label }, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <Icon className="text-3xl md:text-4xl text-white dark:text-black mb-2" />
                  <span className="text-xs text-gray-400 dark:text-gray-600 text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
