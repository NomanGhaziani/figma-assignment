import React from "react";
// pages/index.js
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="grid grid-cols-2 gap-4 w-10/12">
        {/* Left - Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/summer.jpg" // Add the correct image path here
            alt="Couple"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center">
          <p className="text-gray-500 uppercase">Summer 2020</p>
          <h1 className="text-4xl font-bold text-gray-900 mt-2">Part of the Neural Universe</h1>
          <p className="text-gray-600 mt-4">
            We know how large objects will act, but things on a small scale.
          </p>

          {/* Buttons */}
          <div className="mt-6">
            <Link href="#">
              <button className="bg-green-500 text-white py-2 px-4 rounded mr-4">
                Buy Now
              </button>
            </Link>
            <Link href="#">
              <button className="border border-green-500 text-green-500 py-2 px-4 rounded">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
