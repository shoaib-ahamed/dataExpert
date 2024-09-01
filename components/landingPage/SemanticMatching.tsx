import React from "react";
import {
  FaLightbulb,
  FaKey,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const SemanticMatching = () => {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">
        Semantic Matching
      </h2>
      <p className="text-lg text-gray-800 flex items-center mb-4">
        <FaLightbulb className="text-yellow-400 text-2xl mr-2" />
        The plugin includes a powerful Semantic mechanism capable of matching
        key names even if they include common OCR errors.
      </p>
      <p className="text-lg text-gray-800 flex items-center">
        <FaKey className="text-green-400 text-2xl mr-2" />
        Pre-Configured Algorithms include over a thousand Index keys commonly
        used in Financial Documents. It is also aware of data types like amount,
        date, address, etc.
      </p>
    </div>
  );
};

export default SemanticMatching;
