
import { Footer } from 'flowbite-react';
    'use client';
    import firstpic from '../../assets/img/logo.jpg';
    import './footer.css'

export default function FooterBg() {
  return (
    <div>
     <Footer container className="foot">
      <div className="w-full text-center blue-900">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src={ firstpic }
            alt="MCFDS LOGO"
         
          />
          <Footer.LinkGroup>
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="MCFDS" by="MCFDS™" year={2022} />
      </div>
    </Footer>
    
    </div>
  )
}
