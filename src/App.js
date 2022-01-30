import "swiper/css";
import "swiper/css/bundle";
import "./app.scss";
import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
// import components
import Header from "./Components/header/Header";

import Home from "./Components/home/Home";
import Detail from "./Components/detail/Detail";

import { ANIME_ID } from "./Components/base/api";

function App() {
  const [animeList, setAnimeList] = useState();

  //get amine
  useEffect(() => {
    fetch(ANIME_ID)
      .then((res) => res.json())
      .then((x) => setAnimeList(x.data.documents));
  }, []);

  if (animeList != null) {
    // get anime slide show 1->15
    const animeSlide = [];
    animeList.forEach(function (item, index) {
      if (index < 15) {
        animeSlide.push(item);
      } else return;
    });

    return (
      <div className="app">
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={<Home animeSlide={animeSlide} animeList={animeList} />}
            />
            <Route path="anime/:id" element={<Detail />} />
          </Routes>
        </div>
      </div>
    );
  } else
    return (
      <div className="app">
        <Header />
        <div className="container">loader</div>
      </div>
    );
}

export default App;
