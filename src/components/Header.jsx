import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  const linkStyle = ({ isActive }) =>
    `text-lg transition-colors cursor-pointer ${
      isActive ? "text-black font-semibold" : "text-black hover:text-neutral-800 hover:underline decoration-1 underline-offset-8 duration-300"
    }`;

  const mobileLinkStyle = ({ isActive }) =>
    `text-2xl transition-colors cursor-pointer ${
      isActive ? "text-black font-semibold" : "text-black hover:text-neutral-800"
    }`;

  return (
    <nav className={`w-full h-24 bg-white border-b border-gray-200 
    py-6 px-8 md:px-12 lg:px-16 flex justify-between items-center fixed top-0 left-0 z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <NavLink to='/'>
        <h1 className="text-4xl font-bold tracking-tight z-[1] text-black">
          panza
        </h1>
      </NavLink>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-8">
        <li><NavLink to="/about" className={linkStyle}>about</NavLink></li>
        <li><NavLink to="/design" className={linkStyle}>design & build</NavLink></li>
        <li><NavLink to="/process" className={linkStyle}>process</NavLink></li>
        <li><NavLink to="/project" className={linkStyle}>project</NavLink></li>
        <NavLink to="/contact">
          <button className="btn-fancy">get in touch</button>
        </NavLink>
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className={`md:hidden py-2 px-2 z-50 relative w-10 h-10 cursor-pointer focus:outline-none transition-colors ${
          menu ? "bg-gray-200" : "bg-black"
        }`}
        onClick={() => setMenu(!menu)}
        aria-label="Menu"
      >
        <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ${
          menu ? "rotate-45 translate-y-0 bg-black" : "-translate-y-2 bg-white"
        }`} />
        <span className={`absolute block h-0.5 w-6 bg-current transition duration-300 ${
          menu ? "opacity-0" : "opacity-100 bg-white"
        }`} />
        <span className={`absolute block h-0.5 w-6 bg-current transform transition duration-300 ${
          menu ? "-rotate-45 translate-y-0 bg-black" : "translate-y-2 bg-white"
        }`} />
      </button>

      {/* Mobile Menu - Full Height */}
      <div
        className={`fixed top-0 right-0 h-screen w-full md:hidden bg-white z-40 flex flex-col items-start justify-center gap-10 transition-all duration-300 ease-in-out ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col px-6 gap-6 text-black w-full">
          <li><NavLink to="/" className={mobileLinkStyle} onClick={() => setMenu(false)}>home</NavLink></li>
          <li><NavLink to="/about" className={mobileLinkStyle} onClick={() => setMenu(false)}>about</NavLink></li>
          <li><NavLink to="/design" className={mobileLinkStyle} onClick={() => setMenu(false)}>design & build</NavLink></li>
          <li><NavLink to="/process" className={mobileLinkStyle} onClick={() => setMenu(false)}>process</NavLink></li>
          <li><NavLink to="/project" className={mobileLinkStyle} onClick={() => setMenu(false)}>project</NavLink></li>
          <li className="w-full">
            <NavLink to="/contact" onClick={() => setMenu(false)}>
              <button className="py-3 w-full bg-black text-white hover:bg-neutral-800 transition-colors cursor-pointer text-lg text-left px-6 rounded-none">
                get in touch
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;