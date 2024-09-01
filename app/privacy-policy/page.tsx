import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-20  sm:px-6 lg:px-8">
        <div className="bg-white shadow sm:rounded-lg p-32">
          {/* Section Title */}
          <h2 className="text-3xl font-semibold text-gray-900 mb-8">
            Privacy Policy
          </h2>

          {/* Section 1 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              1. Information We Collect
            </h3>
            <p className="text-gray-600 mb-2">
              We may collect the following types of information when you use the
              Software:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>
                Personal Information: Name, email address, phone number, etc.
              </li>
              <li>Usage Data: IP address, device type, browser type, etc.</li>
              <li>Data You Input: Uploaded text, images, or documents.</li>
              <li>
                Cookies and Tracking Technologies: Information about your
                interactions with the Software.
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              2. How We Use Your Information
            </h3>
            <p className="text-gray-600 mb-2">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>To provide and maintain the Software.</li>
              <li>
                To personalize your experience and offer customized features.
              </li>
              <li>
                To communicate with you, including sending updates and technical
                support.
              </li>
              <li>
                To improve the functionality and performance of the Software.
              </li>
              <li>To process payments for services.</li>
              <li>
                To comply with legal obligations and protect our legal rights.
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              3. Data Security
            </h3>
            <p className="text-gray-600">
              We take data security seriously and implement appropriate measures
              to protect your personal information from unauthorized access,
              disclosure, or destruction. However, no data transmission over the
              internet or storage system can be guaranteed to be 100% secure.
            </p>
          </div>

          {/* Section 4 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              4. Sharing and Disclosure of Information
            </h3>
            <p className="text-gray-600">
              We do not sell or rent your personal information. We may share
              your information with service providers, legal authorities, or in
              the event of a business transfer.
            </p>
          </div>

          {/* Section 5 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              5. Your Data Rights
            </h3>
            <p className="text-gray-600">
              Depending on your location and applicable data protection laws,
              you may have the right to access, correct, or delete your data,
              restrict or object to processing, or request data portability.
            </p>
          </div>

          {/* Section 6 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              6. Third-Party Links
            </h3>
            <p className="text-gray-600">
              The Software may contain links to third-party websites or
              services. We are not responsible for their privacy practices.
            </p>
          </div>

          {/* Section 7 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              7. Children’s Privacy
            </h3>
            <p className="text-gray-600">
              Our Software is not intended for use by individuals under the age
              of 18.
            </p>
          </div>

          {/* Section 8 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              8. Changes to This Privacy Policy
            </h3>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Please review
              it periodically for changes.
            </p>
          </div>

          {/* Section 9 */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              9. Contact Us
            </h3>
            <p className="text-gray-600">
              If you have any questions or concerns,{" "}
              <p>
                {" "}
                please contact us at:{" "}
                <button type="button" className="text-blue-800 font-bold">
                  dataexpert@gmail.com.
                </button>
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
