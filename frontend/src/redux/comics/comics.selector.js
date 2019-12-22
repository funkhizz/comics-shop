import {createSelector} from 'reselect'

const selectComics = state => state.comics

export const selectAllComics = createSelector(
    [selectComics],
    (comics) => (comics ? comics.comics : [])
)