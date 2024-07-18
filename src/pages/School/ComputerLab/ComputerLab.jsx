import { motion } from 'framer-motion';

// Dummy data for images and equipment


const ComputerLabPage = () => {
    const images = {
        hero: 'https://via.placeholder.com/1200x400', // Replace with actual hero image URL
        labOverview: 'https://via.placeholder.com/600x400', // Replace with actual lab overview image URL
        studentsUsingLab: 'https://via.placeholder.com/600x400', // Replace with actual students using lab image URL
        labEquipment: 'https://via.placeholder.com/400x300', // Replace with actual lab equipment image URL
      };
      
      const equipmentData = [
        {
          id: 1,
          name: 'High-Performance Computers',
          image: 'https://via.placeholder.com/150', // Replace with actual equipment image URL
        },
        {
          id: 2,
          name: 'Projectors',
          image: 'https://via.placeholder.com/150', // Replace with actual equipment image URL
        },
        {
          id: 3,
          name: 'Interactive Whiteboards',
          image: 'https://via.placeholder.com/150', // Replace with actual equipment image URL
        },
        // Add more equipment data as needed
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
            Computer Laboratories
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our state-of-the-art computer laboratories equipped with the latest technology.
          </motion.p>
        </div>
      </div>

      {/* Lab Details Section */}
      <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images.labOverview}
            alt="Computer Lab Overview"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Overview of Our Computer Lab</h2>
          <p className="text-gray-700">
            Our computer labs are designed to provide students with hands-on experience in a variety of computing environments. Equipped with modern technology and resources, our labs support a wide range of educational activities and research.
          </p>
        </motion.div>
      </div>

      {/* Lab Images Section */}
      <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Students Using the Lab</h2>
          <img
            src={images.studentsUsingLab}
            alt="Students Using Lab"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Lab Equipment</h2>
          <img
            src={images.labEquipment}
            alt="Lab Equipment"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </div>

      {/* Equipment Gallery Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Equipment</h2>
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
          {equipmentData.map((equipment) => (
            <motion.div
              key={equipment.id}
              className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden group"
              variants={cardVariants}
            >
              <div className="relative">
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2">{equipment.name}</h2>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ComputerLabPage;
