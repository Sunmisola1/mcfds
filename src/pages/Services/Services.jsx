
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher, faChild, faBus } from '@fortawesome/free-solid-svg-icons';
import "./Services.css"

const services = [
  {
    icon: faBook,
    title: 'Education Programs',
    description: 'Comprehensive curriculum designed to foster learning and development.',
  },
  {
    icon: faChalkboardTeacher,
    title: 'Qualified Teachers',
    description: 'Our teachers are highly qualified and dedicated to student success.',
  },
  {
    icon: faChild,
    title: 'Child Care',
    description: 'Safe and nurturing environment for your child’s growth.',
  },
  {
    icon: faBus,
    title: 'Transportation',
    description: 'Reliable transportation services for students.',
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 ">
      
      {/* Hero Section */}
      <div className="hero-section text-white bg-services py-16 text-center">
                 <h1 className="text-4xl font-bold mb-4 animate__animated animate__fadeIn ">Our Services</h1>
          <p className="text-lg mb-8 animate__animated animate__fadeInUp font-serif">We provide a variety of services to meet the needs of our students and their families.</p>
      
      </div>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105">
            <div className="flex items-center justify-center mb-4">
              <div className="bg-services p-4 rounded-full text-yellow-300">
                <FontAwesomeIcon icon={service.icon} size="2x" />
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
