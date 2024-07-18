import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faGraduationCap, faComment } from '@fortawesome/free-solid-svg-icons';
import sideImg from '../../assets/img/9.jpg'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      middleName: '',
      lastName: '',
      email: '',
      phone: '',
      grade: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:space-x-8 items-center">
        {/* Left Side (Image) */}
        <div className="md:w-1/2 mb-4 md:mb-0 hidden md:block">
          <img src={sideImg} alt="School Image" className="w-full h-auto md:rounded-lg" />
        </div>

        {/* Right Side (Form) */}
        <div className="md:w-1/2 bg-white p-8 rounded shadow-lg">
          <h2 className="text-3xl font-bold mb-8 text-center md:text-left">School Application Form</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* First Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faUser} className="text-gray-400" />
              </div>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                placeholder="First Name"
                className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:border-indigo-500 transition duration-200"
              />
            </div>

            {/* Middle Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faUser} className="text-gray-400" />
              </div>
              <input
                type="text"
                id="middleName"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                required
                placeholder="Middle Name"
                className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:border-indigo-500 transition duration-200 mt-4"
              />
            </div>

            {/* Last Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faUser} className="text-gray-400" />
              </div>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                placeholder="Last Name"
                className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:border-indigo-500 transition duration-200 mt-4"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faEnvelope} className="text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:border-indigo-500 transition duration-200 mt-4"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faPhone} className="text-gray-400" />
              </div>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:border-indigo-500 transition duration-200 mt-4"
              />
            </div>

            {/* Grade Applying For */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FontAwesomeIcon icon={faGraduationCap} className="text-gray-400" />
              </div>
              <select
                id="grade"
                name="grade"
                value={formData.grade}
                onChange={handleChange}
                required
                className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:border-indigo-500 transition duration-200 mt-4"
              >
                <option value="">Select Grade Applying For</option>
                <option value="Grade 1">Grade 1</option>
                <option value="Grade 2">Grade 2</option>
                <option value="Grade 3">Grade 3</option>
                {/* Add more options as needed */}
              </select>
            </div>

            {/* Additional Message */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 pt-1 flex items-start pointer-events-none">
                <FontAwesomeIcon icon={faComment} className="text-gray-400" />
              </div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Additional Message (optional)"
                className="block w-full pl-10 pr-4 py-3 rounded-lg bg-gray-200 focus:bg-white focus:outline-none focus:border-indigo-500 transition duration-200 mt-4"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                Submit Application
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
