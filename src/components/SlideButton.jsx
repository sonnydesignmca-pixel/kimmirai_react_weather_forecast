import { useSwiper } from "swiper/react";

export const SlidePrevButton = ({prevText}) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="text-xl rounded-2xl p-3 bg-[#2779f3] text-white shadow-md hover:bg-[#508eec]"
    >
      &lt;{prevText}
    </button>
  );
};

export const SlideNextButton = ({nextText}) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className="text-xl rounded-2xl p-3 bg-[#2779f3] text-white shadow-md hover:bg-[#508eec]"
    >
      {nextText}&gt;
    </button>
  );
};
