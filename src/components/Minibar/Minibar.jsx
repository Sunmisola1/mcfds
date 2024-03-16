'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';



export const Minibar = () => {
  return (
    <div className="bg-yellow-300 text-white p-2 flex justify-between items-center">
      <div className='ml-8'>
      <a href="#" target="_blank" rel="noopener noreferrer" className='mr-2 '>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <span className="mr-2 font-serif font-bold">Working-hours: 8:00 AM-5:00PM</span>
            </div>
      <div className="flex space-x-8 mr-10">
        {/* Use FontAwesomeIcon component with the imported icons */}
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

    
    