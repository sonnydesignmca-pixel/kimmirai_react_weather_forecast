import { useState,useEffect } from "react";
import WeatherCard from "./WeatherCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Mousewheel } from "swiper/modules";
import { SlidePrevButton, SlideNextButton } from "./SlideButton";

export default function WeatherCardList({ weather }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [prevText, setPrevtext] = useState("明後日");
  const [nextText, setNexttext] = useState("明日");

  // レイヤーAとレイヤーB、それぞれの画像URLを個別に管理する
  const [bgA, setBgA] = useState("");
  const [bgB, setBgB] = useState("");
  // 現在どちらのレイヤーを表示しているかのフラグ（trueならA、falseならB）
  const [isLayerAActive, setIsLayerAActive] = useState(true);

  const handleSlideChange = (swiper) => {
    setSlideIndex(swiper.realIndex);
    const activeSlide = swiper.slides[swiper.activeIndex];
    if (!activeSlide) return;

    const activeIcon = activeSlide.querySelector("#weather-icon");
    if (!activeIcon) return;

    const newSrc = activeIcon.getAttribute("src");

    // 現在表示中のレイヤーの画像と同じ場合は何もしない
    const currentSrc = isLayerAActive ? bgA : bgB;
    if (newSrc === currentSrc) return;

    // 裏側に隠れている方のレイヤーに新しい画像をセットし、表示を切り替える
    //最初のレンダリングではsetBgBが実行される仕組み
    if (isLayerAActive) {
      setBgB(newSrc);
      setIsLayerAActive(false); // Bをフェードイン、Aをフェードアウトopacity調整用フラグ
    } else {
      setBgA(newSrc);
      setIsLayerAActive(true); // Aをフェードイン、Bをフェードアウトopacity調整用フラグ
    }
  };

  // 背景画像の共通クラス
  const bgLayerClass =
    "fixed inset-0 w-screen h-screen filter blur-[100px] scale-200 pointer-events-none transition-opacity duration-700 ease-in-out";

  // 前後ボタンの切り替え
  useEffect(() => {
    switch (slideIndex) {
      case 0:
      case 3:
        setPrevtext("明後日");
        setNexttext("明日");
        break;
      case 1:
      case 4:
        setPrevtext("今日");
        setNexttext("明後日");
        break;
      case 2:
      case 5:
        setPrevtext("明日");
        setNexttext("今日");
    }
  }, [slideIndex]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* 背景レイヤーA */}
      {bgA && (
        <div
          className={`-z-20 ${isLayerAActive ? "opacity-100" : "opacity-0"} ${bgLayerClass}`}
        >
          <img src={bgA} className="w-full h-full object-cover" />
        </div>
      )}

      {/* 背景レイヤーB */}
      {bgB && (
        <div
          className={`-z-20 ${!isLayerAActive ? "opacity-100" : "opacity-0"} ${bgLayerClass}`}
        >
          <img src={bgB} className="w-full h-full object-cover" />
        </div>
      )}

      {/* 背景の上の薄い白レイヤー */}
      <div className="fixed inset-0 w-screen h-screen bg-white/20 pointer-events-none -z-10" />

      {weather && (
        <div>
          <Swiper
            spaceBetween={50}
            centeredSlides={true}
            loop={true}
            slidesPerView={2.1}
            onInit={handleSlideChange}
            onSlideChange={handleSlideChange}
            modules={[EffectCoverflow, Mousewheel]}
            mousewheel={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 300,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {weather.forecasts.map((forecast, index) => (
              <SwiperSlide key={`forecast-1-${index}`}>
                <WeatherCard forecast={forecast} />
              </SwiperSlide>
            ))}
            {weather.forecasts.map((forecast, index) => (
              <SwiperSlide key={`forecast-2-${index}`}>
                <WeatherCard forecast={forecast} />
              </SwiperSlide>
            ))}

            <div className="flex justify-between text-2xl my-4">
              <SlidePrevButton prevText={prevText} />
              <SlideNextButton nextText={nextText} />
            </div>
          </Swiper>
        </div>
      )}
    </div>
  );
}
