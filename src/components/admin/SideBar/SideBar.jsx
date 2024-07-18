// admin/Admin.jsx
import  { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaHome, FaUser, FaSchool, FaServicestack, FaEnvelope, FaCog, FaSignOutAlt, FaSearch } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MENU_ITEMS = [
  { title: 'Overview', icon: FaHome, path: 'overview' },
  { title: 'Home', icon: FaHome, path: 'home' },
  { title: 'About', icon: FaUser, path: 'about' },
  { title: 'Our School', icon: FaSchool, path: 'our-school' },
  { title: 'Services', icon: FaServicestack, path: 'services' },
  { title: 'Contact', icon: FaEnvelope, path: 'contact' },
  { title: 'Setting', icon: FaCog, path: 'setting' },
  { title: 'Logout', icon: FaSignOutAlt, path: 'logout' }
];

const Admin = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="flex h-screen">
      <aside className={`bg-gray-800 text-white ${isMinimized ? 'w-16' : 'w-64'} transition-all duration-300 relative`}>
        <button onClick={toggleSidebar} className="p-2 text-lg focus:outline-none absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-gray-700 rounded-full">
          {isMinimized ? '>' : '<'}
        </button>
        {!isMinimized && (
          <div className="flex flex-col items-center p-4">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span className="mt-2">John Doe</span>
          </div>
        )}
        <ul className="list-none p-0">
          {MENU_ITEMS.map(item => (
            <li key={item.title} className="flex items-center p-4">
              <Link to={item.path} className="flex items-center space-x-2">
                <item.icon />
                {!isMinimized && <span>{item.title}</span>}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex-1 flex flex-col">
        <div className="bg-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Welcome to the Admin Dashboard</h1>
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <input
                type="text"
                className="p-2 rounded border border-gray-300"
                placeholder="Search..."
              />
              <FaSearch />
            </motion.div>
          </div>
          <div className="flex items-center space-x-4">
            <span>{dateTime.toLocaleString()}</span>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <span>John Doe</span>
          </div>
        </div>
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Admin;
