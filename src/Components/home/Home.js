import Slide from "../slider/Slide";
import Anime from "../anime/Anime";
import { memo } from "react";
function Home(props) {
  return (
    <>
      <Slide animeSlide={props.animeSlide} />
      <Anime animeList={props.animeList} />
    </>
  );
}
export default memo(Home);
