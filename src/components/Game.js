import React from 'react';
//style components and framer motion
import styled from 'styled-components';
import { motion } from 'framer-motion';
//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from '../actions/detailAction';
import { Link } from "react-router-dom"
import { popup } from '../animation';

const Game = ({ name, released, image, id }) => {
    const stringPathId = id.toString()
    //Load Details
    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id))
    }

    return (
        <StyledGame variants={popup} initial="hidden" animate="show" layoutId={stringPathId} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${stringPathId}`} src={image} alt={name} />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.1);
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img{
        display: block;
        width: 100%;
        object-fit: cover;
    }
`

export default Game;