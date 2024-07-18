
import { motion } from 'framer-motion';

const classesData = [
  {
    id: 1,
    className: 'Class 1',
    classImage: 'https://via.placeholder.com/150', // Replace with actual class image URL
    teacherName: 'John Doe',
    teacherImage: 'https://via.placeholder.com/100', // Replace with actual teacher image URL
    capacity: 20,
  },
  {
    id: 2,
    className: 'Class 2',
    classImage: 'https://via.placeholder.com/150', // Replace with actual class image URL
    teacherName: 'Jane Smith',
    teacherImage: 'https://via.placeholder.com/100', // Replace with actual teacher image URL
    capacity: 25,
  },
  // Add more class data as needed
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const OurClasses = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Classes</h1>
          <p className="text-lg mb-8">Discover our diverse range of classes and dedicated teachers.</p>
        </div>
      </div>

      {/* Main Content - Classes */}
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
          {classesData.map((classItem) => (
            <motion.div
              key={classItem.id}
              className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden group"
              variants={cardVariants}
            >
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2">{classItem.className}</h2>
                <div className="flex flex-col items-center mb-4">
                  <img
                    src={classItem.teacherImage}
                    alt={classItem.teacherName}
                    className="w-16 h-16 rounded-full mb-2 object-cover"
                  />
                  <p className="text-gray-600">{classItem.teacherName}</p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={classItem.classImage}
                  alt={classItem.className}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 text-center">
                <p className="text-gray-600 mb-2">Capacity: {classItem.capacity} students</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurClasses;
