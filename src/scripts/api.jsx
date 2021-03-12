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

const popular_games = `dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const new_games = `dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;
const upcoming_games = `dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

export const popularGamesURL = () =>
    `${base_url}games?key=${process.env.REACT_RAWG_API_KEY}&${popular_games}`;
export const newGamesURL = () =>
    `${base_url}games?key=${process.env.REACT_RAWG_API_KEY}&${new_games}`;
export const upcomingGamesURL = () =>
    `${base_url}games?key=${process.env.REACT_RAWG_API_KEY}&${upcoming_games}`;

export const gameDetailsURL = (game_id) =>
    `${base_url}games/${game_id}?key=${process.env.REACT_RAWG_API_KEY}`;

export const gameScreenshotURL = (game_id) =>
    `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_RAWG_API_KEY}`;
