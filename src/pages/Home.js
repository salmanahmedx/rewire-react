import React, { useEffect } from 'react';
//REDUX
import { loadGames } from '../actions/gamesActions';
import { useDispatch } from "react-redux";

const Home = () => {

    //FETCH Games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    })

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
};

export default Home;