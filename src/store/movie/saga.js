import {call, put, takeLatest} from
 'redux-saga/effects';
import MoviesService from '../../services/movies.service';

import { fetchMovies, setMovie } from './slice';

function* fetchMoviesHandler(action) {

    try {
        const { movies } = yield call(MoviesService.getAllMovies, action.payload)
        yield put(setMovie(movies))
    } catch(e) {
        console.log(e)
    }

    // try{
    //     if (action.payload) {
    //         const {movies} = yield call(MoviesService.getAllMovies, action.payload);
    //         yield put(setMovie(movies))
    //     } else {
    //         const {movies} = yield call(MoviesService.getAllMovies);
    //         yield put(setMovie(movies))
    //     }
       
    // } catch(e) {
    //     console.log(e);
    // }
}

export function* watchMoviesHandler() {
    yield takeLatest(fetchMovies.type, fetchMoviesHandler)
}