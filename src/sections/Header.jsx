import React, { useEffect, useState } from 'react';
import {
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaTimes,
  FaBars,
  FaPhoneVolume,
} from 'react-icons/fa';
import { IoPerson } from 'react-icons/io5';
import { Link } from 'react-scroll';
import { MdEmail } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { link: 'Home', path: 'home' },
    { link: 'About', path: 'about' },
    { link: 'Products', path: 'products' },
    { link: 'Testimonials', path: 'testimonials' },
    { link: 'Contact', path: 'contact' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="w-full px-4 lg:px-16 py-2 bg-[var(--themeyellow)] lg:flex hidden justify-between items-center gap-6 text-sm font-semibold">
        <div className="flex items-center gap-2">
          <FaPhoneVolume className="size-[18px]" />
          <span>+91 7339572897</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="size-[18px]" />
          <span>Vellore, TamilNadu</span>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail className="size-[18px]" />
          <span>Ecommerce_Electrashop@gmail.com</span>
        </div>
      </div>

      {/* Main Header */}
      <nav className="w-full bg-gray-100 flex justify-between items-center px-6 lg:px-16 py-5 sticky top-0 z-50 shadow">
        {/* Logo */}
        <h1 className="text-themepurple font-bold lg:text-[30px] text-2xl underline italic">
          Electra Shop
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex justify-center items-center gap-10">
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              spy={true}
              offset={-100}
              smooth={true}
              className="text-black text-sm uppercase font-semibold cursor-pointer px-4 py-2 rounded-lg hover:bg-themepurple hover:text-white"
            >
              {link}
            </Link>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden lg:flex justify-center items-center gap-6 text-black">
          <FaSearch className="icon-style" />
          <IoPerson className="icon-style" />
          <FaHeart className="icon-style" />
          <div className="relative">
            <FaShoppingCart className="icon-style" />
            <div className="absolute -top-[10px] -right-[10px] text-xs bg-[var(--themeyellow)] text-white px-2 py-0.5 rounded-full font-bold">
              2
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden text-black text-2xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gray-100 px-6 py-5 flex flex-col gap-6 shadow-md z-40 relative">
          <ul className="flex flex-col gap-4">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                spy={true}
                offset={-100}
                smooth={true}
                onClick={closeMenu}
                className="text-black text-base font-semibold uppercase cursor-pointer hover:text-[var(--themepurple)]"
              >
                {link}
              </Link>
            ))}
          </ul>
          <div className="flex justify-start items-center gap-6 mt-4 text-black">
            <FaSearch className="icon-style" />
            <IoPerson className="icon-style" />
            <FaHeart className="icon-style" />
            <div className="relative">
              <FaShoppingCart className="icon-style" />
              <div className="absolute -top-[10px] -right-[10px] text-xs bg-[var(--themeyellow)] text-white px-2 py-0.5 rounded-full font-bold">
                2
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Reusable icon style
const iconStyle = `w-[20px] h-[20px] transform hover:scale-125 transition-transform duration-300 cursor-pointer hover:text-[var(--themepurple)]`;
export default Header;
