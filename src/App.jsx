import FooterBg from './components/Footer/Footer';
import { Minibar } from './components/Minibar/Minibar';
import { Header } from './components/Navbar/Navbar';
// import { Nav } from './components/Navbar/nav'
import Home from './pages/Home/Home';
// import About from './pages/About/About';
import OurHistory from './pages/About/OurHistory/OurHistory';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Pricing from './pages/Pricing/Pricing';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';
import Management from './pages/About/Management/Management';
// import Navbar from './components/Navbar/eader';



function App() {
 
  return (      
      <Router>
      <div>
      <Minibar/>
      <Header/> 
      {/* <Navbar/> */}
       {/* <Nav/>  */}
     
      <Routes>
        <Route path="/" element={<Home />}/>
        {/* <Route path="/About" element={<About />}/> */}
        <Route path="/OurHistory" element={<OurHistory/>}/>
        <Route path="/Management" element={<Management/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Pricing" element={<Pricing />}/>
        <Route path="/Services" element={<Services />}/>

      </Routes>
      </div>
      <FooterBg />
    </Router>
    
  )
}

export default App
