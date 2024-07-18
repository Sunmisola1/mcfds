
import { motion } from 'framer-motion';

// Dummy data for images and sports activities

const SportsPage = () => {
    const images = {
        hero: 'https://via.placeholder.com/1200x400', // Replace with actual hero image URL
        sportsOverview: 'https://via.placeholder.com/600x400', // Replace with actual sports overview image URL
        studentsPlaying: 'https://via.placeholder.com/600x400', // Replace with actual students playing sports image URL
        sportsEquipment: 'https://via.placeholder.com/400x300', // Replace with actual sports equipment image URL
      };
      
      const sportsData = [
        {
          id: 1,
          name: 'Football',
          image: 'https://via.placeholder.com/150', // Replace with actual sports image URL
        },
        {
          id: 2,
          name: 'Basketball',
          image: 'https://via.placeholder.com/150', // Replace with actual sports image URL
        },
        {
          id: 3,
          name: 'Tennis',
          image: 'https://via.placeholder.com/150', // Replace with actual sports image URL
        },
        // Add more sports data as needed
      ];
      
      const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      };
      
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="hero-section py-20 relative">
        <div className="container mx-auto relative z-10 text-center">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sports Activities
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our diverse range of sports activities and facilities.
          </motion.p>
        </div>
      </div>

      {/* Sports Details Section */}
      <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images.sportsOverview}
            alt="Sports Overview"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Overview of Our Sports Facilities</h2>
          <p className="text-gray-700">
            Our school offers a wide range of sports facilities to encourage students to engage in physical activities and develop their athletic skills. From football to tennis, we have something for every sports enthusiast.
          </p>
        </motion.div>
      </div>

      {/* Sports Images Section */}
      <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Students Playing Sports</h2>
          <img
            src={images.studentsPlaying}
            alt="Students Playing Sports"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Sports Equipment</h2>
          <img
            src={images.sportsEquipment}
            alt="Sports Equipment"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </div>

      {/* Sports Activities Gallery Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Sports Activities</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
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
          {sportsData.map((sport) => (
            <motion.div
              key={sport.id}
              className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden group"
              variants={cardVariants}
            >
              <div className="relative">
                <img
                  src={sport.image}
                  alt={sport.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2">{sport.name}</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SportsPage;
