import React from "react";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaUserShield,
  FaGavel,
} from "react-icons/fa";

const TermsOfService = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Terms of Service
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Last Updated: <span className="font-semibold">2 Sept 2024</span>
        </p>

        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Acceptance of Terms
            </h2>
            <p className="text-gray-600 mt-2">
              By accessing and using the DataExpert software, you acknowledge
              that you have read, understood, and agree to be bound by these
              Terms of Service.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <FaUserShield className="text-green-600 mr-2" />
              Services Provided
            </h2>
            <ul className="list-disc pl-6 text-gray-600 mt-2">
              <li>
                Data Cleaning: Removal of duplicates, error correction, and
                filling of missing data in various formats like Excel, Word, and
                PDF.
              </li>
              <li>
                Data Formatting: Standardizing and restructuring data into
                consistent formats.
              </li>
              <li>
                Document Conversion: Conversion of data between formats for
                compatibility.
              </li>
              <li>
                Customized Solutions: Tailored services for complex document
                processing needs.
              </li>
              <li>
                Key-Value Pair Creation: Structuring data into key-value pairs
                for efficient management.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <FaGavel className="text-red-600 mr-2" />
              User Responsibilities
            </h2>
            <p className="text-gray-600 mt-2">
              As a user, you agree to comply with all applicable laws, maintain
              the confidentiality of your account, and use the software
              responsibly.
            </p>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <FaExclamationCircle className="text-yellow-600 mr-2" />
              Privacy and Data Security
            </h2>
            <p className="text-gray-600 mt-2">
              Your use of DataExpert is governed by our Privacy Policy. We
              employ commercially reasonable measures to protect your
              information.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <FaExclamationCircle className="text-yellow-600 mr-2" />
              Prohibited Activities
            </h2>
            <p className="text-gray-600 mt-2">
              You agree not to use the software for any illegal purposes or
              engage in activities that interfere with or disrupt the software.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Limitation of Liability
            </h2>
            <p className="text-gray-600 mt-2">
              DataExpert provides the software "as is" and makes no warranties
              regarding its functionality or performance. We are not liable for
              any damages arising from your use of the software.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <FaGavel className="text-red-600 mr-2" />
              Governing Law
            </h2>
            <p className="text-gray-600 mt-2">
              These terms are governed by the laws of [Your Country/State].
              Disputes will be subject to the exclusive jurisdiction of the
              courts located in [Your Jurisdiction].
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Modifications to the Service
            </h2>
            <p className="text-gray-600 mt-2">
              We reserve the right to modify, suspend, or discontinue any aspect
              of the software at any time without notice.
            </p>
          </div>

          {/* Section 9 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 flex items-center">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Contact Information
            </h2>
            <p className="text-gray-600 mt-2">
              If you have any questions regarding these Terms of Service, please
              contact us at:{" "}
              <a
                href="mailto:dataexpert@gmail.com"
                className="text-blue-500 hover:underline"
              >
                dataexpert@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
