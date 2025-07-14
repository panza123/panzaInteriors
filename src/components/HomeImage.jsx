import section from '../assets/images/section.jpg'
import section3 from '../assets/images/section3.jpg'
import section4 from '../assets/images/section4.jpg'
import section5 from '../assets/images/section5.jpg'
import section6 from '../assets/images/section6.jpg'
import { ArrowRight } from 'lucide-react'; 
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const HomeImage = () => {
  useGSAP(() => {
    // Animate each image block as it comes into view
    gsap.utils.toArray(".fade-img").forEach((img) => {
      gsap.from(img, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          end: "bottom center",
          scrub: false,
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  const images = [
    {
      src: section,
      title: 'Creative Work',
      desc: 'Designing modern interiors that inspire innovation.'
    },
    {
      src: section3,
      title: 'Elegant Spaces',
      desc: 'Blending functionality with timeless aesthetics.'
    },
    {
      src: section4,
      title: 'Office Makeover',
      desc: 'Transforming workspaces into productivity hubs.'
    },
    {
      src: section5,
      title: 'Retail Excellence',
      desc: 'Designing engaging shopping environments.'
    },
    {
      src: section6,
      title: 'Minimalist Designs',
      desc: 'Clean, simple, and highly effective layouts.'
    },
  ];

  return (
    <div className='w-full min-h-screen bg-black/80 text-white py-12'>
      <div className='max-w-6xl mx-auto px-6'>
        {/* Heading and Description */}
        <div>
          <h4 className='text-2xl font-bold mb-2 uppercase col'>
            Panza Commercial Interiors
          </h4>
          <p className='text-xl mb-2 font-bold'>Recent projects</p>
          <p className='mb-6 max-w-3xl'>
            Whether you're renovating your current space or relocating to an entirely new building,
            our goal is to make the entire process seamless and stress-free. We handle everything—
            from design and project management to final delivery—so you don't have to worry about a thing.
          </p>
          <Link to="/project">
            <button className="flex items-center gap-3 btn-fancy ">
              Design & Build <ArrowRight size={20} />
            </button>
          </Link>
        </div>

        {/* Image Stack with Animation */}
        <div className='flex flex-col items-center gap-10 mt-10'>
          {images.map((img, index) => (
            <div key={index} className='fade-img relative w-full group overflow-hidden rounded-lg shadow-lg'>
              {/* Image */}
              <img
                src={img.src}
                alt={`Project ${index + 1}`}
                className='w-full h-auto object-cover'
              />

              {/* Black Overlay on Hover */}
              <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

              {/* Text Block on Left Side */}
              <div className='absolute left-6 bottom-10 opacity-0 group-hover:opacity-100 transition-opacity delay-300 z-10 text-left'>
                <h1 className='text-xl font-semibold uppercase col'>{img.title}</h1>
                <p className='text-gray-200 text-xl'>{img.desc}</p>
              </div>

              {/* + Button on Bottom Right */}
              <div className='absolute bottom-4 right-4 flex items-center group-hover:space-x-2'>
                <button
                  className='w-10 h-10 flex items-center justify-center text-xl font-bold bg-white text-black rounded-full cursor-pointer hover:bg-yellow-400 transition duration-300 z-10'>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeImage;
