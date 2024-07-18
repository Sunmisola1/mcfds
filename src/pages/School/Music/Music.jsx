
import { motion } from 'framer-motion';

// Dummy data for images and music activities


const MusicPage = () => {
    const images = {
        hero: 'https://via.placeholder.com/1200x400', // Replace with actual hero image URL
        musicOverview: 'https://via.placeholder.com/600x400', // Replace with actual music overview image URL
        studentsPlaying: 'https://via.placeholder.com/600x400', // Replace with actual students playing music image URL
        musicEquipment: 'https://via.placeholder.com/400x300', // Replace with actual music equipment image URL
      };
      
      const musicData = [
        {
          id: 1,
          name: 'Piano',
          image: 'https://via.placeholder.com/150', // Replace with actual music activity image URL
        },
        {
          id: 2,
          name: 'Guitar',
          image: 'https://via.placeholder.com/150', // Replace with actual music activity image URL
        },
        {
          id: 3,
          name: 'Violin',
          image: 'https://via.placeholder.com/150', // Replace with actual music activity image URL
        },
        // Add more music activities data as needed
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
            Music Activities
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our diverse range of music activities and facilities.
          </motion.p>
        </div>
      </div>

      {/* Music Details Section */}
      <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images.musicOverview}
            alt="Music Overview"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Overview of Our Music Facilities</h2>
          <p className="text-gray-700">
            Our school offers a wide range of music facilities to encourage students to engage in musical activities and develop their musical skills. From piano to violin, we have something for every music enthusiast.
          </p>
        </motion.div>
      </div>

      {/* Music Images Section */}
      <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Students Engaging in Music</h2>
          <img
            src={images.studentsPlaying}
            alt="Students Engaging in Music"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Music Equipment</h2>
          <img
            src={images.musicEquipment}
            alt="Music Equipment"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </div>

      {/* Music Activities Gallery Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Music Activities</h2>
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
          {musicData.map((music) => (
            <motion.div
              key={music.id}
              className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden group"
              variants={cardVariants}
            >
              <div className="relative">
                <img
                  src={music.image}
                  alt={music.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2">{music.name}</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MusicPage;
