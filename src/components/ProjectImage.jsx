import { Plus} from 'lucide-react';
import project1 from '../assets/images/project1.jpg'
import project2 from '../assets/images/project2.jpg'
import project3 from '../assets/images/project3.jpg'
import project4 from '../assets/images/project4.jpg'
import project5 from '../assets/images/project5.jpg'
import project6 from '../assets/images/project6.jpg'
import project7 from '../assets/images/project7.jpg'
import project8 from '../assets/images/project8.jpg'
import project9 from '../assets/images/project9.jpg'
import project10 from '../assets/images/project10.jpg'
import project11 from '../assets/images/project11.jpg'
import project12 from '../assets/images/project12.jpg'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)


const images = [
  { id: 1, img: project1, title: 'Corporate Office Interior' },
  { id: 2, img: project2, title: 'Luxury Apartment Lounge' },
  { id: 3, img: project3, title: 'Open Workspace Renovation' },
  { id: 4, img: project4, title: 'Reception Area Redesign' },
  { id: 5, img: project5, title: 'Modern Conference Room' },
  { id: 6, img: project6, title: 'Creative Studio Layout' },
  { id: 7, img: project7, title: 'Executive Office Suite' },
  { id: 8, img: project8, title: 'Co-working Space Concept' },
  { id: 9, img: project9, title: 'Tech Office Lounge' },
  { id: 10, img: project10, title: 'Architectural Hallway' },
  { id: 11, img: project11, title: 'Urban Workspace Setup' },
  { id: 12, img: project12, title: 'Boardroom with View' },
];

export const ProjectImage = () => {
  useGSAP(()=>{
    gsap.utils.toArray('.fade-img').forEach((img)=>{
      gsap.from(img,{
        y:100,
        opacity:0,
        duration:1,
        ease:'power3.inOut',
        stagger:0.5,
        scrollTrigger:{
          trigger:img,
          start:'top 80%',
          end:"bottom center",
          scrub:false,
           toggleActions: 'play none none reverse',
        }
      })

    })
  },[])
  return (
    <div className="w-full grid md:grid-cols-2  gap-6">
      {images.map((item) => (
        <div key={item.id} className="relative group overflow-hidden h-64 fade-img">
          <img
            src={item.img}
            alt={item.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center items-center text-white px-4 text-center">
            <p className="text-lg font-medium mb-4">{item.title}</p>

            <button className="border border-white rounded-full p-3 transition-transform duration-300 group-hover:rotate-90">
              <Plus className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
