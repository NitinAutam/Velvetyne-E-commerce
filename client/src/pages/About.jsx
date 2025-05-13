import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import Newsletter from '../components/Newsletter';

const About = () => {
  return (
    <div className="px-6 md:px-20 lg:px-40 pt-20">
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-24">
        {/* Image on the Left */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-96 bg-gray-300 flex items-center justify-center rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={assets.about_img}
              alt="About Velvetyne"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Content on the Right */}
        <div className="w-full lg:w-1/2 text-gray-800">
          <div className="text-left mb-4">
            <div className="text-3xl">
              <Title text1={"About"} text2={"Us"} />
            </div>
          </div>

          <p className="mb-6">
            Velvetyne was founded with a commitment to open collaboration and a bold vision to
            redefine type design through accessibility, creativity, and community. What began as an
            independent initiative to share experimental fonts has evolved into a globally
            recognized collective of passionate designers.
          </p>
          <p className="mb-6">
            Since our beginnings, we've championed the power of open-source design by offering
            high-quality, unique typefaces that are free to use and adapt. Our fonts have been used
            in everything from editorial layouts and digital interfaces to bold branding projects
            and artistic experiments.
          </p>
          <h3 className="font-semibold mb-2">Our Mission</h3>
          <p>
            At Velvetyne, we believe in democratizing design. Our mission is to foster a culture of
            sharing, experimentation, and typographic innovation—empowering creatives everywhere to
            break boundaries and shape new visual languages.
          </p>
        </div>
      </div>
      <Newsletter/>
    </div>
  );
};

export default About;
