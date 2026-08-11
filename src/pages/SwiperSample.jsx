import "./SwiperSample.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
// import { SlideNextButton } from "../components/SlideNextButton.jsx";
import { SlidePrevButton,SlideNextButton } from "../components/SlideButton.jsx";

const data = ["Slide 1", "Slide 2", "Slide 3", "Slide 1", "Slide 2", "Slide 3"];

export default function SwiperSample() {
  return (
    <div className="max-w-2xl m-auto">
      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        loop={true}
        slidesPerView={2.5}
        modules={[EffectCoverflow]}
        // pagination={{
        // 	type: "fraction"
        // }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {data.map((d) => (
          <SwiperSlide>
            <div style={{ background: "grey", height: "300px" }}>
              {d}
              <h2>テストテストテストテスト</h2>
            </div>
          </SwiperSlide>
        ))}

        <div>
          <SlidePrevButton />
          <SlideNextButton />
        </div>
      </Swiper>
    </div>
  );
}
