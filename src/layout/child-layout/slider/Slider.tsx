import Slider from 'react-slick';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  draggable: true,
};
const SliderList = () => (
  <Slider {...settings}>
    <div className='item-slide'>
      <img src="./assets/images/slider.png" />
    </div>
    <div className='item-slide'>
      <img src="./assets/images/slider.png" />
    </div>
    <div className='item-slide'>
      <img src="./assets/images/slider.png" />
    </div>
  </Slider>
);

export { SliderList };
