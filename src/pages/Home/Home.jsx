
import { useState } from 'react'
import './Home.css'
import Slider from '../../components/carousel/carousel';
import Group from '../../assets/img/group.png'
import { Progress } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDice, faGamepad, faRunning, faBook } from '@fortawesome/free-solid-svg-icons';
import 'react-tabs/style/react-tabs.css';
import { faUtensils, faLanguage, faBus,faClock, faGraduationCap, faHandsHelping } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'flowbite-react';






// AboutUsSection.jsx


const AboutUsSection = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center">
        {/* Part 1: Picture */}
        <div className="lg:w-1/2 lg:order-2 ml-12 px-10">
          <img
            src={Group}  // Replace with the actual image URL
            alt="About Us"
            className="mx-auto lg:mx-0 w-auto"
          />
        </div>

        {/* Part 2: Welcome Text */}
        <div className="lg:w-1/2 lg:order-1 lg:pl-12">
          <h2 className="text-3xl font-bold mb-4">WELCOME TO TECHEDU</h2>
          <p className="text-gray-700">
          Fable daycare, preschool, and kindergarten </p>
          <p className="text-black mt-5 text-align text-sm line-height-8 
          ">
                  Come with us, we also teach children about the basic values of human beings as honesty, kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the values and responsibilities needed to become active members of the community, something which the modern world is desperate for.          </p>
        {/* icon */}
          <section className="bg-white py-2">
     
        <div className="flex flex-col md:flex-row  space-y-2 md:space-x-4">
          {/* Feature 1 */}
          <div className="flex items-center">
            <div className="bg-yellow-300 rounded-full px-2 py-1 ">
              <FontAwesomeIcon icon={faDice} className="text-white text-sm" />
            </div>
            <p className="ml-2 mr-9 mb-5 text-yellow-300  text-sm font-serif">Toy</p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center">
            <div className="bg-green-500 rounded-full px-2 py-1  ">
              <FontAwesomeIcon icon={faGamepad} className="text-white text-sm" />
            </div>
            <p className="ml-2 mr-9 mb-5 text-green-500  text-sm font-serif">Games</p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center">
            <div className="bg-red-500 rounded-full px-2 py-1">
              <FontAwesomeIcon icon={faRunning} className="text-white text-sm" />
            </div>
            <p className="ml-2 mr-9 mb-5 text-red-500  text-sm font-serif">Activities</p>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-full px-2 py-1">
              <FontAwesomeIcon icon={faBook} className="text-white text-sm" />
            </div>
            <p className="ml-2 mr-9 mb-5 text-blue-500 text-sm font-serif">Education</p>
          </div>
        </div>

    </section>

{/* progress bar */}
    <div className="flex flex-col gap-2  ml-1 mt-3">
      <div className="text-base font-medium dark:text-white">Small</div>
      <Progress progress={50} size="sm" color="yellow" />
      <div className="text-base font-medium dark:text-white">Small</div>
      <Progress progress={75} size="sm" color="yellow" />
      <div className="text-base font-medium dark:text-white">Small</div>
      <Progress progress={85} size="sm" color="yellow " />
      
  


        </div>
      </div>
      </div>
    </section>
  );
};

/// BannerSection.jsx

