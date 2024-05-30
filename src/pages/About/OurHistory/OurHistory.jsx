import 'animate.css'; // Import Animate.css for animations
// import headmistressImage from '../../assets/img/logo.jpg';
import 'animate.css'; // Import animate.css for animations


const OurHistory = () => {
    const events = [
        { year: '1960', title: 'Foundation', description: 'Our school was established with a vision to provide quality education.' },
        { year: '1985', title: 'Growth', description: 'We expanded our campus and introduced new programs to meet growing demands.' },
        { year: '2000', title: 'Modernization', description: 'We embraced technology and modern teaching methods to enhance learning experiences.' },
        { year: '2003', title: 'Growth', description: 'We expanded our campus and introduced new programs to meet growing demands.' },
        { year: '2005', title: 'Modernization', description: 'We embraced technology and modern teaching methods to enhance learning experiences.' },
        { year: '2007', title: 'Growth', description: 'We expanded our campus and introduced new programs to meet growing demands.' },
        { year: '2010', title: 'Modernization', description: 'We embraced technology and modern teaching methods to enhance learning experiences.' },
       
        
        // Add more events as needed
      ];
      
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gray-800 text-white py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn">Our History</h1>
          <p className="text-lg mb-8 animate__animated animate__fadeInUp">Discover the journey of our school through the years.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-12">
        {/* Headmistress Section */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 items-center">
          <div className="md:w-1/2">
            <img src='{firstpic}' alt="Headmistress" className="rounded-lg shadow-md animate__animated animate__fadeInLeft" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4 animate__animated animate__fadeInRight">Meet Our Headmistress</h2>
            <p className="text-gray-700 animate__animated animate__fadeInRight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Nullam eu libero ac orci ultricies consectetur ut ut quam. 
              Etiam commodo justo ac ligula vestibulum, at mattis justo commodo.
            </p>
          </div>
        </div>

       

        {/* Vision and Mission Section */}
        <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          {/* Vision */}
          <div className="md:w-1/2 px-4 mb-6 md:mb-0 animate__animated animate__fadeInLeft">
            <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
            <p className="text-gray-700">
              To be a leading educational institution that inspires and nurtures lifelong learning and holistic development in our students.
            </p>
          </div>

          {/* Mission */}
          <div className="md:w-1/2 px-4 animate__animated animate__fadeInRight">
            <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to provide a safe, inclusive, and stimulating environment where every student is encouraged to achieve their full potential. We are committed to fostering a love for learning, respect, and a sense of community.
            </p>
          </div>
        </div>
      </div>
 {/* School Journey Section */}
 <div className="container mx-auto py-12 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center">
          {/* Text */}
          <div className="md:w-1/2 px-4 animate__animated animate__fadeInRight">
            <h2 className="text-2xl font-bold mb-2">Our School Journey</h2>
            <p className="text-gray-700">
              From our humble beginnings, we have grown into a vibrant community that values academic excellence and character development. Over the years, we have celebrated numerous achievements and built a legacy of educational success.
            </p>
            <p className="text-gray-700 mt-4">
              Join us as we continue to pave the way for future generations, providing a foundation of knowledge, skills, and values that will last a lifetime.
            </p>
          </div>
          {/* Picture */}
          <div className="md:w-1/2 px-4 mb-6 md:mb-0 animate__animated animate__fadeInLeft">
            <img src="path_to_school_journey_image" alt="School Journey" className="rounded-lg shadow-lg mb-4" />
          </div>
          
        </div>
      </div>
        {/* History Timeline */}
        <div className="flex flex-col space-y-8 mt-12">
          {events.map((event, index) => (
            <div key={index} className="flex animate__animated animate__fadeInUp">
              <div className="w-16 mr-4 text-center">
                <div className="rounded-full bg-gray-500 text-white font-bold py-2">{event.year}</div>
              </div>
              <div className="flex-1 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">{event.title}</h2>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurHistory;
