import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              &copy; {new Date().getFullYear()} Shoaib Ahamed Shafi & Anindo.
              All Rights Reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-white"
            >
              Privacy Policy
            </Link>
            <a
              href="/termsofservices"
              className="text-gray-400 hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
