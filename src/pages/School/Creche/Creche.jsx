
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby} from '@fortawesome/free-solid-svg-icons';

// Placeholder images (replace with actual image URLs)
import creche1Image from '../../../assets/img/10.jpg';
import creche2Image from '../../../assets/img/10.jpg';
import creche3Image from '../../../assets/img/10.jpg';
import teacher1Image from '../../../assets/img/10.jpg';
import teacher2Image from '../../../assets/img/10.jpg';
import teacher3Image from '../../../assets/img/10.jpg';

const CrechePage = () => {
  // Sample data for creche classes and teachers
  const classes = [
    {
      id: 1,
      name: 'Creche A',
      image: creche1Image,
      teacher: {
        name: 'Miss Jane Doe',
        description: 'Experienced in early childhood education.',
        image: teacher1Image
      }
    },
    {
      id: 2,
      name: 'Creche B',
      image: creche2Image,
      teacher: {
        name: 'Mr. John Smith',
        description: 'Passionate about fostering creativity in children.',
        image: teacher2Image
      }
    },
    {
      id: 3,
      name: 'Creche C',
      image: creche3Image,
      teacher: {
        name: 'Mrs. Mary Brown',
        description: 'Specializes in child development and care.',
        image: teacher3Image
      }
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-center text-white">
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold mb-4"
          >
            Welcome to Our Creche
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-lg mb-8"
          >
            Explore our nurturing creche classes and dedicated teachers.
          </motion.p>
        </div>
      </div>

      {/* Classes Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Creche Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-lg shadow-md relative bg-white hover:shadow-lg transition duration-300"
            >
              <img
                src={cls.image}
                alt={cls.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center bg-blue-500 rounded-full p-3 w-16 h-16 mx-auto mb-4 transform transition duration-300"
                >
                  <FontAwesomeIcon icon={faBaby} className="text-white text-3xl" />
                </motion.div>
                <h3 className="text-lg font-semibold mb-2 text-center">{cls.name}</h3>
                <motion.img
                  src={cls.teacher.image}
                  alt={cls.teacher.name}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover transform transition duration-300"
                />
                <p className="text-gray-700 text-center">{cls.teacher.description}</p>
                <div className="text-center mt-4">
                  <p className="font-semibold">{cls.teacher.name}</p>
                  <p className="text-sm text-gray-600">Class Teacher</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CrechePage;
