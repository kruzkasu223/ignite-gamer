import { store } from "../index";

const base_url = `https://api.rawg.io/api/`;

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    return month < 10 ? `0${month}` : month;
};

const getCurrentDay = () => {
    const day = new Date().getDate();
    return day < 10 ? `0${day}` : day;
};

const currYear = new Date().getFullYear();
const currMonth = getCurrentMonth();
const currDay = getCurrentDay();
const currentDate = `${currYear}-${currMonth}-${currDay}`;
const lastYear = `${currYear - 1}-${currMonth}-${currDay}`;
const nextYear = `${currYear + 1}-${currMonth}-${currDay}`;

const popular_games = `page_size=10`;
const new_games = `dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
const upcoming_games = `dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

export const popularGamesURL = () => {
    return typeof store.getState().games.popularNext === "string"
        ? store.getState().games.popularNext
        : `${base_url}games?key=${process.env.REACT_RAWG_API_KEY}&${popular_games}`;
};

export const newGamesURL = () => {
    return typeof store.getState().games.newGamesNext === "string"
        ? store.getState().games.newGamesNext
        : `${base_url}games?key=${process.env.REACT_RAWG_API_KEY}&${new_games}`;
};
export const upcomingGamesURL = () => {
    return typeof store.getState().games.upcomingNext === "string"
        ? store.getState().games.upcomingNext
        : `${base_url}games?key=${process.env.REACT_RAWG_API_KEY}&${upcoming_games}`;
};

export const gameDetailsURL = (game_id) =>
    `${base_url}games/${game_id}?key=${process.env.REACT_RAWG_API_KEY}`;

export const gameScreenshotURL = (game_id) =>
    `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_RAWG_API_KEY}`;

export const searchGameURL = (game_name) => {
    return typeof store.getState().games.searchedNext === "string"
        ? store.getState().games.searchedNext
        : `${base_url}games?key=${process.env.REACT_RAWG_API_KEY}&search=${game_name}&page_size=10`;
};
