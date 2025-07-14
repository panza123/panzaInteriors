import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import aisha from '../assets/images/aisha.jpg';
import amaka from '../assets/images/amaka.jpg';
import blessing from '../assets/images/blessing.jpg';
import daniel from '../assets/images/daniel.jpg';
import musa from '../assets/images/musa.jpg';
import eze from '../assets/images/eze.jpg';
import tunde from '../assets/images/tunde.jpg';
import samuel from '../assets/images/samuel.jpg';
import zainab from '../assets/images/zainab.jpg';
import ngozi from '../assets/images/ngozi.jpg';

gsap.registerPlugin(ScrollTrigger);

const teamMembers = [
  { name: 'Amaka Johnson', role: 'Interior Designer', image: amaka, desc: 'Designs the layout, color schemes, and aesthetics of interior spaces.' },
  { name: 'Tunde Balogun', role: 'Project Manager', image: tunde, desc: 'Oversees the entire interior project, coordinates team, timelines, and budgets.' },
  { name: 'Chinonso Eze', role: 'Architectural Drafter', image: eze, desc: 'Creates technical drawings and plans used for building interiors.' },
  { name: 'Aisha Bello', role: '3D Visualizer', image: aisha, desc: 'Produces 3D renderings and virtual walkthroughs of interior concepts.' },
  { name: 'Daniel Okeowo', role: 'Furniture Designer', image: daniel, desc: 'Custom-designs furniture pieces tailored to the space and concept.' },
  { name: 'Zainab Yusuf', role: 'Lighting Specialist', image: zainab, desc: 'Plans and installs lighting layouts to enhance ambiance and function.' },
  { name: 'Ibrahim Musa', role: 'Site Supervisor', image: musa, desc: 'Manages on-site activities, ensuring construction and finishing follow design specs.' },
  { name: 'Samuel Umeh', role: 'Carpenter/Joiner', image: samuel, desc: 'Builds and installs custom cabinetry, woodwork, and fittings.' },
  { name: 'Blessing Akande', role: 'Painter & Finisher', image: blessing, desc: 'Applies wall treatments, paints, and finishing touches to surfaces.' },
  { name: 'Ngozi Okafor', role: 'Interior Stylist', image: ngozi, desc: 'Finalizes decor details like accessories, textiles, and staging for the perfect visual impact.' },
];

const AboutImage = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.utils.toArray('.fade-img').forEach((img) => {
      gsap.from(img, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: img,
          start: 'top 85%',
          end: 'bottom center',
          scrub: false,
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-black/80 text-white px-6 py-12" ref={containerRef}>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white col">OUR PEOPLE</h2>
        <p className="mt-4 text-lg">A team you can trust.</p>
        <p className="mt-2 text-sm  max-w-xl mx-auto">
          Panza by definition:{' '}
          <span className="col font-semibold">
            “A combination of persons forming a unit with a common purpose.”
          </span>
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="fade-img relative bg-white/5 rounded-lg 
          overflow-hidden p-4 shadow  hover:shadow-lg transition duration-300">
            {/* Image */}
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover rounded mb-4  hover:object-[center_45%] transition duration-300"
              loading="eager"
            />

            {/* Text */}
            <h3 className="text-xl font-semibold col">{member.name}</h3>
            <p className="text-sm italic text-gray-300">{member.role}</p>
            <p className="mt-2 text-sm text-gray-400">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutImage;
