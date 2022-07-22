import React from 'react';
//style components and framer motion
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Game = ({ name, released, image, }) => {
    return (
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.1);
    text-align: center;
    border-radius: 1rem;
    img{
        width: 100%;
        object-fit: cover;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
`

export default Game;