const BannerSection = () => {
  return (
    <section className="bg-gray-200 text-black py-16">
      <div className="container mx-auto text-center">
                <div className="flex items-center justify-center space-x-8">
          <div>
            <p className="text-2xl font-semibold">Part 1</p>
            <p>Content for Part 1 goes here.</p>
          </div>
          <div className="border-r border-gray-900 h-20"></div>
          <div>
            <p className="text-2xl font-semibold">Part 2</p>
            <p>Content for Part 2 goes here.</p>
          </div>
          <div className="border-r border-gray-900 h-20"></div>
          <div>
            <p className="text-2xl font-semibold">Part 3</p>
            <p>Content for Part 3 goes here.</p>
          </div>
          <div className="border-r border-gray-900 h-20"></div>
          <div>
            <p className="text-2xl font-semibold">Part 4</p>
            <p>Content for Part 4 goes here.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// OurServicesSection.jsx
const OurServicesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
      <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600">
            Providing a range of services to cater to the diverse needs of children and their families.
          </p>

          {/* Graduation Icon with Lines */}
          <div className="mt-2 flex items-center justify-center">
            <div className="border-b border-gray-500 w-1/4 mr-4"></div>
            <FontAwesomeIcon icon={faGraduationCap} className="text-gray-500 text-3xl" />
            <div className="border-b border-gray-500 w-1/4 ml-4"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-x-8">
          {/* Part 1: Text */}
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faUtensils} className="text-blue-500 text-2xl mr-2" />
              <div>
                <p className="text-lg font-semibold">Meals Provided</p>
                <p>Enjoy nutritious and delicious meals every day.</p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faLanguage} className="text-green-500 text-2xl mr-2" />
              <div>
                <p className="text-lg font-semibold">Language Lessons</p>
                <p>Learn new languages with our interactive lessons.</p>
              </div>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon icon={faBus} className="text-yellow-500 text-2xl mr-2" />
              <div>
                <p className="text-lg font-semibold">Transportation</p>
                <p>Reliable transportation services for your convenience.</p>
              </div>
            </div>
          </div>

          {/* Part 2: Image */}
          <div className="md:w-1/3">
            <img
              src="https://placekitten.com/400/400"  // Replace with the actual image URL
              alt="Service Image"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Part 3: Text */}
          <div className="md:w-1/3">
            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faClock} className="text-purple-500 text-2xl mr-2" />
              <div>
                <p className="text-lg font-semibold">Full Day Session</p>
                <p>Extended hours to accommodate your busy schedule.</p>
              </div>
            </div>

            <div className="flex items-center mb-4">
              <FontAwesomeIcon icon={faGraduationCap} className="text-orange-500 text-2xl mr-2" />
              <div>
                <p className="text-lg font-semibold">Special Education</p>
                <p>Individualized education for every childs unique needs.</p>
              </div>
            </div>

            <div className="flex items-center">
              <FontAwesomeIcon icon={faHandsHelping} className="text-pink-500 text-2xl mr-2" />
              <div>
                <p className="text-lg font-semibold">Special Education</p>
                <p>Supportive programs for children with special needs.</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

// OurClassesSection.jsx

