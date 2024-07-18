
import { motion } from 'framer-motion';

const DiningHall= () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="bg-gray-100 min-h-screen"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">Student Dining Hall</h1>
          <p className="text-lg mb-8">Explore our dining hall options and enjoy delicious meals.</p>
        </div>
      </div>

      {/* Dining Hall Images Section */}
      <motion.section
        className="container mx-auto py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Dining Hall Images</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Placeholder images with descriptions */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-lg shadow-md">
            <img
              src="/images/dining-hall-outside.jpg"
              alt="Outside Dining Hall"
              className="w-full h-auto"
            />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Outside Dining Hall</p>
              <p className="text-gray-700">View of our dining hall from the outside.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="overflow-hidden rounded-lg shadow-md">
            <img
              src="/images/dining-hall-inside.jpg"
              alt="Inside Dining Hall"
              className="w-full h-auto"
            />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Inside Dining Hall</p>
              <p className="text-gray-700">Interior view of our dining hall.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="overflow-hidden rounded-lg shadow-md">
            <img
              src="/images/students-eating.jpg"
              alt="Students Eating"
              className="w-full h-auto"
            />
            <div className="p-4 bg-white">
              <p className="text-lg font-semibold mb-2">Students Eating</p>
              <p className="text-gray-700">Students enjoying a meal in our dining hall.</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Dining Hall Options Section */}
      <motion.div
        className="container mx-auto py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Dining Hall Options</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Placeholder data for dining hall options */}
          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative overflow-hidden">
              <img
                src="/images/main-dining-hall.jpg"
                alt="Main Dining Hall"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Main Dining Hall</h2>
              <p className="text-gray-700 mb-2">Our main dining hall offers a variety of meal options for students.</p>
              <p className="text-gray-600">Capacity: 200 seats</p>
              <p className="text-gray-600">Hours: Open daily from 7:00 AM to 9:00 PM</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative overflow-hidden">
              <img
                src="/images/specialty-dining-area.jpg"
                alt="Specialty Dining Area"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Specialty Dining Area</h2>
              <p className="text-gray-700 mb-2">A dedicated area for special meals and events.</p>
              <p className="text-gray-600">Capacity: 50 seats</p>
              <p className="text-gray-600">Hours: Open for special events and occasions.</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-md">
            <div className="relative overflow-hidden">
              <img
                src="/images/outdoor-dining-pavilion.jpg"
                alt="Outdoor Dining Pavilion"
                className="w-full h-48 object-cover rounded-t-lg"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Outdoor Dining Pavilion</h2>
              <p className="text-gray-700 mb-2">Enjoy meals outdoors in our relaxing dining pavilion.</p>
              <p className="text-gray-600">Capacity: 100 seats</p>
              <p className="text-gray-600">Hours: Open during favorable weather conditions.</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DiningHall;
