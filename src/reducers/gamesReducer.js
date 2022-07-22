
const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: []
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state, popular: action.payload.popular }
        default:
            return { ...state }
    }
}

//ACTION
const fetchGames = () => {
    return {
        type: "FETCH_GAMES"
    }
}

export default gameReducer;