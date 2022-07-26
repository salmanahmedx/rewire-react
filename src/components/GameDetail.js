// React
import React from "react";
// Styled Components
import styled from "styled-components";
// Framer Motion
import { motion } from "framer-motion";
// Redux
import { useSelector } from "react-redux";
// Router
import { useNavigate } from "react-router-dom";
// images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ pathId }) => {
    const navigate = useNavigate();
    const { screen, game, isLoading } = useSelector((state) => state.detail);

    const exitDetailHandler = (e) => {
        const element = e.target;

        if (element.classList.contains("shadow")) {
            document.body.style.overflow = "auto";
            navigate("/");
        }
    };

    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;

            case "PlayStation 5":
                return playstation;

            case "Xbox Series S/X":
                return xbox;

            case "Xbox One":
                return xbox;

            case "PC":
                return steam;

            case "Nintendo Switch":
                return nintendo;

            default:
                return gamepad;
        }
    };

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFull} />);
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty} />);
            }
        }

        return stars;
    };

    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={pathId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
                                {game.rating === 0 ? <p>Not rated</p> : getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map((data) => (
                                        <img
                                            key={data.platform.id}
                                            src={getPlatform(data.platform.name)}
                                            alt={data.platform.name}
                                        />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img
                                layoutId={`image ${pathId}`}
                                src={game.background_image}
                                alt={game.name}
                            />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map((screen) => (
                                <img
                                    key={screen.id}
                                    src={screen.image}
                                    alt={screen.id}
                                />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
    );
};

const CardShadow = styled(motion.div)`
  padding: 3rem 0;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  background-color: #fff;
  position: absolute;
  left: 10%;
  color: #000;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;

const Info = styled(motion.div)`
  text-align: center;
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
  h3 {
    margin: 0 1rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;

