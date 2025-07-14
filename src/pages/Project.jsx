import { useEffect } from "react";
import Header from "../components/Header";
import { ProjectImage } from "../components/ProjectImage";
 
const Project = () => {
    // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full min-h-screen bg-white text-black">
      {/* Navbar */}
      <Header />

      <div className="w-full h-full px-6 py-16 md:px-12 lg:px-20">
        {/* Page Title & Description */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start gap-10 py-12 border-b border-gray-200">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Projects
          </h2>

          <div className="max-w-xl text-base md:text-lg text-gray-700 leading-relaxed">
            <p>
              We are a hungry team with a passion for building the best
              workspaces possible. With our wealth of experience, we are
              fortunate to be delivering a wide variety of projects nationally.
            </p>
          </div>
        </div>

        {/* Project Grid */}
        <div className="mt-12">
          <ProjectImage />
        </div>
      </div>
    </div>
  );
};

export default Project;
