import ComicsActionTypes from './comics.types';

const INITIAL_STATE = {
    comics: null,
    isFetching: false,
    errorMessage: undefined
}

const comicsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ComicsActionTypes.FETCH_COMICS_START:
            return {
                ...state,
                isFetching: true
            }
        case ComicsActionTypes.FETCH_COMICS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                comics: action.payload
            }
        case ComicsActionTypes.FETCH_COMICS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload

            }
        default:
            return state
    }
}

export default comicsReducer