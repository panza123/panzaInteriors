import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import process1 from '../assets/images/process1.jpg';
import process2 from '../assets/images/process2.jpg';
import process3 from '../assets/images/process3.jpg';
import ProcessText from '../components/ProcessText';
import HomeVideo from '../components/Aboutvideo'

const Process = () => {
  const images = [process1, process2, process3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='w-full min-h-screen'>
      <NavBar />

      {/* Hero Section with Background Image */}
      <div className="relative w-full h-screen overflow-hidden">
        {/* Background Images with Transition */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        
        {/* Overlay Content */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-8 sm:px-8 md:px-12 lg:px-16 pt-24">
          <div className="text-left max-w-3xl z-10">
            <h3 className="text uppercase col col-2xl text-4xl md:text-5xl font-bold mb-4 
            sm:mb-6 ">
              Process
            </h3>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-100">
            Everything we do
                             is connected together.
            </p>
          </div>
        </div>

        {/* Image Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex 
        space-x-2 z-10">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* {process write up} */}

      <div className='w-full '>
        <ProcessText/>

      </div>
        <div className='w-full  py-12'>
        <HomeVideo/>

      </div>
    </div>
  );
};

export default Process;