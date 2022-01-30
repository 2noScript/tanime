import "./anime.scss";
import { memo } from "react";
import { Link } from "react-router-dom";
function Anime(props) {
  const _animeList = props.animeList;
  return (
    <div className="anime">
      <h1 className="anime__title">anime</h1>
      <div className="anime__content">
        {_animeList.map((anime) => (
          <Link to={`anime/${anime.id}`} key={anime.id}>
            <div className="anime__content-it" key={anime.id}>
              <img
                src={anime.cover_image}
                alt=""
                className="anime__content-img"
              />
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
  );
}
export default memo(Anime);
