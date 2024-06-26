import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
// import { Logo } from '../../assets/img/logo.jpg'
import firstpic from '../../assets/img/logo.jpg';
 

export const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showDropdown1, setShowDropdown1] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
  
    const toggleMenu = () => setShowMenu(!showMenu);
    const openDropdown1 = () => setShowDropdown1(true);
    // const closeDropdown1 = () => setShowDropdown1(false);
    const openDropdown2 = () => setShowDropdown2(true);
    const closeDropdown2 = () => setShowDropdown2(false);
  
    useEffect(() => {
      const closeMenuOnClickOutside = (event) => {
        if (!event.target.closest('.navbar-container')) {
          setShowMenu(false);
        }
      };
  
      document.addEventListener('click', closeMenuOnClickOutside);
  
      return () => {
        document.removeEventListener('click', closeMenuOnClickOutside);
      };
    }, []);

  return (
    <nav className=" px-4 py-2 text-black md:px-8 navbar-bg ">
      <div className="flex items-center justify-between md:py-3 navbar-container">
        {/* Logo */}
        <div>
          <img src={ firstpic } alt="MCFDS" className="w-12 h-12 mr-2" />
        </div>

     
        {/* Links */}
        <div className="hidden  md:flex md:justify-between md:align-center  space-x-4">

        <Link to = "/" className="toggle font-bold pr-10   text-lg hover:text-gray-300">Home</Link>
           

        <div className="relative group pr-10 ">
            <button onMouseEnter={openDropdown1}
             
              onClick={() => setShowDropdown1(!showDropdown1)}
              className=' toggle font-bold  text-lg hover:text-gray-300'>
              About Us
            </button>
            {showDropdown1 && (
              <div className="absolute z-10 bg-gray-800 text-white mt-0 py-2 rounded-lg shadow-md">
                <Link to ="/Creche" className="block px-4 py-4 hover:bg-gray-700">Management</Link>
                <Link to ="/Nursery" className="block px-4 py-4 hover:bg-gray-700">Our History</Link>
                <Link to ="/Management" className="block px-4 py-4 hover:bg-gray-700">Our Management</Link>
              </div>
            )}
          </div>

          <div className="relative group pr-10 ">
         <button className="toggle font-bold  text-lg hover:text-gray-300" onMouseEnter={openDropdown2}
              onMouseLeave={closeDropdown2}
              onClick={() => setShowDropdown1(!showDropdown2)} >
             Our School
            </button>
            {showDropdown2 && (
              <div className="absolute z-10 bg-gray-800 text-red-800 mt-2 py-2 rounded-lg shadow-md">
                <Link to ="/Creche" className="block px-4 py-4 hover:bg-gray-700">Creche</Link>
                <Link to ="/Nursery" className="block px-4 py-4 hover:bg-gray-700">Nursery</Link>
                <Link to ="/Primary" className="block px-4 py-4 hover:bg-gray-700">Primary</Link>
                <Link to ="/Secondary" className="block px-4 py-4 hover:bg-gray-700">Secondary</Link>

              </div>
            )}
          </div>
          <Link to = "/Services" className="toggle font-bold pr-10   text-lg hover:text-gray-300">Services</Link>
          <Link to = "/Contact" className="toggle font-bold pr-10   text-lg hover:text-gray-300">Contact</Link>

       
          
        </div>

        {/* Button */}
        <div>
          <button className="hidden btn md:block  hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Get Started</button>
        </div>
         {/* Mobile Menu */}
            {/* Mobile Menu Button */}
        <button
            className="block md:hidden mr-3 toggle"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

         {showMenu && (
          <div className="md:hidden absolute top-12 right-0 w-48 bg-gray-800 text-white rounded-lg shadow-lg z-10">
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">About</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Services</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Blog</a>
            <div>
          <button className="btn block w-full hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">Get Started</button>
        </div>
          </div>
        )}
      </div>
    </nav>
  );
};

