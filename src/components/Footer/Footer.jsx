
import { Footer } from 'flowbite-react';
    'use client';
    import firstpic from '../../assets/img/logo.jpg';
    import './footer.css'
    

export default function FooterBg() {
  return (
    <div>
     <Footer container className="foot rounded-none">
      <div className="w-full text-center blue-900 ">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="/"
            src={ firstpic }
            alt="MCFDS LOGO"
         
          />
          <Footer.LinkGroup  className='foot-link'>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider/>
        <Footer.Copyright  className='foot-link'  href="MCFDS" by="MCFDS™" year={2024} />
      </div>
    </Footer>
    
    </div>
  )
}
