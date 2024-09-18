import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.css'; // Import custom styles here

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const MySwiper = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
  };

  return (
    <div className="relative w-full">
      <SwiperComponent
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Enables next and prev buttons
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {/* Swiper Slides */}
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0612/4994/5766/files/1._EXTENDER.jpg?width=1343&crop=center"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://assets.vogue.com/photos/5877077a3497bb682a561176/master/w_1600%2Cc_limit/cover-model-may-2009.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://cdn.shopify.com/s/files/1/0612/4994/5766/files/6._TUKAR_SIZE.jpg?width=1343&crop=center"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://megamart.ai/img/services/thum_img_1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://th.bing.com/th/id/R.635e1ba7248734313be41518b0a72a14?rik=hcmKzMZjVpM5wg&riu=http%3a%2f%2foriginmedia0.mensxp.com%2fmedia%2fcontent%2f2016%2fDec%2fbest-online-shopping-sites-for-men-980x457-1481709884_1100x513.jpg&ehk=dhNY9C7s64ZQrScZ6927VvafTHsipIy2TavoJaHj8n8%3d&risl=&pid=ImgRaw&r=0"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://media.vogue.co.uk/photos/5d54530a7e26090008fa8a85/16:9/w_1280,c_limit/Vogue-Feb16-Cover_b.jpg"
            alt=""
          />
        </SwiperSlide>

        {/* Autoplay progress */}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}></svg>
          <span ref={progressContent}></span>
        </div>
      </SwiperComponent>
    </div>
  );
};

export default MySwiper;
