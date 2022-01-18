import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fecthAsyncMovies,
  fecthAsyncShow,
} from "../../features/movieReducer/movieSlice";
import ListMovie from "../movie/list/ListMovie";
import "./home.css";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthAsyncMovies()).then((response: any) => {
      console.log('response then', response);
    });
    dispatch(fecthAsyncShow());
  }, [dispatch]);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   const movieText = "Harry";
  //   const fetchMovies = async () => {
  //     const reponse: any = await movieApi
  //       .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
  //       .catch((err) => {
  //         console.log("err", err);
  //       });
  //     console.log("reponse Api", reponse);
  //     dispatch(addMovies(reponse?.data));
  //   };
  //   fetchMovies();
  // }, []);
  return (
    <div className="container">
      <ListMovie
      // key={Math.random()}
      />
    </div>
  );
}

export default Home;
