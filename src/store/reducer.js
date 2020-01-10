import CONSTANTS from '../Constants'
import {DISCOVER_MOVIE} from "../Constants/Constants";
const initialState = {
  movies: null,
  loading: false,
  loaded: false,
  genre: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.DISCOVER_MOVIE:
      return {
        ...state,
        ...initialState,
        loading: true
      };
    case CONSTANTS.DISCOVER_MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.movies.results,
        loaded: true,
        loading: false
      };
    case CONSTANTS.DISCOVER_MOVIE_FAILED:
      return {
        ...state,
        loading: false,
        ...action.error
      };
    case CONSTANTS.LOAD_MOVIE_GENER:
      return {
        ...state,
        ...initialState,
        loading: true
      };
    case CONSTANTS.LOAD_MOVIE_GENER_SUCCESS:
      return {
        ...state,
        genre: action.genre.results,
        loaded: true,
        loading: false
      };
    case CONSTANTS.LOAD_MOVIE_GENER_FAILED:
      return {
        ...state,
        loading: false,
        ...action.error
      };
    default:
      return state;
  }
};

export default reducer;

// https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1

// https://api.themoviedb.org/3/genre/movie/list?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US

export function discoverMovies(filters) {
  return {
    type: CONSTANTS.DISCOVER_MOVIE,
    filters
  }
}

export function discoverSuccess(movies) {
  return {
    type: CONSTANTS.DISCOVER_MOVIE_SUCCESS,
    movies
  }
}

export function discoverFails(error) {
  return {
    type: CONSTANTS.DISCOVER_MOVIE_FAILED,
    error
  }
}


export function genreMovies() {
  return {
    type: CONSTANTS.LOAD_MOVIE_GENER
  }
}

export function genreSuccess(genre) {
  return {
    type: CONSTANTS.LOAD_MOVIE_GENER_SUCCESS,
    genre
  }
}

export function gereFails(error) {
  return {
    type: CONSTANTS.LOAD_MOVIE_GENER_FAILED,
    error
  }
}
