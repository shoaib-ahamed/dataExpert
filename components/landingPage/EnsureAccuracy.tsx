import React from "react";
import { FaBullseye, FaExclamationCircle, FaUserFriends } from "react-icons/fa";

const EnsureAccuracy = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-yellow-200 via-orange-200 to-red-200 rounded-lg shadow-lg mt-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Ensure Accuracy</h2>
      <ul className="list-disc pl-5 text-gray-800 space-y-3">
        <li className="flex items-center">
          <FaBullseye className="text-green-400 text-xl mr-3" />
          Define rules and logic to guide users.
        </li>
        <li className="flex items-center">
          <FaExclamationCircle className="text-red-400 text-xl mr-3" />
          Eliminate errors caused when manually creating contracts.
        </li>
        <li className="flex items-center">
          <FaUserFriends className="text-blue-400 text-xl mr-3" />
          Remove bottlenecks by enabling less knowledgeable users.
        </li>
      </ul>
      <a href="#" className="text-blue-600 hover:underline mt-4 block">
        Jump to full explanation
      </a>
    </div>
  );
};

export default EnsureAccuracy;
