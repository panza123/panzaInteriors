import { ArrowRight } from "lucide-react";
import Header from "../components/Header";
import AboutImage from "../components/AboutImage";
import { NavLink } from "react-router-dom";
import { certifications } from "../const/index.js";
import Aboutvideo from "../components/Aboutvideo";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const cardsRef = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      gsap.from(card, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    });
  }, []);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="about" className="w-full min-h-screen bg-white text-black relative">
      {/* Navbar */}
      <Header />

      {/* Wrapper */}
      <div className="pt-24 max-w-7xl mx-auto">
        {/* Intro */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 px-6 md:px-12 lg:px-20 py-12">
          <div className="lg:w-1/2 space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
              About
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-700">
              Our outstanding performance builds trust & long-term relationships with our clients.
            </p>
            <NavLink to="project">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-all rounded-lg font-semibold">
                Discuss your project <ArrowRight size={18} />
              </button>
            </NavLink>
          </div>

          {/* Paragraphs */}
          <div className="lg:w-1/2 space-y-5 text-base md:text-lg leading-relaxed text-gray-700">
            <p>We design & build commercial interiors with a focus on quality, transparency, and 100% client satisfaction.</p>
            <p>Our approachable and experienced team, together with our trusted network of expert professionals and consultants, has earned a strong reputation for consistently delivering projects on time, on budget, and right the first time.</p>
            <p>We maintain transparent and efficient communication throughout every stage of a project—from initial concept and licensing, through planning, design, and installation, all the way to final handover, ready for occupancy.</p>
            <p>We understand that our success relies entirely on the success of our project delivery. That's why we work closely with every client, fully understanding their unique needs to ensure we meet their goals and deliver 100% satisfaction.</p>
            <p>Whether you're renovating your current space or moving into a new one, we've got you covered. From CAT A ready-to-occupy offices to complete CAT B fit-outs, we handle the design, management, and delivery—making your project as seamless and stress-free as possible.</p>
            <p className="font-semibold">Too good to be true?</p>
            <p className="font-semibold">We promise—it's not.</p>
          </div>
        </div>

        {/* Images */}
        <div className="w-full">
          <AboutImage />
        </div>

        {/* Accreditations */}
        <div className="w-full bg-[#E9F1F7] py-12">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-3xl md:text-4xl font-bold col mb-2">Accreditations</h2>
            <p className="text-xl font-semibold text-gray-800 mb-1">We strive for excellence</p>
            <p className="text-gray-700 mb-8">We take pride in our high level of technical delivery.</p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="certification-card bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-xl font-bold uppercase text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video */}
        <div className="w-full py-12">
          <Aboutvideo />
        </div>
      </div>
    </section>
  );
};

export default About;
