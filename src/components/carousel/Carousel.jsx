
import { Carousel } from 'flowbite-react';
import Group from '../../assets/img/group.png';


export default function Slider() {
    const customCarouselStyle = {
        borderRadius: '30', 
        // Set border radius to 0 or 'none'
      };
  return (
    <div> 
     <div className="h-96 sm:h-64 xl:h-96 2xl:h-96 flowbite-carousel ">
    <Carousel pauseOnHover style={customCarouselStyle} >
      <img src={Group} className='rounded-t-none ' alt="..." />
      <img src={Group} className='rounded-t-none' alt="..." />
      <img src={Group} className='rounded-t-none ' alt="..." />
      <img src={Group} className='rounded-t-none' alt="..." />
      <img src={Group} className='rounded-t-none' alt="..." />
    </Carousel>
  </div>
  </div>
  )
}
