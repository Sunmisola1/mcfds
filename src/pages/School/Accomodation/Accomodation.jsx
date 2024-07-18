
import { motion } from 'framer-motion';

// Dummy data for accommodation options


const Accommodation = () => {
    const accommodationData = [
        {
          id: 1,
          name: 'Dormitory',
          image: 'https://via.placeholder.com/600x400', // Replace with actual dormitory image URL
          capacity: 100,
          description: 'Shared rooms with common facilities for students.',
        },
        {
          id: 2,
          name: 'Studio Apartment',
          image: 'https://via.placeholder.com/600x400', // Replace with actual studio apartment image URL
          capacity: 2,
          description: 'Private apartments with basic amenities for students.',
        },
        {
          id: 3,
          name: 'Family Housing',
          image: 'https://via.placeholder.com/600x400', // Replace with actual family housing image URL
          capacity: 4,
          description: 'Accommodation for students with families, including basic family facilities.',
        },
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
            Student Accommodation
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our student accommodation options and facilities.
          </motion.p>
        </div>
      </div>

      {/* Accommodation Options Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Accommodation Options</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {accommodationData.map((accommodation) => (
            <motion.div
              key={accommodation.id}
              className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden group"
              variants={cardVariants}
            >
              <div className="relative">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{accommodation.name}</h2>
                <p className="text-gray-700 mb-2">{accommodation.description}</p>
                <p className="text-gray-600">Capacity: {accommodation.capacity} students</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Accommodation;
