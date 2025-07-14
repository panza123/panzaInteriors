import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import background1 from '../assets/images/background.jpg';
import background2 from '../assets/images/background2.jpg';
import background3 from '../assets/images/background3.jpg';
import sectionImage from '../assets/images/section2.jpg';
import HomeImage from '../components/HomeImage';
import HomeVideo from '../components/HomeVideo';
import TestimonyGrid from '../components/TestimonyGris';

const images = [background1, background2, background3];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Background image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full min-h-screen bg-white text-black">
      {/* NavBar - now properly fixed in its own component */}
      <NavBar />

      {/* Background Slider */}
      <div
        className="w-full h-screen bg-cover bg-center transition-all duration-[1500ms] ease-in-out"
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
      >
        <div className="w-full h-full flex items-center justify-start px-4 sm:px-8 md:px-12 lg:px-16 pt-24 bg-black/40">
          <div className="text-left max-w-3xl z-10">
            <h3 className="uppercase text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 col">
              Panza Commercial Interiors
            </h3>
            <p className="text-base sm:text-lg md:text-2xl leading-relaxed text-gray-100">
              We produce outstanding workplace solutions by combining exquisite design with precision building.
            </p>
          </div>
        </div>
      </div>

      {/* Additional Section Below Slider */}
      <div className="w-full py-16 px-4 sm:px-8 md:px-16 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Text Column */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 uppercase col">
              Panza Commercial Interiors
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-semibold mb-6 text-black">
              We design & build commercial interiors with a focus on quality, transparency and 100% client satisfaction.
            </p>
            <ul className="flex flex-col gap-4 text-sm sm:text-base text-gray-700 mb-6">
              <li>
                Panza was founded in 2020 by Managing Director Keith Willis, who set out with a clear mission — to deliver the best project experience in the workspace design industry.
              </li>
              <li>
                Put simply, we partner with businesses to plan, design, and deliver turnkey workspace interiors. From the first idea to the final handover, we manage every detail.
              </li>
              <li>
                Our all-in-one service covers every stage of an office fit-out — from sourcing the building and managing the lease, to crafting the design, executing the build, and even helping you unpack the crates in your new workspace.
              </li>
            </ul>
            <Link to="/design">
              <button className="flex items-center gap-2 btn-fancy w-full sm:w-1/2 text-sm sm:text-base">
                Design & Build <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          {/* Image Column */}
          <div className="w-full">
            <img
              src={sectionImage}
              alt="Why Choose Us"
              className="w-full h-auto max-h-[500px] rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Home Image Component */}
      <div className="w-full ">
        <HomeImage  />
      </div>

      {/* About Section */}
      <div className="w-full bg-white text-black py-16 px-4 sm:px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch gap-10 md:gap-20">
          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 col">
              Panza Commercial Interiors
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6 leading-relaxed">
              Our dynamic team is dedicated to modern, design-led delivery with transparency & integrity.
            </p>
            <Link to="/about">
              <button className="flex items-center gap-2 btn-fancy w-full sm:w-1/2 text-sm sm:text-base">
                about panza <ArrowRight size={18} />
              </button>
            </Link>
          </div>

          {/* Right Section */}
          <div className="flex-1 space-y-4 text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              <span className="font-bold text-black">Our</span> team brings a wealth of industry talent & experience. Based in Surrey, our small but dedicated team's core mission is to deliver the highest level of service our industry has to offer.
            </p>
            <p>
              <span className="font-bold text-black">Our</span> approach involves using modern methods of design & delivery. We don't mimic large corporations or rely on outdated, inefficient processes.
            </p>
            <p>
              <span className="font-bold text-black">Our</span> aim is 100% client satisfaction. We collaborate closely with clients to define goals clearly and deliver results. Every project has Director-level involvement—during and after completion.
            </p>
          </div>
        </div>
      </div>

      {/* Home Video Component */}
      <div className="w-full">
        <HomeVideo />
      </div>

      {/* Testimony Grid */}
      <div className="w-full ">
        <TestimonyGrid />
      </div>
    </section>
  );
};

export default Home;