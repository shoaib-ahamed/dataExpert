import React from "react";
import {
  FaBroom,
  FaFileAlt,
  FaExchangeAlt,
  FaPuzzlePiece,
  FaKey,
} from "react-icons/fa";

const Services = () => {
  return (
    <div className="bg-gray-50 py-12 items-center justify-center h-[85vh]">
      <div className="max-w-7xl  flex flex-col items-center justify-center h-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1: Data Cleaning */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaBroom className="text-indigo-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Data Cleaning
            </h3>
            <p className="text-gray-600">
              Remove duplicates, correct errors, and fill missing data in Excel,
              Word, and PDF files.
            </p>
          </div>

          {/* Service 2: Data Formatting */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaFileAlt className="text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Data Formatting
            </h3>
            <p className="text-gray-600">
              Restructure and standardize data into consistent formats like
              Excel, Word, and PDF.
            </p>
          </div>

          {/* Service 3: Document Conversion */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaExchangeAlt className="text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Document Conversion
            </h3>
            <p className="text-gray-600">
              Convert data between formats (e.g., Excel to Word, Word to PDF)
              for compatibility.
            </p>
          </div>

          {/* Service 4: Customized Solutions */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaPuzzlePiece className="text-red-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Customized Solutions
            </h3>
            <p className="text-gray-600">
              Tailored services for bulk processing and complex document needs.
            </p>
          </div>

          {/* Service 5: Key-Value Pair Creation */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaKey className="text-yellow-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Key-Value Pair Creation
            </h3>
            <p className="text-gray-600">
              Generate structured key-value pairs for organizing and managing
              data efficiently across various document formats.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
