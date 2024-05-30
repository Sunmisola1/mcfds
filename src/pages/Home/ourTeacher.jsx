import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import Group from '../../assets/img/group.png';


const OurTeacherSection = () => {
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

 
export default OurTeacherSection;
