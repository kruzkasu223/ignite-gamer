const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
    isLoading: true,
};

export default function gamesReducer(state = initState, action) {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                newGames: action.payload.newGames,
                upcoming: action.payload.upcoming,
                isLoading: false,
            };
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched,
                isLoading: false,
            };
        case "LOADING_GAME":
            return {
                ...state,
                isLoading: true,
            };
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searched: [],
            };
        default:
            return { ...state };
    }
}
