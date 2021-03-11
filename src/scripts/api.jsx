const base_url = "https://api.rawg.io/api/";

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

const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
