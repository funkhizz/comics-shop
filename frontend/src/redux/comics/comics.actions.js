import ComicsActionTypes from './comics.types'
import axios from 'axios'

export const fetchComicsStart = () => ({
    type: ComicsActionTypes.FETCH_COMICS_START
})

export const fetchComicsSuccess = (comics) => ({
    type: ComicsActionTypes.FETCH_COMICS_SUCCESS,
    payload: comics
})

export const fetchComicsFailure = errorMessage => ({
    type: ComicsActionTypes.FETCH_COMICS_FAILURE,
    payload: errorMessage
})

export const fetchComicsStartAsync = () => {
    return dispatch => {
            dispatch(fetchComicsStart())
            fetch('https://comics-djreact.herokuapp.com/comics/api/comics/')
            .then(results => {return results.json()})
            .then(
                data => dispatch(fetchComicsSuccess(data))
            )
            .catch(
                error => dispatch(fetchComicsFailure(error.message))
            )
    }
}