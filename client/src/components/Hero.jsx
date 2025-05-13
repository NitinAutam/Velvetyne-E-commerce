import React from 'react'
import { assets} from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-300 mx-4 sm:mx-24 overflow-hidden">
            {/* Text Section */}
            <div className="w-full sm:w-1/2 flex flex-col justify-center items-center px-4 sm:px-12 py-12 bg-white text-center">
              {/* Line + "Bestsellers" */}
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-0.5 bg-gray-400"></div>
                <p className="uppercase text-gray-500 text-xs sm:text-sm tracking-widest mx-2">
                  Our Bestsellers
                </p>
              </div>
    
              {/* Main Heading */}
              <h1 className="text-gray-900 text-3xl sm:text-4xl font-semibold mb-6">
                Latest Arrivals
              </h1>
    
              {/* Line + "Shop Now" */}
              <div className="flex items-center justify-center space-x-4">
                <a
                  href="#"
                  className="text-gray-900 font-medium text-lg sm:text-xl hover:text-pink-500 transition-colors"
                >
                  Shop Now
                </a>
                <div className="w-12 h-0.5 bg-gray-400"></div>
              </div>
            </div>
    
            {/* Image Section */}
            <div className="w-full sm:w-1/2 bg-pink-100 flex items-center justify-center">
              <img
                className="w-full h-auto object-cover"
                src={assets.hero_img}
                alt="Hero"
              />
            </div>
          </div>
  )
}

export default Hero