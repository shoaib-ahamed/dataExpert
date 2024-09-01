import React from "react";
import { FaHistory, FaSave } from "react-icons/fa";

const Versioning = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-indigo-200 via-blue-200 to-cyan-200 rounded-lg shadow-lg mt-6">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Versioning</h2>
      <p className="text-lg text-gray-800 flex items-center mb-4">
        <FaHistory className="text-blue-400 text-2xl mr-3" />
        Automatically save edited documents as a new version and always keep
        document histories under control.
      </p>
      <p className="text-lg text-gray-800 flex items-center">
        <FaSave className="text-green-400 text-2xl mr-3" />
        This feature ensures you can track all changes and revert to previous
        versions if needed, maintaining a comprehensive history of document
        edits.
      </p>
    </div>
  );
};

export default Versioning;
