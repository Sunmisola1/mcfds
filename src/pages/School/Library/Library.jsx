
import { motion } from 'framer-motion';

// Dummy data for images and books
const images = {
  hero: 'https://via.placeholder.com/1200x400', // Replace with actual hero image URL
  librarian: 'https://via.placeholder.com/300x400', // Replace with actual librarian image URL
  libraryOutside: 'https://via.placeholder.com/600x400', // Replace with actual library outside image URL
  libraryInside: 'https://via.placeholder.com/600x400', // Replace with actual library inside image URL
  studentsReading1: 'https://via.placeholder.com/400x300', // Replace with actual student reading image URL
  studentsReading2: 'https://via.placeholder.com/400x300', // Replace with actual student reading image URL
  studentsReading3: 'https://via.placeholder.com/400x300', // Replace with actual student reading image URL
};

const booksData = [
  {
    id: 1,
    title: 'Book Title 1',
    author: 'Author 1',
    image: 'https://via.placeholder.com/150', // Replace with actual book image URL
  },
  {
    id: 2,
    title: 'Book Title 2',
    author: 'Author 2',
    image: 'https://via.placeholder.com/150', // Replace with actual book image URL
  },
  // Add more book data as needed
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const LibraryPage = () => {
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
            Our Library
          </motion.h1>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our diverse collection of books and resources.
          </motion.p>
        </div>
      </div>

      {/* Librarian Section */}
      <div className="container mx-auto py-12 flex flex-col lg:flex-row items-center">
        <motion.div
          className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images.librarian}
            alt="Librarian"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Meet Our Librarian</h2>
          <p className="text-gray-700">
            Our dedicated librarian ensures that students have access to the best resources and support for their academic success.
          </p>
        </motion.div>
      </div>

      {/* Library Images Section */}
      <div className="container mx-auto py-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Our Library Outside</h2>
          <img
            src={images.libraryOutside}
            alt="Library Outside"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Our Library Inside</h2>
          <img
            src={images.libraryInside}
            alt="Library Inside"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </div>

      {/* Students Reading Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Students Reading</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[images.studentsReading1, images.studentsReading2, images.studentsReading3].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img
                src={img}
                alt={`Student Reading ${index + 1}`}
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Book Gallery Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Book Collection</h2>
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
          {booksData.map((book) => (
            <motion.div
              key={book.id}
              className="bg-white p-6 rounded-lg shadow-md relative overflow-hidden group"
              variants={cardVariants}
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </div>
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold mb-2">{book.title}</h2>
                <p className="text-gray-600 mb-4">{book.author}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LibraryPage;
