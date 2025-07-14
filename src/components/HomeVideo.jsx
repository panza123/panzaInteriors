import { useRef } from 'react';
import work from '../assets/images/work.mp4';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Power3 } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const HomeVideo = () => {
  const triggerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.dis',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top 80%',
          end: 'bottom center',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div
      className="w-full h-[500px] md:h-[600px] relative overflow-hidden "
      ref={triggerRef}
    >
      {/* Video Background */}
      <video
        src={work}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black/30">
        <div className="dis absolute top-6 md:top-12 right-6 md:right-12 max-w-xl backdrop-blur-md bg-white/10 text-white p-6 md:p-8 rounded-2xl shadow-xl space-y-4 border border-white/20">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-yellow-300">
            Office Design, Fit-out & Refurb
          </h2>
          <p className="text-lg md:text-xl font-medium">
            Creating innovative workspaces for a modern workforce.
          </p>

          <p className="text-sm md:text-base leading-relaxed text-white/90">
            Whether you’re looking to reconfigure your existing space or
            you’re on the move, our friendly team is here to give your office
            the attention to detail it needs.
          </p>

          <Link to="/contact" className="inline-block">
            <button className="btn-fancy flex items-center gap-2 mt-2">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
