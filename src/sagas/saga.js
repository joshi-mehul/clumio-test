import { delay } from "redux-saga/effects";
import { takeLatest, put, call } from "redux-saga/effects";
import axios from 'axios';
import { discoverSuccess, discoverFails, genreSuccess, gereFails } from '../store/reducer'
import CONSTANTS from '../Constants'

async function discoverMovie() {
  const response = await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
  return response.data;
}

function* workerDiscoverMovie({filters}) {
  try {
    const movies = yield call(discoverMovie.bind(filters));
    yield put(discoverSuccess(movies));
  } catch (error) {
    yield put(discoverFails(error));
  }
}


export function* watchDiscoverMovies() {
  yield takeLatest(CONSTANTS.DISCOVER_MOVIE, workerDiscoverMovie);
}

async function discoverGenre() {
  const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=3a94078fb34b772a31d9a1348035bed7&language=en-US');
  return response.data;
}

function* workerDiscoverGenre() {
  try {
    const genre = yield call(discoverGenre);
    yield put(genreSuccess(genre));
  } catch (error) {
    yield put(gereFails(error));
  }
}


export function* watchDiscoverGenre() {
  yield takeLatest(CONSTANTS.LOAD_MOVIE_GENER, workerDiscoverGenre);
}
