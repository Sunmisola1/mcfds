'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';
import './Minibar.css'


export const Minibar = () => {
  return (
    <div className="bg-mini text-yellow-200  md:p-2 flex justify-center items-center md:justify-between md:items-center">
      <div className='ml-1 md:ml-8'>
      <a href="#" target="_blank" rel="noopener noreferrer" className='mr-1 '>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <span className="md:mr-2 text-sm md:text-md font-serif font-bold">Working-hours: 8:00 AM-5:00PM</span>
            </div>
      <div className="flex space-x-5   m d:space-x-8 mr-1 md:mr-10">
        {/* Use FontAwesomeIcon component with the imported icons */}
        <a href="#" target="_blank" rel="noopener noreferrer" className='ml-4' >
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

    
    