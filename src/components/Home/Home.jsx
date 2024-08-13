import React from 'react';
import Slider from 'react-slick';
import './Home.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images directly
import image1 from '../Asset/Image/6.jpg';
import image2 from '../Asset/Image/slider 2.jpg';
import image3 from '../Asset/Image/slider 3.jpg';

const Home = () => {
  const sliderData = [
    {
      image: image1,
      title: 'Title 1',
      description: 'Description 1',
    },
    {
      image: image2,
      title: 'Title 2',
      description: 'Description 2',
    },
    {
      image: image3,
      title: 'Title 3',
      description: 'Description 3',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="homeContainer">
      <Slider {...settings} className="slider">
        {sliderData.map((slide, index) => (
          <div key={index} className="sliderItem">
            <img src={slide.image} alt={slide.title} className="sliderImage" />
            <div className="overlay">
              <h2 className="overlayTitle">{slide.title}</h2>
              <p className="overlayDescription">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
      
      <main className="mainContent">
        <section className="Section">
          <h1>Welcome to Our Website</h1>
          <p>Your one-stop destination for all things books and more.</p>
        </section>
        <section className="featuresSection">
          <div className="feature">
            <h2>About Us</h2>
            <p>Learn more about our mission and values.</p>
          </div>
          <div className="feature">
            <h2>Books</h2>
            <p>Explore our vast collection of books.</p>
          </div>
          <div className="feature">
            <h2>New Releases</h2>
            <p>Check out the latest additions to our collection.</p>
          </div>
          <div className="feature">
            <h2>Contact Us</h2>
            <p>Get in touch with us for any queries or feedback.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
