import React from "react";
export default function Summer() {
    return (
      <div className="flex items-center justify-center h-screen bg-green-500">
        <div className="flex items-center max-w-6xl mx-auto">
          {/* Left Side - Text */}
          <div className="w-1/2 text-white">
            <p className="text-xl uppercase">Summer 2020</p>
            <h1 className="text-6xl font-bold">Vita Classic Product</h1>
            <p className="text-lg mt-4">
              We know how large objects will act, We know how are objects will act,
              We know
            </p>
            <div className="flex items-center mt-6">
              <p className="text-2xl">$16.48</p>
              <button className="ml-4 px-6 py-2 bg-green-700 text-white rounded-lg">
                ADD TO CART
              </button>
            </div>
          </div>
  
          {/* Right Side - Image */}
          <div className="w-1/2">
            <img
              src="/product-image.jpg"
              alt="Product"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        
      </div>
      
    )
  }
  