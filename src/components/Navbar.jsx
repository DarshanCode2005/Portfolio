import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <h1 className="text-2xl font-bold">Darshan Thakare</h1>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-8">
        <li style={{ cursor: 'pointer' }}>
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li style={{ cursor: 'pointer' }}>
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li style={{ cursor: 'pointer' }}>
          <Link to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li style={{ cursor: 'pointer' }}>
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
