import axios from "axios";
import {
    popularGamesURL,
    newGamesURL,
    upcomingGamesURL,
    searchGameURL,
} from "../utils/api";

export const loadGames = () => async (dispatch) => {
    dispatch({
        type: "LOADING_GAME",
    });

    const popularGamesData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularGamesData.data.results,
            newGames: newGamesData.data.results,
            upcoming: upcomingGamesData.data.results,
            popularNext: popularGamesData.data.next,
            newGamesNext: newGamesData.data.next,
            upcomingNext: upcomingGamesData.data.next,
        },
    });
};

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGame = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchGame.data.results,
            searchedNext: searchGame.data.next,
        },
    });
};

export const loadMorePopular = () => async (dispatch) => {
    dispatch({
        type: "LOADING_GAME",
    });

    const popularGamesData = await axios.get(popularGamesURL());

    dispatch({
        type: "FETCH_MORE_POPULAR",
        payload: {
            morePopular: popularGamesData.data.results,
            popularNext: popularGamesData.data.next,
        },
    });
};

export const loadMoreNewGames = () => async (dispatch) => {
    dispatch({
        type: "LOADING_GAME",
    });

    const newGamesData = await axios.get(newGamesURL());

    dispatch({
        type: "FETCH_MORE_NEW_GAMES",
        payload: {
            moreNewGames: newGamesData.data.results,
            newGamesNext: newGamesData.data.next,
        },
    });
};

export const loadMoreUpcoming = () => async (dispatch) => {
    dispatch({
        type: "LOADING_GAME",
    });

    const upcomingGamesData = await axios.get(upcomingGamesURL());

    dispatch({
        type: "FETCH_MORE_UPCOMING",
        payload: {
            moreUpcoming: upcomingGamesData.data.results,
            upcomingNext: upcomingGamesData.data.next,
        },
    });
};

export const loadMoreSearched = (game_name) => async (dispatch) => {
    dispatch({
        type: "LOADING_GAME",
    });

    const searchGame = await axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_MORE_SEARCHED",
        payload: {
            moreSearched: searchGame.data.results,
            searchedNext: searchGame.data.next,
        },
    });
};
