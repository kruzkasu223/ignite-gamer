const initState = {
    popular: [],
    newGames: [],
    upcoming: [],
    searched: [],
    popularNext: [],
    newGamesNext: [],
    upcomingNext: [],
    searchedNext: [],
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
                popularNext: action.payload.popularNext,
                newGamesNext: action.payload.newGamesNext,
                upcomingNext: action.payload.upcomingNext,
                isLoading: false,
            };
        case "FETCH_SEARCHED":
            return {
                ...state,
                searched: action.payload.searched,
                searchedNext: action.payload.searchedNext,
                isLoading: false,
            };

        case "FETCH_MORE_POPULAR":
            let { popular } = state;
            popular = [...popular, ...action.payload.morePopular];

            return {
                ...state,
                popular: popular,
                popularNext: action.payload.popularNext,

                isLoading: false,
            };

        case "FETCH_MORE_NEW_GAMES":
            let { newGames } = state;
            newGames = [...newGames, ...action.payload.moreNewGames];

            return {
                ...state,
                newGames: newGames,
                newGamesNext: action.payload.newGamesNext,

                isLoading: false,
            };

        case "FETCH_MORE_UPCOMING":
            let { upcoming } = state;
            upcoming = [...upcoming, ...action.payload.moreUpcoming];

            return {
                ...state,
                upcoming: upcoming,
                upcomingNext: action.payload.upcomingNext,

                isLoading: false,
            };

        case "FETCH_MORE_SEARCHED":
            let { searched } = state;
            searched = [...searched, ...action.payload.moreSearched];

            return {
                ...state,
                searched: searched,
                searchedNext: action.payload.searchedNext,

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
                searchedNext: [],
            };
        case "CLEAR_ALL":
            return {
                ...state,
                popular: [],
                newGames: [],
                upcoming: [],
                popularNext: [],
                newGamesNext: [],
                upcomingNext: [],
            };
        default:
            return { ...state };
    }
}
