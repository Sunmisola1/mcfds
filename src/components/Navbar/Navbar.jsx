'use client';
import { Button, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <Navbar fluid rounded className='p-8 bg-gray-100'>
    <Navbar.Brand href="https://flowbite-react.com">
      <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
     </Navbar.Brand>
    <div className="flex md:order-2">
      <Button>Get started</Button>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="#" active><Link to="/Home">
         Home</Link>
      </Navbar.Link>
      <Navbar.Link href="#"><Link to="/About"> About </Link></Navbar.Link>
      
      <Dropdown label="Our School" inline>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/Creche">Creche</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/Nursery">Nursery</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/Primary">Primary</Link></Navbar.Link></Dropdown.Item>
      <Dropdown.Item><Navbar.Link href="#"><Link to="/Secondary">Secondary</Link></Navbar.Link></Dropdown.Item>
    </Dropdown>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
);
}

    
    