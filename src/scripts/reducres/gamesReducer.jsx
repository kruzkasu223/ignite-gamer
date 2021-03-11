const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
};

export default function gamesReducer(state = initState, action) {
    switch (action.type) {
        case "FETCH_GAMES":
            return { ...state };
        default:
            return { ...state };
    }
}
