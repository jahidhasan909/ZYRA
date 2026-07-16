"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";


const ImageSlider = () => {
    return (
        <div className=" relative">
             <Swiper
            modules={[Navigation, Autoplay]}
            navigation={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            className="h-[90vh] z-0"
        >
            <SwiperSlide>
                <Image width={1300} height={1000} alt="" src="https://i.ibb.co.com/XwQcmwt/web.jpg" className="h-[90vh] object-cover w-full " />
            </SwiperSlide>
            <SwiperSlide>
                <Image width={1300} height={1000} alt="" src="https://i.ibb.co.com/F4Hwn6s8/485360901-947348620943692-6682872312204226962-n.jpg" className="h-[90vh] object-cover w-full" />
            </SwiperSlide>
           
        </Swiper>
        </div>
    );
};

export default ImageSlider;