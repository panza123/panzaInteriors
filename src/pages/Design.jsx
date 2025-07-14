import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import design1 from "../assets/images/design1.jpg";
import design2 from "../assets/images/design2.jpg";
import design3 from "../assets/images/design3.jpg";
import { services } from "../const";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ImageSlider from "../components/ImageSlider";


const Design = () => {
  const images = [design1, design2, design3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isHovered, images.length]);
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="w-full min-h-screen  overflow-hidden bg-white text-black">
      {/* Navbar */}
     
        <NavBar />
      

      {/* Background Image Slider */}
      <div
        className="w-full h-screen relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{ willChange: "opacity" }}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={image}
              alt={`Design Sample ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-20">
          <div className="text-center text-white px-6 max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 col leading-tight">
              Our Design Philosophy
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Creating beautiful, functional spaces that inspire and elevate
              everyday living.
            </p>
          </div>
        </div>
      </div>

      {/* Info + Services */}
      <div className="w-full max-w-7xl mx-auto bg-[#E9F1F7] px-6 md:px-12 lg:px-20 py-20">
        {/* Intro Section */}
        <div className="flex flex-col items-center text-center space-y-4 mb-16">
          <h2 className="text-sm md:text-base uppercase tracking-wide text-[#222] col">
            Panza Commercial Interiors
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-gray-900">
            We deliver on time and on budget for all your interior needs.
          </p>
          <p className="text-gray-700 max-w-2xl">
            We work with businesses to plan, design, and build turnkey workspace
            interior design projects from concept to completion.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services?.length > 0 ? (
            services.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg p-6 transition duration-300 group"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#F4D35E] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">
              No services available.
            </p>
          )}
        </div>
      </div>
      {/* {write up} */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start gap-12 py-16 px-4 sm:px-8 max-w-7xl mx-auto">
  {/* Left column */}
  <div className="w-full md:w-5/12 space-y-6">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Why choose Panza Interiors?
    </h2>
    <p className="text-lg text-gray-600 leading-relaxed">
      We are here to take the stress away and help you create the best
      environment for your team
    </p>

    <Link to="/about">
      <button className="flex items-center gap-2 btn-fancy w-1/2">
        <span>About us</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </Link>
  </div>

  {/* Right column */}
  <div className="w-full md:w-7/12 space-y-6">
    <p className="text-lg leading-relaxed">
      We understand - workplace projects can be stressful. Second to your
      people, your office is one of your biggest assets. It's important to
      get it right.
    </p>

    <ul className="space-y-4">
      <li className="flex items-start">
        <span className=" mr-3 mt-1">•</span>
        <span className="text-gray-700">Looking to introduce hybrid-working spaces?</span>
      </li>
      <li className="flex items-start">
        <span className=" mr-3 mt-1">•</span>
        <span className="text-gray-700">Need support with a big office move?</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 mt-1">•</span>
        <span className="text-gray-700">Re-imagining your existing space completely?</span>
      </li>
      <li className="flex items-start">
        <span className="mr-3 mt-1">•</span>
        <span className="text-gray-700">
          Need help with a complete fit-out and don't know where to start?
        </span>
      </li>
    </ul>
    
    <p className="text-lg font-extrabold leading-relaxed">No problem. ‍</p>
    <p className="text-lg  leading-relaxed">
      We specialise in delivering turnkey projects on time and on budget.
      With up to date knowledge of innovative products and best design
      practices, we are here to take the stress away and help you create
      the best environment for your team.
    </p>
  </div>
</div>
{/* {image slider} */}
<div className="w-full py-4 bg-[#E9F1F7] ">

      <div className="px-8 md:px-16 py-6  ">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 col">Panza Interiors</h2>

      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center">
        <p className="text-xl font-semibold mb-3 md:mb-0 md:text-6xl">Recent projects.</p>

        <Link to="/projects">
          <button className="sm:w-full flex items-center gap-2 btn-fancy ">
            View all projects <ArrowRight size={18} />
          </button>
        </Link>
      </div>
    </div>
 
 {/* {image slider in grid } */}
      <div className="px-8 md:px-16 py-6  ">
 
  <ImageSlider/>
 </div>

</div>
    </section>
  );
};

export default Design;
