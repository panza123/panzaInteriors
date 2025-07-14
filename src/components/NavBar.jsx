import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const scrollingUp = prevScrollPos > currentScrollPos;

    setVisible(scrollingUp || currentScrollPos < 10);
    setScrolled(currentScrollPos > 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const linkStyle = ({ isActive }) =>
    `text-lg transition-colors cursor-pointer ${
      isActive ? "text-yellow-300" : `${scrolled ? "text-gray-800" : "text-white"} hover:text-[#F4D35E] hover:underline decoration-1 underline-offset-8 transition-colors duration-300`
    }`;

  const mobileLinkStyle = ({ isActive }) =>
    `text-2xl transition-colors cursor-pointer ${
      isActive ? "text-yellow-300" : "text-white hover:text-gray-300"
    }`;

  return (
    <nav className={`w-full h-24 py-6 px-8 md:12 lg:px-16 flex justify-between 
    items-center fixed top-0 left-0 z-50 transition-all duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'} ${scrolled ? 'bg-white shadow-md' : 'bg-black/20'}`}>
      <NavLink to='/'>
        <h1 className={`text-4xl font-bold tracking-tight z-[1] transition-colors duration-300 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          panza
        </h1>
      </NavLink>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8">
        <li>
          <NavLink to="/about" className={linkStyle}>
            about
          </NavLink>
        </li>
        <li>
          <NavLink to="/design" className={linkStyle}>
            design & build
          </NavLink>
        </li>
        <li>
          <NavLink to="/process" className={linkStyle}>
            process
          </NavLink>
        </li>
        <li>
          <NavLink to="/project" className={linkStyle}>
            project
          </NavLink>
        </li>
        <NavLink to="/contact">
          <button className={`btn-fancy ${scrolled ? 'bg-gray-800 text-white' : ''}`}>
            get in touch
          </button>
        </NavLink>
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className={`md:hidden py-2 px-2 z-50 relative w-10 h-10 cursor-pointer focus:outline-none transition-colors ${
          menu ? "bg-amber-100" : scrolled ? "bg-white border border-gray-300" : "bg-black border border-white"
        }`}
        onClick={() => setMenu(!menu)}
        aria-label="Menu"
      >
        <span
          className={`absolute block h-0.5 w-6 transform transition duration-300 ${
            menu ? "rotate-45 translate-y-0 bg-gray-800" : `-translate-y-2 ${scrolled ? 'bg-gray-800' : 'bg-white'}`
          }`}
        ></span>
        <span
          className={`absolute block h-0.5 w-6 transition duration-300 ${
            menu ? "opacity-0" : `opacity-100 ${scrolled ? 'bg-gray-800' : 'bg-white'}`
          }`}
        ></span>
        <span
          className={`absolute block h-0.5 w-6 transform transition duration-300 ${
            menu ? "-rotate-45 translate-y-0 bg-gray-800" : `translate-y-2 ${scrolled ? 'bg-gray-800' : 'bg-white'}`
          }`}
        ></span>
      </button>

      {/* Mobile Menu - Full Height */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:hidden bg-black z-40 flex flex-col items-start justify-center gap-10 transition-all duration-300 ease-in-out ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col px-6 gap-6 text-white w-full">
          <li>
            <NavLink to="/" className={mobileLinkStyle} onClick={() => setMenu(false)}>
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={mobileLinkStyle} onClick={() => setMenu(false)}>
              about
            </NavLink>
          </li>
          <li>
            <NavLink to="/design" className={mobileLinkStyle} onClick={() => setMenu(false)}>
              design & build
            </NavLink>
          </li>
          <li>
            <NavLink to="/process" className={mobileLinkStyle} onClick={() => setMenu(false)}>
              process
            </NavLink>
          </li>
          <li>
            <NavLink to="/project" className={mobileLinkStyle} onClick={() => setMenu(false)}>
              project
            </NavLink>
          </li>
          <li className="w-full">
            <NavLink to="/contact" onClick={() => setMenu(false)}>
              <button className="py-3 w-full bg-white text-black hover:bg-gray-200 transition-colors cursor-pointer text-lg text-left px-6 rounded-none">
                get in touch
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;