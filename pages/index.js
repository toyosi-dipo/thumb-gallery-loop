import { useState } from "react";
import Image from "next/image";
// Import image data
import imagePaths from "@/data/image-data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required swiper modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function App() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        loop={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {imagePaths.map((imagePath, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                height={666}
                width={1000}
                alt={imagePath.split("-")[1]}
                src={imagePath}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={"auto"}
        loop={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {imagePaths.map((imagePath, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                height={320}
                width={480}
                alt={imagePath.split("-")[1]}
                src={imagePath}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
}
