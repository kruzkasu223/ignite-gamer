const base_url = `https://api.rawg.io/api/games?key=${process.env.REACT_RAWG_API_KEY}&`;

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

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
