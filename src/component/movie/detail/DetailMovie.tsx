import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fecthAsyncShowDetail,
  getAllShowDetail,
  removeDetailShow,
} from "../../../features/movieReducer/movieSlice";
import "./detailmovie.css";
function DetailMovie() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const fullInfoDetail = useSelector(getAllShowDetail);
  console.log("fullInfoDetail", fullInfoDetail);

  useEffect(() => {
    console.log(imdbID);

    dispatch(fecthAsyncShowDetail(imdbID));
    return () => {
      dispatch(removeDetailShow());
    };
  }, [dispatch, imdbID]);
  return (
    <div>
      {fullInfoDetail.imdbID ? (
        <div className="container-detail">
          <div className="left-detail">
            <h2>{fullInfoDetail.Title}</h2>
            <div className="detail-rateting">
              <div className="start">Rating: {fullInfoDetail.imdbRating}</div>
              <div className="like">Votes: {fullInfoDetail.imdbVotes}</div>
              <div className="time">RunTime: {fullInfoDetail.Runtime}</div>
              <div className="year">Year: {fullInfoDetail.Year}</div>
            </div>
            <div className="detail-plot">{fullInfoDetail.Plot}</div>
            <div className="detail-info">
              <div className="detail-info-content">
                <span>Director: </span>
                <span>{fullInfoDetail.Director}</span>
              </div>
              <div className="detail-info-content">
                <span>Actors: </span>
                <span>{fullInfoDetail.Actors}</span>
              </div>
              <div className="detail-info-content">
                <span>Awards: </span>
                <span>{fullInfoDetail.Awards}</span>
              </div>
              <div className="detail-info-content">
                <span>Language: </span>
                <span>{fullInfoDetail.Language}</span>
              </div>
            </div>
          </div>
          <div className="right-detail">
            <img src={fullInfoDetail.Poster} alt={fullInfoDetail.Title} />
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default DetailMovie;
