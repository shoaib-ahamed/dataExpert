import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Empower your business with DataExpert’s advanced data solutions,
          </h1>
          <p className="text-lg md:text-xl mb-6">
            tailored to meet your unique document management needs.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full shadow-lg">
            <Link href="/about">Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
