'use client';
import {  Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import './nav.css';
import firstpic from '../../assets/img/logo.jpg';



export const Header = () => {
  return (
    <Navbar fluid rounded className=" px-4 py-4 text-black md:px-8  ">
        <Navbar.Brand href="/">
      <img src={ firstpic }  className="w-12 h-12 mr-2" alt="MCFDS LOGO" />
     </Navbar.Brand>
    <div className="flex md:order-2">
      <Link  to="/RegistrationForm" className='hidden btns md:block  text-white font-semibold p-2 text-sm rounded-lg' >Get started</Link>
      <Navbar.Toggle />
    </div>
    {/* Link */}
    <Navbar.Collapse  className="  md:space-y-0  md:flex md:justify-between md:align-center  space-x-4 ">
      <Navbar.Link href="#"><Link to="/home " className=" toggle font-bold text-center text-lg flex align-cennter justify-center hover:text-gray-300 md:pr-7">
         Home</Link>
      </Navbar.Link>

      {/* about us */}
      
      <div className="toggle font-bold mt-5 md:mt-0 md:pr-2 mb-3 md:mb-0 text-lg hover:text-gray-300 flex align-center justify-center "><Dropdown label="About Us" inline >
      <Dropdown.Item><Navbar.Link href="#"><Link to="/OurHistory" className='toggle font-bold m-2 pr-10 text-lg hover:text-gray-300 '>Our History</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/Management" className="toggle font-bold m-2 pr-10 text-lg hover:text-gray-300 ">Our Management</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/OurTeacher" className="toggle font-bold  m-2 pr-10 text-lg hover:text-gray-300 ">Our Teachers</Link></Navbar.Link></Dropdown.Item>

          </Dropdown>
      
      </div>

      {/*our school*/}
      <div className=" toggle font-bold mt-6  md:mt-0 mb-1 md:mb-0 pr-8 text-lg hover:text-gray-300 flex align-center justify-center">
        <Dropdown label="Our School" className='p-2' inline>
      
     {/* first dropdown */}
     <div className='ml-7 my-4 pr-12 hover:text-gray-300 toggle'>
      <Dropdown label="Our Classes" className=" font-bold md:ml-36 md:-mt-5 md:p-2 text-lg hover:text-gray-300 "  inline>
              <Dropdown.Item><Navbar.Link href="#"><Link to="/CrechePage" className="toggle font-bold p-5 m-2 text-lg hover:text-gray-300 " >Creche</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/PrimaryPage" className="toggle font-bold p-5 m-2  text-lg hover:text-gray-300">Primary </Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/SecondaryPage"  className="toggle font-bold p-5 m-2  text-lg hover:text-gray-300">Secondary </Link></Navbar.Link></Dropdown.Item>
   
     
   
    </Dropdown>
   </div>
     {/* seco/nd dropdown */}
     <div className='ml-7 my-2 pr-12 hover:text-gray-300 toggle'>
      <Dropdown label="Our Facilities" className=" font-bold md:ml-32 md:-mt-5 md:p-2 text-lg hover:text-gray-300 "  inline>
              <Dropdown.Item><Navbar.Link href="#"><Link to="/LibraryPage" className="toggle font-bold p-5 m-2 text-lg hover:text-gray-300 " >Library</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/ComputerLabPage" className="toggle font-bold p-5 m-2  text-lg hover:text-gray-300">Computing</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/SportsPage"  className="toggle font-bold p-5 m-2  text-lg hover:text-gray-300">Sport</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/LabPage" className="toggle font-bold m-2  p-5 text-lg hover:text-gray-300 ">Laboratories</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/MusicPage" className="toggle font-bold p-5 m-2  text-lg hover:text-gray-300 ">Music</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/DiningHall" className="toggle font-bold p-5 m-2  text-lg hover:text-gray-300 ">Dinning Hall</Link></Navbar.Link></Dropdown.Item>

      <Dropdown.Item><Navbar.Link href="#"><Link to="/Accommodation" className="toggle font-bold p-5 m-2  text-lg hover:text-gray-300 ">Accomodation</Link></Navbar.Link></Dropdown.Item>

   
    </Dropdown>
   </div>
     
       </Dropdown>
    </div>



    {/* others */}
      <Navbar.Link href="#" ><Link to="/Services" className="toggle font-bold  mt-3 md:mt-0 pr-7 text-lg hover:text-gray-300 flex align-center justify-center ">Services</Link></Navbar.Link>
      <Navbar.Link href="#"> <Link to="/Contact" className="toggle font-bold mb-3 md:mb-0 mt-3 md:mt-0 pr-7 text-lg hover:text-gray-300 flex align-center justify-center">Contact</Link></Navbar.Link>
      <Link  to="/RegistrationForm" className=' text-center btns md:hidden p-2 hover:bg-blue-600 text-white font-semibold text-xl rounded-lg'  >Get started</Link>
     
    </Navbar.Collapse>
  </Navbar>
);
}

    
    