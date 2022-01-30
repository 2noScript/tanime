import react from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Autoplay,
  Pagination,
  EffectCoverflow,
} from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "./slide.scss";
function Slide(props) {
  const _animeSlide = props.animeSlide;
  SwiperCore.use([Navigation, Autoplay, Pagination, EffectCoverflow]);

  return (
    <Swiper
      className="ani__slider"
      navigation
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect="coverflow"
    >
      {_animeSlide.map((anime) => (
        <SwiperSlide className="ani__slide" key={anime.id}>
          <Link to={`anime/${anime.id}`} key={anime.id}>
            {/* <img src={anime.banner_image} alt="" className="slider-item-bg" /> */}
            <div
              className="slider-item-bg"
              style={{ backgroundImage: `url(${anime.banner_image}) ` }}
            ></div>
            <h1 className="slider-item-name">{anime.titles.en}</h1>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default react.memo(Slide);
