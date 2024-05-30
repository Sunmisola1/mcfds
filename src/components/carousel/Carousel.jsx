import './slider.css'
// import backgroundpic from '../../assets/img/'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './slider.css'; // Import your CSS file for styling

const Sliders = () => {
  return (
    <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false} showArrows={false} showStatus={false}>
    <div className="slider-item slide1">
      <div className="slider-content">
      <h1 className="slider-text text-4xl md:text-5xl">Welcome to Our School</h1>
        <p className="slider-para  text-md md:text-3xl">Empowering Students for Success</p>
        <button className="btn px-10 slider-btn text-xl py-3 rounded-lg">Explore More</button>
      </div>
    </div>
    <div className="slider-item slide2">
      <div className="slider-content">
           <h1 className="slider-text text-3xl  md:text-5xl ">Unlocking  Inspiring Excellence</h1>
        <p className="slider-para text-md md:text-3xl">Where Creativity Meets Learning</p>
        <button className="btn px-10 text-xl py-3 rounded-lg slider-btn">Discover Now</button>
     
      </div>
    </div>
    <div className="slider-item slide3">
      <div className="slider-content">
      <h1 className="slider-text text-3xl md:text-5xl">Building Futures Together</h1>
        <p className="slider-para text-md  md:text-3xl">Empowering Minds, Enriching Lives</p>
        <button className="btn px-10 text-xl py-3 rounded-lg slider-btn">Join Us</button>
      </div>
    </div>
  </Carousel>
  );
};

export default Sliders;
