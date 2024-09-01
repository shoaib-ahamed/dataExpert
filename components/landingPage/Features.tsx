import React from "react";
import {
  FaRegLightbulb,
  FaRegFileAlt,
  FaRegCheckCircle,
  FaRegClock,
} from "react-icons/fa";

const Features = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6">
        Semantic Matching Plugin Features
      </h1>

      <div className="space-y-6">
        {/* Semantic Matching */}
        <div className="flex items-start space-x-4">
          <FaRegLightbulb className="text-blue-500 text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Semantic Matching</h2>
            <p className="mt-2 text-gray-600">
              The plugin utilizes advanced semantic matching algorithms to
              identify key names accurately, even with common OCR errors. It
              includes over a thousand pre-configured index keys used in
              financial documents and understands various data types such as
              amounts, dates, and addresses.
            </p>
          </div>
        </div>

        {/* No Training Needed */}
        <div className="flex items-start space-x-4">
          <FaRegFileAlt className="text-green-500 text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">No Training Needed</h2>
            <p className="mt-2 text-gray-600">
              Start using the plugin immediately without any training or
              template creation. Its built-in algorithms detect data points and
              assemble them into key-value pairs or tables efficiently through
              structural and functional analysis.
            </p>
          </div>
        </div>

        {/* Ensure Accuracy */}
        <div className="flex items-start space-x-4">
          <FaRegCheckCircle className="text-yellow-500 text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Ensure Accuracy</h2>
            <p className="mt-2 text-gray-600">
              Define specific rules and logic to guide users and reduce errors
              from manual contract creation. This feature helps eliminate common
              mistakes and bottlenecks, making processes smoother for less
              experienced users.
            </p>
          </div>
        </div>

        {/* Versioning */}
        <div className="flex items-start space-x-4">
          <FaRegClock className="text-red-500 text-4xl" />
          <div>
            <h2 className="text-2xl font-semibold">Versioning</h2>
            <p className="mt-2 text-gray-600">
              Automatically save edited documents as new versions, keeping track
              of document histories. This ensures control over revisions and
              allows easy reversion to previous versions when needed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
