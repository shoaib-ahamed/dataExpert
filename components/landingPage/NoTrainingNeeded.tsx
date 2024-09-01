import React from "react";
import { FaRobot, FaTasks } from "react-icons/fa";

const NoTrainingNeeded = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-teal-200 via-green-200 to-blue-200 rounded-lg shadow-lg mt-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        No Training Needed
      </h2>
      <p className="text-lg text-gray-800 flex items-center mb-4">
        <FaRobot className="text-purple-400 text-2xl mr-3" />
        No training and no template creation needed. Thanks to embedded
        algorithms, our prepackaged analytics can efficiently detect data points
        and assemble them into key-value pairs or tables.
      </p>
      <p className="text-lg text-gray-800 flex items-center">
        <FaTasks className="text-orange-400 text-2xl mr-3" />
        The algorithms combine machine learning methods with document layout
        heuristics to identify extraction elements through structural and
        functional analysis.
      </p>
    </div>
  );
};

export default NoTrainingNeeded;
