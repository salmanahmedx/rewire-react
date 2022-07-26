//Base URL
const base_url = 'https://api.rawg.io/api/'

//getting the date
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`
    } else {
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//popular games
const popularGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesUrl = () => `${base_url}${popularGames}`;
export const upcomingGamesUrl = () => `${base_url}${upcomingGames}`;
export const newGamesUrl = () => `${base_url}${newGames}`;

//game details
export const gameDetailsUrl = (id) => `${base_url}games/${id}?key=${process.env.REACT_APP_API_KEY}`

//screenshot URL
export const gameScreenshotUrl = (id) => `${base_url}games/${id}/screenshots?key=${process.env.REACT_APP_API_KEY}`

//searched game
export const searchGameURL = (game_name) => `${base_url}games?key=${process.env.REACT_APP_API_KEY}&search=${game_name}&page_size=9`