
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img1 from '../../../assets/banner-1.jpg'
import img2 from '../../../assets/banner-2.jpg'
import img3 from '../../../assets/banner-3.jpg'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from '../Slide';


export default function Banner () {
  return (
    <div className='container px-6 mx-auto'>
      <Swiper
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slide image={img1}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide image={img2}></Slide>
        </SwiperSlide>
        <SwiperSlide>
        <Slide image={img3}></Slide>
        </SwiperSlide>

       
        
      </Swiper>
    </div>
  );
}

        