import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import GameDetail from '../components/GameDetail';
//REDUX
import { loadGames } from '../actions/gamesActions';
import { useDispatch, useSelector } from "react-redux";
//Components
import Game from '../components/Game';
//style components and framer motion
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn, popup } from '../animation';

const Home = () => {
    //current location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    //FETCH Games
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch])

    //Getting data - useSelector has access of the state
    const { popular, newGames, upcoming, searched } = useSelector(state => state.games);

    return (
        <GameList variants={fadeIn} initial="hidden" animate="show">
            <AnimatePresence>
                {
                    pathId && <GameDetail pathId={pathId} />
                }
            </AnimatePresence>
            {searched.length ? (
                <div className='searched'>
                    <h2>Searched Games</h2>
                    <Games>
                        {
                            searched?.map((game, index) =>
                                <Game key={index} id={game.id} name={game.name} released={game.released} image={game.background_image}></Game>
                            )
                        }
                    </Games>
                </div>
            ) : ""}
            <h2>Upcoming Games</h2>
            <Games>
                {
                    upcoming.map((game, index) =>
                        <Game key={index} id={game.id} name={game.name} released={game.released} image={game.background_image}></Game>
                    )
                }
            </Games>
            <h2>Popular Games</h2>
            <Games>
                {
                    popular.map((game, index) =>
                        <Game key={index} id={game.id} name={game.name} released={game.released} image={game.background_image}></Game>
                    )
                }
            </Games>
            <h2>New Games</h2>
            <Games>
                {
                    newGames.map((game, index) =>
                        <Game key={index} id={game.id} name={game.name} released={game.released} image={game.background_image}></Game>
                    )
                }
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
padding: 0rem 5rem;
h2{
    padding: 5rem 0rem;
}
`

const Games = styled(motion.div)`
min-height: 80vh;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
grid-column-gap: 3rem;
grid-row-gap: 5rem;
`

export default Home;