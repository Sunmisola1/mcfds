// admin/components/Admin.jsx

import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Admin = () => {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="flex items-center p-4">
          <img
            src="/path/to/profile-pic.jpg" // Replace with actual profile picture path
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="ml-4">
            <p className="font-semibold">Admin Name</p>
            <p className="text-sm">Administrator</p>
          </div>
        </div>
        <nav className="mt-4 flex flex-col">
          <Link to="homes" className="p-4 hover:bg-gray-700">
            Home
          </Link>
          <Link to="profile" className="p-4 hover:bg-gray-700">
            Profile
          </Link>
          <Link to="settings" className="p-4 hover:bg-gray-700">
            Settings
          </Link>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="bg-gray-100 p-4 shadow-md">
          <h1 className="text-xl font-semibold">Dashboard</h1>
        </header>
        <motion.main
          className="flex-1 p-6 bg-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  );
};

export default Admin;
