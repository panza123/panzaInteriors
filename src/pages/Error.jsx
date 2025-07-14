import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const Error = () => {
  return (
    <div className="w-full min-h-screen bg-[#4C3B4D] flex items-center justify-center px-4">
      <div className="text-center text-white max-w-xl">
        <h1 className="text-9xl font-extrabold tracking-wider text-[#ADA8B6] mb-4">Oops!</h1>
        <p className="text-3xl md:text-4xl font-semibold mb-2 uppercase">404 - Page Not Found</p>
        <p className="text-lg mb-8">You seem to be lost, my friend.</p>

        <Link
          to="/"
          className=" flex px-6 py-3 
           text-black font-semibold hover:underline decoration-1 underline-offset-8 "
        >
          Let's guide you back to the homepage <ArrowUpRight/>
        </Link>
      </div>
    </div>
  );
};

export default Error;
