import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Link, Route, Routes } from "react-router-dom";
import "./detail.scss";
import { EPISODE_ANI_ID, ANIME_ID } from "../base/api";
function Detail() {
  const [episode, setEpisode] = useState();
  const [number, setNumber] = useState();
  const [currentEpisode, setCurrentEpisode] = useState();
  const [anime, setAnime] = useState();
  const { id } = useParams();

  // get anime
  useEffect(() => {
    fetch(`${ANIME_ID}${id}`)
      .then((res) => res.json())
      .then((x) => {
        setAnime(x);
      });
  }, []);
  //get episode
  useEffect(() => {
    fetch(`${EPISODE_ANI_ID}${id}`)
      .then((res) => res.json())
      .then((x) => {
        setEpisode(x);
      });
  }, []);
  //get current episode
  useEffect(() => {
    if (episode != null) {
      episode.data.documents.map((item) => {
        if (item.number == number) {
          setCurrentEpisode(item);
          console.log(item);
        }
      });
    }
  }, [number]);
  if (anime != null && episode != null) {
    // console.log(anime);
    console.log(episode);
    return (
      <div className="detail">
        {currentEpisode != null ? (
          <video
            src={currentEpisode.video}
            className="detail__video"
            controls
          ></video>
        ) : (
          <div
            className="detail__img"
            style={{ backgroundImage: `url(${anime.data.banner_image}) ` }}
          ></div>
          // <img className="detail__img" src={anime.data.banner_image} alt="" />
        )}

        <h2
          style={{ color: `${anime.data.cover_color}` }}
          className="detail__name"
        >
          {anime.data.titles.en}
        </h2>
        <h2 className="detail__end">END:{anime.data.end_date}</h2>
        <ul className="detail__genres">
          {anime.data.genres.map((item) => (
            <li className="genres__item" key={item}>
              {item}
            </li>
          ))}
        </ul>
        {(episode.status_code === 200 && (
          <div className="detail__episodes">
            <h2 className="episodes__title">Episodes</h2>
            <div className="episodes__container">
              {episode.data.documents.map((item, index) => (
                <span
                  className="episodes__number"
                  key={index}
                  onClick={function () {
                    setNumber(`${index + 1}`);
                  }}
                >
                  {index + 1}
                </span>
              ))}
            </div>
          </div>
        )) || <div> 404</div>}
      </div>
    );
  } else return <div>404</div>;
}
export default Detail;
