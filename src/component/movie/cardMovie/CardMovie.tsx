import React from "react";
import { Link } from "react-router-dom";
import "./cardmovies.css";

const CardMovie = (props: any) => {
  const { data } = props;

  console.log("data", data);

  return (
    <Link to={`movie/${data.imdbID}`} style={{ textDecoration: "none" }}>
      <div className="card-item">
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
