import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import HeroImg1 from "../../../../Pictures/74cf953c2ff0c756d927dea77d9ff773.jpg";
import HeroImg2 from "../../../../Pictures/74cf953c2ff0c756d927dea77d9ff773.jpg";
import HeroImg3 from "../../../../Pictures/74cf953c2ff0c756d927dea77d9ff773.jpg";
import { HeroSlide } from "../../../Components/Shared/HeroSlide";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-[70vh]">
      <Swiper
        navigation
        modules={[Navigation]}
        className="w-full h-full"
      >
        <SwiperSlide>
          <HeroSlide
            badge="Up To 50% Off"
            title="Your Next Favorite Book"
            highlight="Click Away"
            description="তিন মাস হতে চলল এই বাদা অঞ্চলে এসেছি। যাকে বলে সুন্দরবন। মনে হচ্ছে এখানে আমার থাকা সম্ভব হবে না।"
            image={HeroImg1}
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlide
            badge="New Arrivals"
            title="Discover Amazing Stories"
            highlight="Every Day"
            description="নতুন লেখকদের সেরা বইগুলো এখন এক ক্লিকেই পাওয়া যাবে। পড়ুন, জানুন, আবিষ্কার করুন।"
            image={HeroImg2}
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroSlide
            badge="Editor Choice"
            title="Read Anywhere Anytime"
            highlight="With E-Book"
            description="আপনার পছন্দের বই পড়ুন যেকোনো সময়, যেকোনো জায়গা থেকে।"
            image={HeroImg3}
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};


export default Hero;
