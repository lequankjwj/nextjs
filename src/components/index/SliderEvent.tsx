import React from 'react';

import Slider from 'react-slick';

// type ISliderEvent = {
//   title: String;
//   detail: String;
//   footer: String;
// };
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <img src="/assets/images/arrow-right.png" className='slide-next' alt="" onClick={onClick} />
  );
}

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <img src="/assets/images/arrow-left.png" className='slide-prev' alt="" onClick={onClick} />
  );
}
const SliderEvent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    draggable: true,
    nextArrow: <NextArrow className="slick-nav" />,
    prevArrow: <PrevArrow className="slick-nav" />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="event-slider">
      <Slider {...settings}>
        <a href="">
          <div className="slider-event-item px-2">
            <div className="item flex">
              <div className="image inside inside-left">
                <img src="./assets/images/imgEvent1.png" alt="" />
              </div>
              <div className="detail inside inside-right">
                <p className="title">TOMAの謎解きタイム</p>
                <p className="content">22.7.14 12:00start</p>
                <p className="author">＠岐阜・高山</p>
              </div>
            </div>
          </div>
        </a>
        <a href="">
          <div className="slider-event-item px-2">
            <div className="item flex">
              <div className="image inside inside-left">
                <img src="./assets/images/imgEvent2.png" alt="" />
              </div>
              <div className="detail inside inside-right">
                <p className="title">TOMA SOURCE LIVE</p>
                <p className="content">22.6.14 15:00start</p>
                <p className="author">＠横浜アリーナ</p>
              </div>
            </div>
          </div>
        </a>
      </Slider>
    </div>

  )
}

export { SliderEvent };