const OurClassesSection = () => {
  const classesData = [
    {
      id: 1,
      image: 'https://placekitten.com/300/200',  // Replace with the actual image URL
      heading: 'Class 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      age: '3-5 years',
      classSize: '15 students',
    },
    {
      id: 2,
      image: 'https://placekitten.com/300/200',  // Replace with the actual image URL
      heading: 'Class 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      age: '6-8 years',
      classSize: '20 students',
    },
    {
      id: 3,
      image: 'https://placekitten.com/300/200',  // Replace with the actual image URL
      heading: 'Class 3',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      age: '9-12 years',
      classSize: '18 students',
    },
    {
      id: 4,
      image: 'https://placekitten.com/300/200',  // Replace with the actual image URL
      heading: 'Class 3',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      age: '9-12 years',
      classSize: '18 students',
    },
    {
      id: 5,
      image: 'https://placekitten.com/300/200',  // Replace with the actual image URL
      heading: 'Class 3',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      age: '9-12 years',
      classSize: '18 students',
    },
    {
      id: 6,
      image: 'https://placekitten.com/300/200',  // Replace with the actual image URL
      heading: 'Class 3',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      age: '9-12 years',
      classSize: '18 students',
    },
  ];
  
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Classes</h2>
          <p className="text-gray-600">
            Explore our classes that cater to various age groups and learning levels.
          </p>
            {/* Graduation Icon with Lines */}
          <div className="mt-2 flex items-center justify-center">
            <div className="border-b border-gray-500 w-1/4 mr-4"></div>
            <FontAwesomeIcon icon={faGraduationCap} className="text-gray-500 text-3xl" />
            <div className="border-b border-gray-500 w-1/4 ml-4"></div>
          </div>
        </div>
  
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classesData.map((classItem) => (
            <div key={classItem.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={classItem.image} alt={`Class ${classItem.id}`} className="w-full h-40 object-cover mb-4 rounded-md" />
              <h3 className="text-xl font-bold mb-2">{classItem.heading}</h3>
              <p>{classItem.description}</p>

              {/* Age and Class Size Section */}
              <div className="mt-4 border-t border-gray-300 pt-4">
                <div className="flex justify-center">
                  <div>
                    <p className="text-sm text-gray-600">Age</p>
                    <p className="text-lg font-semibold">{classItem.age}</p>
                  </div>
                  <div className="mx-4 border-l border-gray-300"></div>
                  <div>
                    <p className="text-sm text-gray-600">Class Size</p>
                    <p className="text-lg font-semibold">{classItem.classSize}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTASection.jsx

const CTASection = () => {
  return (
    <section className="bg-blue-500 text-white py-16 relative overflow-hidden">
      {/* Overflow Image on the Left */}
      <div className="absolute left-0 top-0 h-full w-1/2 overflow-hidden">
        <img
          src="https://placekitten.com/800/600"  // Replace with the actual image URL
          alt="Overflow Image"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4">Join Our Programs Today!</h2>
        <p className="text-lg mb-8">
          Discover a world of learning and fun for your child. Enroll now in our educational programs.
        </p>
        
        {/* Button at the Right */}
        <div className="flex justify-end">
          <button className="bg-white text-blue-500 py-2 px-4 rounded-full font-semibold hover:bg-blue-700 hover:text-white">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

// TeachersSection.jsx
const TeachersSection = () => {
  const teachersData = [
    {
      id: 1,
      name: 'John Doe',
      subject: 'Mathematics',
      image: 'https://placekitten.com/300/200',  // Replace with the actual image URL
    },
    {
      id: 2,
      name: 'Jane Smith',
      subject: 'English Literature',
      image: 'https://placekitten.com/300/200',  // Replace with the actual image URL
    },
    {
      id: 3,
      name: 'Robert Johnson',
      subject: 'Science',
      image: 'https://placekitten.com/300/200',  // Replace with the actual image URL
    },
    {
      id: 4,
      name: 'Emily White',
      subject: 'History',
      image: 'https://placekitten.com/300/200',  // Replace with the actual image URL
    },
    // Add more teachers as needed
  ];
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Meet Our Teachers</h2>
          <p className="text-gray-600">
            Get to know the dedicated educators behind our programs.
          </p>
        </div>

        <Carousel>
          {teachersData.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white p-4 rounded-lg shadow-md overflow-hidden relative"
              style={{ backgroundImage: `url(${teacher.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="h-40 mb-4"></div> {/* Empty div for spacing, adjust height as needed */}

              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700">
                  View Profile
                </button>
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">{teacher.name}</h3>
              <p className="text-sm text-gray-100">{teacher.subject}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

// GallerySection.jsx

const GallerySection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Placeholder data for gallery images
  const galleryData = [
    { id: 1, category: 'Drawing', image: 'https://placekitten.com/800/600' },
    { id: 2, category: 'Excursions', image: 'https://placekitten.com/801/600' },
    { id: 3, category: 'Courses', image: 'https://placekitten.com/802/600' },
    { id: 4, category: 'Playtime', image: 'https://placekitten.com/803/600' },
    { id: 5, category: 'Drawing', image: 'https://placekitten.com/804/600' },
    { id: 6, category: 'Excursions', image: 'https://placekitten.com/805/600' },
    { id: 7, category: 'Courses', image: 'https://placekitten.com/806/600' },
    { id: 8, category: 'Playtime', image: 'https://placekitten.com/807/600' },
    // Add more images with different categories
  ];

  // Filter gallery images based on the selected category
  const filteredImages = selectedCategory === 'All' ? galleryData : galleryData.filter(item => item.category === selectedCategory);

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Our Gallery</h2>
          <p className="text-gray-600">
            Explore moments captured in our programs.
          </p>
        </div>

        {/* Mini Navbar */}
        <div className="mb-6 flex justify-center">
          <ul className="flex">
            {['All', 'Drawing', 'Excursions', 'Courses', 'Playtime'].map(category => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer py-2 px-4 mx-2 border-b-2 transition-colors ${selectedCategory === category ? 'border-blue-500 bg-blue-100' : 'border-gray-300 hover:bg-gray-100'}`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Gallery Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div key={image.id}>
              <img src={image.image} alt={image.category} className="w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 object-cover rounded-md shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};























export default function Home() {
    
  return (
    <div> 
       <Slider/>
       <AboutUsSection />
       <BannerSection />
       <OurServicesSection />
       <OurClassesSection />
       <CTASection />
      <TeachersSection />
      <GallerySection />
   
  </div>
  )
}
