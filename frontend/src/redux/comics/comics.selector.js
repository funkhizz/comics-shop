import {createSelector} from 'reselect'

const selectComics = state => state.comics

export const selectAllComics = createSelector(
    [selectComics],
    (comics) => (comics ? comics.comics : [])
)

export const selectComicsIsFetching = createSelector(
    [selectComics],
    (comics) => comics.isFetching
)

export const selectIsComicsLoaded = createSelector(
    [selectComics],
    comics => !!comics.comics
)