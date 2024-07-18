

import './Contact.css'; // Import your custom CSS for background images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import 'animate.css/animate.min.css'; // Import Animate.css for animations




const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
       {/* Hero Section */}
      <div className="hero-section bg-services text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">Contact Us</h1>
          <p className="text-lg mb-8 animate__animated animate__fadeInUp">Get in touch with us for any inquiries.</p>
        </div>
      </div>
    {/* First Section: Cards */}
    <div className="container mx-auto py-12 px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center animate__animated animate__fadeInUp">
          <div className="text-blue-500 mb-4">
            <FontAwesomeIcon icon={faPhone} size="3x" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Call Us</h3>
          <p className="text-gray-600">+1 234 567 890</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center animate__animated animate__fadeInUp animate__delay-1s">
          <div className="text-green-500 mb-4">
            <FontAwesomeIcon icon={faEnvelope} size="3x" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Email Us</h3>
          <p className="text-gray-600">info@school.com</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center animate__animated animate__fadeInUp animate__delay-2s">
          <div className="text-red-500 mb-4">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="3x" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
          <p className="text-gray-600">123 School St, City, Country</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center animate__animated animate__fadeInUp animate__delay-3s">
          <div className="text-yellow-500 mb-4">
            <FontAwesomeIcon icon={faClock} size="3x" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
          <p className="text-gray-600">Mon - Fri: 8:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>

    {/* Second Section: Form */}
    <div className="form-section py-12">
        <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row items-center gap-10 md:items-start">
          {/* Part 1: Picture */}
          <div className="image-container ">
         </div>
          
          {/* Part 2: Form */}
          <div className="md:w-1/2 w-full p-6 bg-white shadow-lg rounded-lg animate__animated animate__fadeInUp">
            <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">Name</label>
                <input type="text" id="name" className="w-full p-2 border border-gray-300 rounded-lg" placeholder='FullName' required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder='Email' required />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea id="message" className="w-full p-2 border border-gray-300 rounded-lg" rows="4" placeholder='Message' required></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Contact;
