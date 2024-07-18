// admin/AdminApp.jsx

import { Routes, Route } from 'react-router-dom';
import Admin from './SideBar/SideBar';
 import Overview from './Overview/Overview';
import Home from './Home/Home';
 import About from './About/About';
 import OurSchool from './School/School';
 import Services from './Services/Services';
 import Contact from './Contact/Contact';
  import Setting from './Setting/Setting';
import Logout from './Logout/Logout';


const AdminApp = () => {
  return (
    

    
    <Routes>
     
       
      <Route path="/" element={<Admin />}>
   
     <Route path="overview" element={<Overview />} />
        <Route path="home" element={<Home />} />
         <Route path="about" element={<About />} />
        <Route path="our-school" element={<OurSchool />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="setting" element={<Setting />} />
        <Route path="logout" element={<Logout />} />  */
      </Route>
    </Routes>
  );
};

export default AdminApp;
