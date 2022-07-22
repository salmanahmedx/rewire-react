import axios from "axios";
import { popularGamesUrl } from "../api";

//ACTION CREATOR

// two arrow function when we are using thunk. 2nd one gets dispatch as parameter

export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGamesUrl());
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results
        }
    })

}