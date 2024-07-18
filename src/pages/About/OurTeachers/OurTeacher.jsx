
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Sample data for teachers

const OurTeachers = () => {
  const teachersData = [
    {
      id: 1,
      name: 'John Doe',
      subject: 'Mathematics',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      id: 2,
      name: 'Jane Smith',
      subject: 'Science',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    {
      id: 3,
      name: 'Emily Johnson',
      subject: 'History',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
     }, {
      id: 4,
      name: 'Emily Johnson',
      subject: 'History',
      image: 'https://via.placeholder.com/150', // Replace with actual image URL
      social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
      },
    },
    // Add more teacher data as needed
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Teachers</h1>
          <p className="text-lg mb-8">Meet our dedicated teaching staff.</p>
        </div>
      </div>

      {/* Main Content - Teachers */}
      <div className="container mx-auto py-12">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {teachersData.map((teacher) => (
            <motion.div
              key={teacher.id}
              className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden"
              variants={cardVariants}
            >
              <div className="relative">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <a href={teacher.social.facebook} className="text-white mx-2">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                  </a>
                  <a href={teacher.social.twitter} className="text-white mx-2">
                    <FontAwesomeIcon icon={faTwitter} size="lg" />
                  </a>
                  <a href={teacher.social.linkedin} className="text-white mx-2">
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>
                </motion.div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{teacher.name}</h2>
                <p className="text-gray-600">{teacher.subject}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeachers;
