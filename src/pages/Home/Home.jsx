
import { useState , useEffect } from 'react'
import './Home.css'
import Sliders from '../../components/carousel/Carousel';
import Teacher from '../../assets/img/9.jpg';
import Grad from '../../assets/img/8.jpg'
import { Progress } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Backpic from '../../assets/img/hpage.jpg';
import classpic from '../../assets/img/children-602967_1920.jpg';
import firstpic from '../../assets/img/12.jpg';
import classpics from '../../assets/img/boy-330582_1920.jpg'
import Teachers from '../../assets/img/10.jpg'
import gallerypic from '../../assets/img/12.jpg'
import gallery from '../../assets/img/13.jpg'
import gallerypics from '../../assets/img/bgpic.jpg'
import 'react-tabs/style/react-tabs.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faUtensils, faLanguage, faBus,faClock, faGraduationCap, faHandsHelping , faDice, faGamepad, faRunning, faBook} from '@fortawesome/free-solid-svg-icons';


// AboutUsSection.jsx

const AboutsUsSection = () => {
  return (
    <section className="bg-white py-10">
          <h2 className="text-2xl text-center md:ml-24 md:text-left lg:text-3xl font-bold mb-6">WELCOME TO TECHEDU</h2>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
        {/* Part 1: Picture */}
        <div className="lg:w-1/2 lg:order-2 ml-0 lg:ml-12 mb-6 lg:mb-0 px-6 lg:px-10">
    
          <img
            src={Backpic} // Replace with the actual image URL
            alt="About Us"
            className="mx-auto lg:mx-0 w-full h-full md:w-1/2 lg:w-auto"
          />
        </div>

        {/* Part 2: Welcome Text */}
        <div className="lg:w-1/2 lg:order-1 lg:pl-12 mx-4">
         
          <p className="text-gray-700 text-md font-bold md:text-xl mb-2"> Michael and Cecilia Foundation Demonstration School</p>
          <p className="text-black text-sm leading-relaxed block ">
            Come with us, we also teach children about the basic values of human beings as honesty, kindness, generosity, courage, freedom, equality, and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the values and responsibilities needed to become active members of the community, something which the modern world is desperate for.
          </p>
  {/*play icon */}
  <section className="bg-white py-2">
     
     <div className="   grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4   lg:flex lg:flex-row  space-y-2 md:space-x-4">
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
 
 <div className="flex flex-col gap-2  ml-1 mt-3">
    <div className="toy mb-6">
      <div className="text-sm font-medium dark:text-white flex justify-between">
      <p className=''>Education</p>
        <p className=''>100%</p></div>
      
      <Progress progress={100} size="sm" color="yellow" />
  
      </div>
      <div className="toy  mb-6">
      <div className="text-sm font-medium dark:text-white flex justify-between"  >
      <p className=''>Our Teachers</p>
        <p className=''>100%</p>
        </div>
     
      <Progress progress={100} size="sm" color="yellow" />
      </div>
      <div className="toy   mb-6">
      <div className="text-sm font-medium dark:text-white flex justify-between">
      <p className=''> Creativity</p>
        <p className=''>100%</p>
  
      </div>
      <Progress progress={100} size="sm" color="yellow" />
              </div>
              </div>
        </div>
      </div>
    </section>
  );
};

