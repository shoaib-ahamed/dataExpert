import React from "react";
import {
  FaBroom,
  FaFileAlt,
  FaExchangeAlt,
  FaCogs,
  FaKey,
} from "react-icons/fa";

const AboutDataExpert = () => {
  return (
    <div className="bg-gray-100 h-[90vh] py-24 px-8 lg:px-24">
      <div className="max-w-7xl mx-auto  h-full grid items-center justify-center">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          About DataExpert
        </h2>
        <p className="text-lg text-center text-gray-700 mb-8">
          At DataExpert, we are committed to delivering top-tier data services
          that enhance your operational efficiency and accuracy. Our wide range
          of services is tailored to meet your unique needs, ensuring a seamless
          user experience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaBroom className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-4">
              Data Cleaning
            </h3>
            <p className="text-gray-600 text-center">
              Remove duplicates, correct errors, and fill missing data in Excel,
              Word, and PDF files.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaFileAlt className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-4">
              Data Formatting
            </h3>
            <p className="text-gray-600 text-center">
              Restructure and standardize data into consistent formats like
              Excel, Word, and PDF.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaExchangeAlt className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-4">
              Document Conversion
            </h3>
            <p className="text-gray-600 text-center">
              Convert data between formats (e.g., Excel to Word, Word to PDF)
              for compatibility.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaCogs className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-4">
              Customized Solutions
            </h3>
            <p className="text-gray-600 text-center">
              Tailored services for bulk processing and complex document needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaKey className="text-blue-500 text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-4">
              Key-Value Pair Creation
            </h3>
            <p className="text-gray-600 text-center">
              Generate structured key-value pairs for organizing and managing
              data efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDataExpert;
