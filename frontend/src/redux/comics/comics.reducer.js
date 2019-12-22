const INITIAL_STATE = {
    comics: null
}

const comicsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_COMICS':
            return {
                ...state,
                comics: action.payload
            }
        default:
            return state
    }
}

export default comicsReducer