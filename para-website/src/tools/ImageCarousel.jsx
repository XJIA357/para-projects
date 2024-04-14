import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        <img src="/gallery/next-arrow.jpg" alt="Next" />
      </div>
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style }}
        onClick={onClick}
      >
        <img src="/gallery/pre-arrow.jpg" alt="Previous" />
      </div>
    );
}

const ImageCarousel = ({
    images, 
    slidesToShow = 5, 
    slidesToScroll = 5, 
    rows = 1 
}) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow, 
        slidesToScroll, 
        rows, 
        slidesPerRow: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  
    return (
      <Slider {...settings}>
        {images.map((image, idx) => (
          <div key={idx} className="px-1 py-1">
            <img src={image} className="w-full h-auto p-3" alt={`Slide ${idx}`} />
          </div>
        ))}
      </Slider>
    );
};

export default ImageCarousel;
