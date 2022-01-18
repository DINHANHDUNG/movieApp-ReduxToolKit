import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/movieApiKey";

export const fecthAsyncMovies: any = createAsyncThunk(
  "movies/fecthAsyncMovies",
  async () => {
    const movieText = "Harry";
    const response: any = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=movie`
    );
    return response.data;
  }
);

export const fecthAsyncShow: any = createAsyncThunk(
  "movies/fecthAsyncShow",
  async () => {
    const movieText = "Conan";
    const response: any = await movieApi.get(
      `?apiKey=${APIKey}&s=${movieText}&type=series`
    );
    return response.data;
  }
);

export const fecthAsyncShowDetail: any = createAsyncThunk(
  "movies/fecthAsyncShowDetail",
  async (id) => {
    console.log(id);

    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    console.log(response);

    return response.data;
  }
);

export interface Movie {
  movies: {
    Response: string;
    Search: Array<any>;
    totalResults: string;
  };
  show: {
    Response: string;
    Search: Array<any>;
    totalResults: string;
  };
  detail: {
    Actors: string;
    Awards: string;
    BoxOffice: string;
    Country: string;
    DVD: string;
    Director: string;
    Genre: string;
    Language: string;
    Metascore: string;
    Plot: string;
    Poster: string;
    Production: string;
    Rated: string;
    Ratings: Array<any>;
    Released: string;
    Response: string;
    Runtime: string;
    Title: string;
    Type: string;
    Website: string;
    Writer: string;
    Year: string;
    imdbID: string;
    imdbRating: string;
    imdbVotes: string;
  };
  // status: string;
}

const initialState: Movie = {
  movies: {
    Response: "false",
    Search: [],
    totalResults: "0",
  },
  show: {
    Response: "false",
    Search: [],
    totalResults: "0",
  },
  detail: {
    Actors: "",
    Awards: "",
    BoxOffice: "",
    Country: "",
    DVD: "",
    Director: "",
    Genre: "",
    Language: "",
    Metascore: "",
    Plot: "",
    Poster: "",
    Production: "",
    Rated: "",
    Ratings: [],
    Released: "",
    Response: "",
    Runtime: "",
    Title: "",
    Type: "",
    Website: "",
    Writer: "",
    Year: "",
    imdbID: "",
    imdbRating: "",
    imdbVotes: "",
  },
  // status: "idle",
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state: Movie, { payload }) => {
      state.movies = payload;
    },
    removeDetailShow: (state: Movie) => {
      state.detail = {
        Actors: "",
        Awards: "",
        BoxOffice: "",
        Country: "",
        DVD: "",
        Director: "",
        Genre: "",
        Language: "",
        Metascore: "",
        Plot: "",
        Poster: "",
        Production: "",
        Rated: "",
        Ratings: [],
        Released: "",
        Response: "",
        Runtime: "",
        Title: "",
        Type: "",
        Website: "",
        Writer: "",
        Year: "",
        imdbID: "",
        imdbRating: "",
        imdbVotes: "",
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fecthAsyncMovies.pending, (state) => {
        console.log("pending");
      })
      .addCase(fecthAsyncMovies.fulfilled, (state, action) => {
        console.log("fetch fecthAsyncMovies successfull", action);
        return { ...state, movies: action.payload };
      })
      .addCase(fecthAsyncShow.fulfilled, (state, action) => {
        console.log("fetch fecthAsyncShow successfull", action);
        return { ...state, show: action.payload };
      })
      .addCase(fecthAsyncShowDetail.fulfilled, (state, action) => {
        console.log("fetch fecthAsyncShowDetail successfull", action);
        return { ...state, detail: action.payload };
      })
      .addCase(fecthAsyncMovies.rejected, () => {
        console.log("rejected");
      });
  },
});

export const { addMovies,removeDetailShow } = movieSlice.actions;
export const getAllMovies = (state: RootState) => state.movies.movies;
export const getAllShow = (state: RootState) => state.movies.show;
export const getAllShowDetail = (state: RootState) => state.movies.detail;
export default movieSlice.reducer;
