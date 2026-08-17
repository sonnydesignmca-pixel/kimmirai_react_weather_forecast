import { useSwiper } from "swiper/react";

export const SlidePrevButton = ({ prevText, isNavDisabled }) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="text-xl rounded-2xl p-3 bg-[#2779f3] text-white shadow-md hover:bg-[#508eec] disabled:bg-[#b6c0cf]"
      disabled={isNavDisabled}
    >
      &lt;{prevText}
    </button>
  );
};

export const SlideNextButton = ({ nextText,isNavDisabled }) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={() => swiper.slideNext()}
      className="text-xl rounded-2xl p-3 bg-[#2779f3] text-white shadow-md hover:bg-[#508eec] disabled:bg-[#b6c0cf]"
      disabled={isNavDisabled}
    >
      {nextText}&gt;
    </button>
  );
};
