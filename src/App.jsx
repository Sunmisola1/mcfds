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
import OurTeachers from './pages/About/OurTeachers/OurTeacher';

import LibraryPage from './pages/School/Library/Library';
import ComputerLabPage from './pages/School/ComputerLab/ComputerLab';
import SportsPage from './pages/School/Sport/Sport';
import MusicPage from './pages/School/Music/Music';
import Accommodation from './pages/School/Accomodation/Accomodation';
import DiningHall from './pages/School/Dinning/Dinning';
import LabPage from './pages/School/Laboratories/Lab';
import CrechePage from './pages/School/Creche/Creche';
import PrimaryPage from './pages/School/Primary/Primary';
import SecondaryPage from './pages/School/Secondary/Secondary';
import RegistrationForm from './pages/Application/Application';
import AdminApp from './components/admin/AdminApp';
// import Homes from './components/admin/Home/Home';




function App() {
 
  return (      
      <Router>
      <div>
      {location.pathname !== '/admin/*' && <Minibar/>}
       {location.pathname !== '/admin/*' && <Header/> }
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/admin/*" element={<AdminApp />} />
       {/* <Route path="/admin/home" element={<Homes/>} />  */}
        <Route path="/RegistrationForm" element={<RegistrationForm/>}/>
        {/* <Route path="/About" element={<About />}/> */}
        <Route path="/OurHistory" element={<OurHistory/>}/>
        <Route path="/Management" element={<Management/>}/>
        <Route path="/OurTeacher" element={<OurTeachers/>}/>
        <Route path="/CrechePage" element={ <CrechePage/>}/>
        <Route path="/PrimaryPage" element={ <PrimaryPage/>}/>
        <Route path="/SecondaryPage" element={ <SecondaryPage/>}/>
        <Route path="/LibraryPage" element={ <LibraryPage/>}/>
        <Route path="/ComputerLabPage" element={ <ComputerLabPage/>}/>
        <Route path="/SportsPage" element={<SportsPage/>}/>
        <Route path="/MusicPage" element={<MusicPage/>}/>
        <Route path="/Accommodation" element={<Accommodation/>}/>
        <Route path="/DiningHall" element={<DiningHall/>}/>
        <Route path="/LabPage" element={< LabPage/>}/>
        <Route path="/DiningHall" element={<DiningHall/>}/>
       
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Pricing" element={<Pricing />}/>
        <Route path="/Services" element={<Services />}/>

      </Routes>
      </div>
      {location.pathname !== '/admin' && <FooterBg />}
      
    </Router>
    
  )
}


export default App
