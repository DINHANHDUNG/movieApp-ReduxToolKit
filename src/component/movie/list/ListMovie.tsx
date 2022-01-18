import React from "react";
import { useSelector } from "react-redux";
import {
  getAllMovies,
  getAllShow,
} from "../../../features/movieReducer/movieSlice";
import CardMovie from "../cardMovie/CardMovie";
import "./listmovie.css";
function ListMovie() {
  const movies = useSelector(getAllMovies);
  const show = useSelector(getAllShow);
  console.log(movies);

  const showCar =
    movies.Response === "True"
      ? movies.Search.map((item, idx) => {
          return (
            <div className="list-card" key={idx}>
              <CardMovie data={item} />
            </div>
          );
        })
      : "Error";

  const showCar2 =
    show.Response === "True"
      ? show.Search.map((item, idx) => {
          return (
            <div className="list-card" key={idx}>
              <CardMovie data={item} />
            </div>
          );
        })
      : "Error";
  return (
    <div className="movie-wrapper">
      <div className="movielist">
        <h2> Movies </h2>
        <div className="movie-container">{showCar}</div>
        <h2> Shows </h2>
        <div className="movie-container">{showCar2}</div>
      </div>
    </div>
  );
}

export default ListMovie;
