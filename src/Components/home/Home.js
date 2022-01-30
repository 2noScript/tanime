import Slide from "../slider/Slide";
import Anime from "../anime/Anime";
import { memo, useState, useEffect } from "react";
import { ANIME_ID } from "../base/api";
function Home() {
  const [sile, setSlide] = useState();
  useEffect(() => {
    fetch(`${ANIME_ID}`)
      .then((response) => response.json())
      .then((x) => setSlide(x.data.documents));
  }, []);
  if (sile != null) {
    return (
      <>
        <Slide animeSlide={sile} />
        <Anime default={sile} />
      </>
    );
  } else {
    return <div>loading...</div>;
  }
}
export default memo(Home);
