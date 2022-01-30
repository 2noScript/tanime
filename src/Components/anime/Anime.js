import "./anime.scss";
import { memo, useState, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { PAGES_ANI } from "../base/api";
function Anime(props) {
  const { p } = useParams();
  const [animeList, setAnimeList] = useState();
  useEffect(() => {
    fetch(`${PAGES_ANI}${p}`)
      .then((response) => response.json())
      .then((x) => setAnimeList(x.data.documents));
  }, [p]);
  if (props.default != null) {
    return (
      <>
        <div className="anime">
          <h1 className="anime__title">anime</h1>
          <div className="anime__content">
            {props.default.map((anime) => (
              <Link to={`anime/${anime.id}`} key={anime.id}>
                <div className="anime__content-it" key={anime.id}>
                  <div
                    style={{ backgroundImage: `url(${anime.cover_image}) ` }}
                    className="anime__content-img"
                  ></div>
                  <h3
                    className="anime__content-name"
                    style={{ color: `${anime.cover_color}` }}
                  >
                    {anime.titles.en}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  } else {
    if (animeList != null) {
      console.log(animeList);
      return (
        <>
          <div className="anime">
            <h1 className="anime__title">anime</h1>
            <div className="anime__content">
              {animeList.map((anime) => (
                <Link to={`anime/${anime.id}`} key={anime.id}>
                  <div className="anime__content-it" key={anime.id}>
                    <div
                      style={{ backgroundImage: `url(${anime.cover_image}) ` }}
                      className="anime__content-img"
                    ></div>
                    <h3
                      className="anime__content-name"
                      style={{ color: `${anime.cover_color}` }}
                    >
                      {anime.titles.en}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </>
      );
    } else return <div>loading ....</div>;
  }
}
export default memo(Anime);
