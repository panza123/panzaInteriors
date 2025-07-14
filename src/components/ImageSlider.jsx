import { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';
import slider3 from '../assets/images/slider3.jpg';
import slider4 from '../assets/images/slider4.jpg';
import slider5 from '../assets/images/slider5.jpg';
import slider6 from '../assets/images/slider6.jpg';
import slider7 from '../assets/images/slider7.jpg';
import slider8 from '../assets/images/slider8.jpg';
import slider9 from '../assets/images/slider9.jpg';
import slider10 from '../assets/images/slider10.jpg';
import slider11 from '../assets/images/slider11.jpg';
import slider12 from '../assets/images/slider12.jpg';

const slides = [
  [
    { type: 'main', src: slider3 },
    { type: 'stack', srcs: [slider2, slider1] },
  ],
  [
    { type: 'main', src: slider4 },
    { type: 'stack', srcs: [slider5, slider6] },
  ],
  [
    { type: 'main', src: slider7 },
    { type: 'stack', srcs: [slider8, slider9] },
  ],
  [
    { type: 'main', src: slider10 },
    { type: 'stack', srcs: [slider11, slider12] },
  ],
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentSlide = slides[currentIndex];

  return (
    <div className='w-full flex flex-col items-center gap-6'>
      {/* Slide Container */}
      <div className='w-full grid grid-cols-2 gap-4 transition-all duration-700 ease-in-out'>
        {/* Main Image */}
        <img
          src={currentSlide[0].src}
          alt=''
          className='w-full h-full object-cover rounded-xl transition-all duration-700 ease-in-out'
        />

        {/* Stacked Images */}
        <div className='grid gap-4'>
          {currentSlide[1].srcs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=''
              className='object-cover w-full h-full rounded-xl transition-all duration-700 ease-in-out'
            />
          ))}
        </div>
      </div>

      {/* Navigation Dots with Arrows */}
      <div className='flex items-center gap-6'>
        {/* Back Arrow */}
     

        {/* Four Navigation Buttons */}
        <div className='flex gap-3'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-4 h-4 rounded-full ${
                index === currentIndex ? 'bg-gray-800' : 'bg-gray-400'
              } hover:bg-gray-600 transition-all duration-300`}
            />
          ))}
        </div>

      
      </div>
    </div>
  );
};

export default ImageSlider;
