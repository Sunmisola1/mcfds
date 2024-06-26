import  { useState, useRef, useEffect } from 'react';
import firstpic from '../../assets/img/logo.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isSchoolDropdownOpen, setIsSchoolDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const schoolDropdownRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(event.target) &&
        isAboutDropdownOpen
      ) {
        setIsAboutDropdownOpen(false);
      }
      if (
        schoolDropdownRef.current &&
        !schoolDropdownRef.current.contains(event.target) &&
        isSchoolDropdownOpen
      ) {
        setIsSchoolDropdownOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isAboutDropdownOpen, isSchoolDropdownOpen, isMenuOpen]);

  const toggleAboutDropdown = () => setIsAboutDropdownOpen(!isAboutDropdownOpen);
  const toggleSchoolDropdown = () => setIsSchoolDropdownOpen(!isSchoolDropdownOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="px-4 py-2 text-black md:px-8 navbar-bg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold"> 
          <img src={ firstpic } alt="MCFDS" className="w-12 h-12 mr-2" />
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/" className="text-gray-700 hover:text-blue-500">Home</Link>

          <div className="relative" ref={aboutDropdownRef}>
            <button
              onClick={toggleAboutDropdown}
              className="font-bold mt-5 md:mt-0 md:pr-2 mb-3 md:mb-0 text-lg hover:text-gray-300 flex align-center justify-center -z-10"
            >
              About Us
              <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
            {isAboutDropdownOpen && (
              <div className="absolute left-0 mt-2 py-2 w-48 bg-white border rounded shadow-xl">
                <Link to="/about/history" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">History</Link>
                <Link to="/about/team" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">Team</Link>
              </div>
            )}
          </div>

          <div className="relative" ref={schoolDropdownRef}>
            <button
              onClick={toggleSchoolDropdown}
              className="text-gray-700 hover:text-blue-500 flex items-center"
            >
              Our School
              <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
            </button>
            {isSchoolDropdownOpen && (
              <div className="absolute left-0 mt-2 py-2 w-48 bg-white border rounded shadow-xl">
                <Link to="/school/overview" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">Overview</Link>
                <Link to="/school/faculty" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">Faculty</Link>
                <Link to="/school/admissions" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">Admissions</Link>
                <Link to="/school/curriculum" className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white">Curriculum</Link>
              </div>
            )}
          </div>

          <Link to="/services" className="text-gray-700 hover:text-blue-500">Services</Link>
          <Link to="/contact" className="text-gray-700 hover:text-blue-500">Contact</Link>
        </div>

        {/* Button */}
        <button className="hidden btn md:block text-white font-semibold text-2xl  px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300">Get Started</button>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden absolute top-0 left-0 right-0 bg-white shadow-md">
          <Link to="/" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</Link>
          <button
            onClick={toggleAboutDropdown}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            About Us
            <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
          </button>
          {isAboutDropdownOpen && (
            <div className="pl-4">
              <Link to="/about/history" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">History</Link>
              <Link to="/about/team" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Team</Link>
            </div>
          )}
          <button
            onClick={toggleSchoolDropdown}
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Our School
            <FontAwesomeIcon icon={faChevronDown} className="ml-1" />
          </button>
          {isSchoolDropdownOpen && (
            <div className="pl-4">
              <Link to="/school/overview" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Overview</Link>
              <Link to="/school/faculty" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Faculty</Link>
              <Link to="/school/admissions" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Admissions</Link>
              <Link to="/school/curriculum" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Curriculum</Link>
            </div>
          )}
          <Link to="/Services" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Services</Link>
          <Link to="/Contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Contact</Link>
          <Link to="/get-started" className="block w-full text-left bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition duration-300 mt-2">
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