/// BannerSection.jsx
const BannerSection = () => {
  const [counters, setCounters] = useState([
    { id: 1, start: 10, end: 50, text: 'Teacher'},
    { id: 2, start: 30, end: 20, text: 'Campus' },
    { id: 3, start: 20, end: 350, text: 'Student' },
    { id: 4, start: 5, end: 250, text: 'Teaching Hours' },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) =>
        prevCounters.map((counter) => {
          const { start, end } = counter;
          let newCount = counter.start + 1;
          if (newCount > end) {
            newCount = start; // Reset to start value if reached end
          }
          return { ...counter, start: newCount };
        })
      );
    }, 100); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" mx-auto py-10  bg-blue-900 bammer">  
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {counters.map((counter) => (
          <div key={counter.id} className="  border-none md:border-r border-gray-300 p-4 text-center ">
            <h3 className="text-5xl head-text  font-semibold mb-2">{counter.start}</h3>
            <p className="para-text text-lg">{counter.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// OurServicesSection.jsx
const OurServicesSection = () => {
  return (
    <section className= " bg-white py-12 font-serif">
      <div className="container mx-auto text-center">
      <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Our Services</h2>
          <p className="text-gray-600 text-sm md:text-lg">
            Providing a range of services to cater to the diverse needs of children and their families.
          </p>

          {/* Graduation Icon with Lines */}
          <div className="mt-2 flex items-center justify-center">
            <div className="border-b border-color w-10 mr-2"></div>
            <FontAwesomeIcon icon={faGraduationCap} className="text-color text-sm" />
            <div className="border-b border-color w-10 ml-2"></div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-8">
          {/* Part 1: Text */}
          <div className="md:w-1/3">
            <div className="flex items-center mt-4 md:mb-24 md:-mt-20 mb-7">
                            <div>
                <p className="text-md font-semibold text-right">Meals Provided</p>
                <p className=' text-right'>Enjoy nutritious and delicious meals every day.</p>
              </div>
              <FontAwesomeIcon icon={faUtensils} className="text-white text-2xl mr-2 ml-6 icon-color p-10 rounded-full" />
            </div>

            <div className="flex items-center md:mb-24 mb-7">
              <div className=' text-right'>
                <p className="text-md font-semibold">Language Lessons</p>
                <p>Learn new languages with our interactive lessons.</p>
              </div>
              
              <FontAwesomeIcon icon={faLanguage} className="text-white text-2xl mr-2 ml-6 icon-color p-10 rounded-full" />
            </div>

            <div className="flex items-center md:-mb-12">
              
              <div className=' text-right'>
                <p className="text-md font-semibold">Transportation</p>
                <p>Reliable transportation services for your convenience.</p>
              </div>
              <FontAwesomeIcon icon={faBus} className="text-white text-2xl mr-2 ml-6 icon-color p-10 rounded-full" />
            </div>
          </div>

          {/* Part 2: Image */}
          <div className="md:w-1/3">
            <img
              src={ Grad } // Replace with the actual image URL
              alt="Service Image"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Part 3: Text */}
          <div className="md:w-1/3">
            <div className="flex items-center mt-4 md:mb-24 md:-mt-20 mb-7">
              <FontAwesomeIcon icon={faClock} className="text-white text-2xl mr-6 ml-2  icon-color p-10 rounded-full" />
              <div className=' text-left'>
                <p className="text-md font-semibold">Full Day Session</p>
                <p>Extended hours to accommodate your busy schedule.</p>
              </div>
            </div>

            <div className="flex items-center md:mb-24 mb-7">
              <FontAwesomeIcon icon={faGraduationCap} className="text-white text-2xl mr-6 ml-2 icon-color p-10 rounded-full" />
              <div className=' text-left'>
                <p className="text-md font-semibold">Special Education</p>
                <p>Individualized education for every childs unique needs.</p>
              </div>
            </div>

            <div className="flex items-center  md:-mb-12">
              <FontAwesomeIcon icon={faHandsHelping} className="text-white text-2xl mr-6 ml-2 icon-color p-10 rounded-full" />
              <div className=' text-left'>
                <p className="text-md font-semibold">Special Education</p>
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
      image: classpic,  // Replace with the actual image URL
      heading: 'Class 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      age: '3-5 years',
      classSize: '15 students',
    },
    {
      id: 2,
      image: classpics,  // Replace with the actual image URL
      heading: 'Class 2',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      age: '6-8 years',
      classSize: '20 students',
    },
    {
      id: 3,
      image: firstpic ,  // Replace with the actual image URL
      heading: 'Class 3',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      age: '9-12 years',
      classSize: '18 students',
    },
    
  ];
  
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-2">Our Classes</h2>
          <p className="text-gray-600">
            Explore our classes that cater to various age groups and learning levels.
          </p>
            {/* Graduation Icon with Lines */}
            <div className="mt-2 flex items-center justify-center">
            <div className="border-b border-blue-800 w-10 mr-2"></div>
            <FontAwesomeIcon icon={faGraduationCap} className="text-blue-800 text-sm" />
            <div className="border-b border-blue-800 w-10 ml-2"></div>
          </div>
        </div>
  
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classesData.map((classItem) => (
            <div key={classItem.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={classItem.image} alt={`Class ${classItem.id}`} className="w-full h-60 object-cover mb-4 rounded-md" />
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
    <section className=" banner-color text-white py-12">
    <div className="container mx-auto px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
        <p className="text-lg mb-6">Discover the best education for your child.</p>
        <button className="bg-yellow-300 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full">Get Started</button>
      </div>
    </div>
  </section>
  );
};

// Sample teacher data


const TeacherSlider = () => {
  const teachersData = [
    { id: 1, name: 'John Doe', subject: 'Mathematics', imageUrl: Teacher  },
    { id: 2, name: 'Jane Smith', subject: 'Science', imageUrl: Teachers  },
    { id: 3, name: 'Michael Johnson', subject: 'History', imageUrl: Teacher  },
    { id: 4, name: 'Michael Johnson', subject: 'History', imageUrl: Teachers  },
    // Add more teacher data as needed
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-18 overflow-hidden">
    <div className="pa mb-3 mt-8 text-center p-5">
    <h2 className='font-bold text-2xl mb-2'>Our Teacher</h2>
  
      {/* Graduation Icon with Lines */}
      <div className="mt-2 flex items-center justify-center">
            <div className="border-b border-color w-10 mr-2"></div>
            <FontAwesomeIcon icon={faGraduationCap} className="text-color text-sm" />
            <div className="border-b border-color w-10 ml-2"></div>
          </div>
    </div>
    
    <Slider {...settings}>
     
      {teachersData.map((teacher) => (
        <div key={teacher.id} className="teacher-card">
            <div className="teacher-image-container flex justify-center border border-gray-300 m-6">
            <img src={teacher.imageUrl} alt={teacher.name} className="teacher-image h-72 w-80" />
            <div className="overlay">
              <button className="view-profile-btn btn text-yellow-300">View Profile</button>
            </div>
          </div>
          <div className="teacher-info text-center">
            <h3 className="font-bold">{teacher.name}</h3>
            <p className="font-semibold">{teacher.subject}</p>
          </div>
        </div>
        
      ))}
    </Slider>
    </div>
  );
};


// GallerySection.jsx
const GallerySection = () => {

  // Placeholder data for gallery images
  const galleryData = [
    { id: 1, category: 'Drawing', image: gallerypic },
    { id: 2, category: 'Excursions', image: gallerypics},
    { id: 3, category: 'Courses', image: gallery },
    { id: 4, category: 'Playtime', image: gallerypics },
  
    // Add more images with different categories
  ];


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
    

        {/* Gallery Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryData.map(image => (
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
    <div className='overflow-hidden'> 
      
       <Sliders/>
           <AboutsUsSection />
       <BannerSection />
       <OurServicesSection />
       <OurClassesSection />
       <CTASection />
           <TeacherSlider/>
      < GallerySection />
   
  </div>
  )
}
