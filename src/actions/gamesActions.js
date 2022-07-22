import axios from "axios";
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from "../api";

//ACTION CREATOR

// two arrow function when we are using thunk. 2nd one gets dispatch as parameter

export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGamesUrl());
    const newGamesData = await axios.get(newGamesUrl());
    const upcomingData = await axios.get(upcomingGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results,
        }
    })

}


//REDUX-THUNK allows us to asynchronously fetch data. REDUX doesn't allow asynchronous fetching.