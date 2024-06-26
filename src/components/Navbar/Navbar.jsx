'use client';
import { Button, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import './nav.css';
import firstpic from '../../assets/img/logo.jpg';



export const Header = () => {
  return (
    <Navbar fluid rounded className=" px-4 py-4 text-black md:px-8  ">
        <Navbar.Brand href="https://flowbite-react.com">
      <img src={ firstpic }  className="w-12 h-12 mr-2" alt="MCFDS LOGO" />
     </Navbar.Brand>
    <div className="flex md:order-2">
      <Button className='hidden btns md:block  text-white font-semibold text-2xl rounded-lg'>Get started</Button>
      <Navbar.Toggle />
    </div>
    {/* Link */}
    <Navbar.Collapse  className="  md:space-y-0  md:flex md:justify-between md:align-center  space-x-4 ">
      <Navbar.Link href="#"><Link to="/ " className=" toggle font-bold text-center text-lg flex align-cennter justify-center hover:text-gray-300 md:pr-7">
         Home</Link>
      </Navbar.Link>

      {/* about us */}
      
      <div className="toggle font-bold mt-5 md:mt-0 md:pr-2 mb-3 md:mb-0 text-lg hover:text-gray-300 flex align-center justify-center "><Dropdown label="About Us" inline >
      <Dropdown.Item><Navbar.Link href="#"><Link to="/OurHistory" className='toggle font-bold  pr-10 text-lg hover:text-gray-300 '>Our History</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/Management" className="toggle font-bold  pr-10 text-lg hover:text-gray-300 ">Our Management</Link></Navbar.Link></Dropdown.Item>
          </Dropdown>
      
      </div>

      {/*our school*/}
      <div className=" toggle font-bold mt-5 md:mt-0 mb-1 md:mb-0 pr-2 text-lg hover:text-gray-300 flex align-center justify-center"><Dropdown label="Our School" inline>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/Creche" className="toggle font-bold  pr-10 text-lg hover:text-gray-300 "  >Creche</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/Nursery" className="toggle font-bold  pr-10 text-lg hover:text-gray-300">Nursery</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/Primary"  className="toggle font-bold  pr-10 text-lg hover:text-gray-300">Primary</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/Secondary" className="toggle font-bold  pr-10 text-lg hover:text-gray-300 ">Secondary</Link></Navbar.Link></Dropdown.Item>
    </Dropdown>
    </div>

    {/* others */}
      <Navbar.Link href="#" ><Link to="/Services" className="toggle font-bold  mt-3 md:mt-0 pr-7 text-lg hover:text-gray-300 flex align-center justify-center ">Services</Link></Navbar.Link>
      <Navbar.Link href="#"> <Link to="/Contact" className="toggle font-bold mb-3 md:mb-0 mt-3 md:mt-0 pr-7 text-lg hover:text-gray-300 flex align-center justify-center">Contact</Link></Navbar.Link>
      <Button className=' btns md:hidden hover:bg-blue-600 text-white font-semibold text-2xl rounded-lg'>Get started</Button>

    </Navbar.Collapse>
  </Navbar>
);
}

    
    