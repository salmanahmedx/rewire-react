import axios from 'axios';
import { gameDetailsUrl, gameScreenshotUrl } from '../api';

export const loadDetail = (id) => async (dispatch) => {
    const detailData = await axios.get(gameDetailsUrl(id))
    const screenshotData = await axios.get(gameScreenshotUrl(id))


    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenshotData.data,
        }
    })
}

//REDUX-THUNK allows us to asynchronously fetch data. REDUX doesn't allow asynchronous fetching. While using thunk, we use double arrow function