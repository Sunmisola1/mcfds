
import { Routes, Route } from 'react-router-dom';

import Admin from './Dashboard/Dashboard';
import Homes from './Home/Home.jsx';


const AdminApp = () => {
  return (
  <div>
  <Admin />
 
  <Routes>
           
           <Route exact path="/homes" component={<Homes/> } />
                   
           
    </Routes> 
    </div>
  );
};

export default AdminApp;
