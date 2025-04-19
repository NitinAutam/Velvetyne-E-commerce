import React from 'react';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import Newsletter from '../components/Newsletter';

const Contact = () => {
  return (
    <div className="px-6 sm:px-10 md:px-20 lg:px-40 pt-16 bg-white text-gray-800">
      
      {/* Heading */}
      <div className="text-center text-3xl mb-10">
        <Title text1={"Contact"} text2={"Us"} />
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className=" overflow-hidden shadow-lg h-96  sm:h-80 md:h-96">
            <img
              src={assets.contact_img}
              alt="Contact Visual"
              className="w-full h-full object-cover bg-center"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-1/2 space-y-8 text-base sm:text-lg">
          {/* Office Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Our Office</h3>
            <p className="leading-relaxed">
              3rd Floor, Infinity Tower<br />
              Hitech City, Hyderabad - 500081<br />
              Telangana, India
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <p className="leading-relaxed">
              Tel: <a href="tel:+918885551234" className=" hover:underline">+91 88855 51234</a><br />
              Email: <a href="mailto:support@velvetyne.in" className=" hover:underline">support@velvetyne.in</a>
            </p>
          </div>

          {/* Careers Info */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Careers at Velvetyne</h3>
            <p className="mb-4 leading-relaxed">
              Join our mission to shape the future of type, design, and technology in India.
            </p>
            <button className="border border-gray-800 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-100 transition-all duration-300">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
};

export default Contact;
