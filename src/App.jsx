import FooterBg from './components/Footer/Footer'
import { Minibar } from './components/Minibar/Minibar'
import { Header } from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './pages/About/About';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Pricing from './pages/Pricing/Pricing';
import Contact from './pages/Contact/Contact';
import Services from './pages/Services/Services';

function App() {
 
  return (      
      <Router>
      <div>
      <Minibar/>
      <Header/>
      <Routes>
        <Route path="/Home" element={<Home />}/>
        <Route path="/About" element={<About />}/>
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
