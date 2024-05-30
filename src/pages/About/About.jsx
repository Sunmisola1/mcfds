
import { Fade } from "react-awesome-reveal";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Group from '../../assets/img/group.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  return (
    <section className="bg-gray-800 text-white py-32 font-serif">
    
      {/* Hero Section */}
 
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-8">
            Learn more about our school and what we offer.
          </p>
          {/* Add any other content, buttons, or images for the hero section */}
       
      </div>
    </section>
  );
};

/// Features Section.jsx

const FeaturesSection = () => {
  return (
    <section className="container mx-auto py-12 font-serif">
     
      <Fade bottom cascade>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
          {/* Card 1 */}
          <div className=" overflow-hidden  transition-all hover:border-blue-500">
            <div className="p-4 flex items-center justify-center">
              <div className="rounded-full p-6 text-blue-300 border-2 border-blue-500 shadow-md hover:bg-blue-500 hover:text-white">
                {/* Icon (Replace with your icon or icon component) */}
                
                
                <FontAwesomeIcon icon={faFutbol} size="5x"/>
               
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-center">Card 1</h3>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Add more cards similar to Card 1 */}
          {/* Card 2 */}
          <div className=" overflow-hidden  transition-all hover:border-blue-500">
            <div className="p-4 flex items-center justify-center">
              <div className="rounded-full p-6 text-red-300 border-2 border-red-500 shadow-md hover:bg-red-500 hover:text-white">
                {/* Icon (Replace with your icon or icon component) */}
                
                
                <FontAwesomeIcon icon={ faHome }  size="5x"/>
               
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-center">Card 1</h3>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className=" overflow-hidden  transition-all hover:border-blue-500">
            <div className="p-4 flex items-center justify-center">
              <div className="rounded-full p-6 text-yellow-300 border-2 border-yellow-500 shadow-md hover:bg-yellow-500 hover:text-white">
                {/* Icon (Replace with your icon or icon component) */}
                               
                <FontAwesomeIcon icon={ faPen } size="5x"/>
               
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-center">Card 1</h3>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>

          {/* Card 4 */}
         <div className=" overflow-hidden  transition-all hover:border-blue-500">
            <div className="p-4 flex items-center justify-center">
              <div className="rounded-full p-6 text-green-300 border-2 border-green-500 shadow-md hover:bg-green-500 hover:text-white">
                {/* Icon (Replace with your icon or icon component) */}
                
                
                <FontAwesomeIcon icon={faFutbol} size="5x"/>
               
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-center">Card 1</h3>
              <p className="text-gray-600 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
        </Fade>
    
    </section>
  );
};

// OurAbout.jsx
const OurAbout = () => {
  return (
    <section className="bg-white py-6 font-serif">
       <Fade bottom cascade>
       <h2 className="text-3xl font-bold text-center">WHO WE ARE</h2>
            <p className="text-gray-700 mb-4 text-center">MCFDT daycare, preschool, and kindergarten</p>
        <div className="mt-2 flex items-center justify-center">
            <div className="border-b border-gray-500 w-1/6 mr-4"></div>
            <FontAwesomeIcon icon={faGraduationCap} className="text-blue-900 text-3xl" />
            <div className="border-b border-gray-500 w-1/6 ml-4"></div>
         </div> 
       
         <div className="container mx-auto py-8">
          <div className="flex flex-col lg:flex-row items-center justify-center">
        {/* Left side - Text */}
        <div className="lg:w-1/2 lg:pr-12 mb-6 lg:mb-0">
                <p className="text-gray-700 mb-4">
          Well come to Techedu come with us, we also teach children about the basic values of human beings as honesty, kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the values and responsibilities needed to become active members of the community, tolerance and develop something which the modern world is desperate for norem ipsum dolor sit amet desperate.
Adipiscing signiferumque vix et. No alii docendi usu, pri graeco possim percipit ne.</p>
  <ul className="list-disc ml-6 mb-4">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
          </ul>
          <p className="text-gray-700">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the values and responsibilities needed to become active members of the community,
             tolerance and develop something which the modern world.
          </p>
        </div>

        {/* Right side - Image */}
        <div className="lg:w-1/2">
          <img src={Group} alt="Image" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>

    </Fade>
    </section>
  );
};

const SkillsSection = () => {
  // Data for skills
  const skillsData = [
    { skill: 'HTML', percent: 90 },
    { skill: 'CSS', percent: 85 },
    { skill: 'JavaScript', percent: 80 },
    { skill: 'React', percent: 75 },
    { skill: 'Node.js', percent: 70 },
    { skill: 'React', percent: 75 },
    { skill: 'React', percent: 75 },
    { skill: 'Node.js', percent: 70 },
  ];

  return (
    <div className="container mx-auto py-8 font-serif m-8">
      <Fade bottom cascade>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">SKILLS AND EXPERIENCE</h2>
        <p className="text-gray-700">
          Here are some of my skills and experience in various technologies.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="flex flex-col ">
            <div className="flex justify-between">
            <p className="font-semibold mb-2">{skill.skill}</p>
            <p className="font-semibold mb-2"> {skill.percent}% </p>
            </div>
            <div className="flex items-center justify-between  bg-gray-300 rounded-lg">
              <div className="bg-yellow-400 text-white py-1 rounded-lg text-center w-1/2 h-2" 
              style={{ width: `${skill.percent}%` }}>
                
              </div>
            </div>
            
          </div>
        ))}
      </div>
      </Fade>
    </div>

  );
};

const OurTeachersSection = () => {
  // Sample data for teachers
  const teachersData = [
    { name: 'John Doe', text: 'come with us, we also teach children about the basic values of human beings as honesty, ', subject: 'Mathematics', image:Group},
    { name: 'Jane Smith', text: 'come with us, we also teach children about the basic values of human beings as honesty, kindness, erstanding', subject: 'Science', image: Group },
    { name: 'David Johnson', text: 'come with us, we also teach children about the basic values of human beings as honesty, kindness, generosity', subject: 'History', image: Group },
    { name: 'Emily Wilson', text: 'come with us, we also teach children about the basic values of human beings as honesty, kindness, generosity, courage', subject: 'English', image: Group },
    { name: 'David Johnson', text: 'come with us, we also teach children about the basic values of human beings as honesty', subject: 'History', image: Group },
    { name: 'Emily Wilson', text: 'come with us, we also teach children about the basic values of human beings ', subject: 'English', image: Group },
    // Add more teachers as needed
  ];

  // Settings for the slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3 ,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  

  return (
    <div className="container mx-auto py-8 mb-20">
          <Fade bottom cascade>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Our Teachers</h2>
        <p className="text-gray-700">
          Meet our experienced and dedicated teachers.
        </p>
      </div>
      <Slider {...sliderSettings}>
        {teachersData.map((teacher, index) => (
          <div key={index} className="text-center w-96 p-7 m-x-5 overflow-hidden">
            <img src={teacher.image} alt={teacher.name} className="mx-auto  p-5  border-gray-500 border-2" style={{ width: '300px', height: '250px' }} />
            <h3 className="text-lg font-bold">{teacher.name}</h3>
            <p className="text-gray-600 ">{teacher.subject}</p>
            <p className="text-gray-600 mt-3 text-center w-56 h-64
            ">{teacher.text}</p>
            
          </div>
        ))}
      </Slider>
      </Fade>
    </div>
  );
};

export default function About() {
    
  return (
    <div> 
       <HeroSection/>
       <FeaturesSection />
       <OurAbout />
       <  SkillsSection />
       <OurTeachersSection />
   
  </div>
  )
}
