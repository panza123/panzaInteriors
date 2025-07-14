import { useRef } from "react";
import work from "../assets/images/aboutvideo.mp4";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power3 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const AboutVideo = () => {
  const triggerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      ".dis",
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
        ease: Power3.easeOut,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none reverse",
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
        <div className="dis absolute top-6 md:top-12 right-6 md:right-12 max-w-xl backdrop-blur-md
         bg-white/10 text-white p-6 md:p-8 rounded-2xl shadow-xl space-y-4 border border-white/20">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight text-yellow-300">
            Consistent Project Delivery
          </h2>
          <p className="text-lg md:text-xl font-medium">Value, Quality, Time.</p>

          <div className="space-y-2 text-sm md:text-base leading-relaxed text-white/90">
            <p>
              In our world, these are the three essentials that determine whether a project will succeed.
            </p>
            <p>
              Is the client getting value for money? Is the design and build of the highest quality? Are we on schedule?
            </p>
            <p>
              When it comes to these questions, our job is to make sure the answer is always yes.
            </p>
          </div>

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

export default AboutVideo;
