const initialState = { game: { platforms: [] }, screen: { results: [] }, isLoading: true };

//map undefined? no array to map over. adding empty array in state solved the cannot map of undefined error.

const detailReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_DETAIL":
            return {
                ...state,
                game: action.payload.game,
                screen: action.payload.screen,
                isLoading: false,
            }
        case "LOADING_DETAIL":
            return {
                ...state,
                isLoading: true,
            }
        default:
            return { ...state }
    }
}

export default detailReducer;