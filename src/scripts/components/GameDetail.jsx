import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../utils/smallImage";
import "../../styles/GameDetail.scss";

import apple from "../../images/apple.svg";
import steam from "../../images/steam.svg";
import xbox from "../../images/xbox.svg";
import gamepad from "../../images/gamepad.svg";
import nintendo from "../../images/nintendo.svg";
import playstation from "../../images/playstation.svg";
import starFull from "../../images/star-full.png";
import starEmpty from "../../images/star-empty.png";

export default function GameDetail({ pathId }) {
    const history = useHistory();
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("GameDetail")) {
            document.body.style.overflow = "auto";
            history.push("/");
        }
    };

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img key={i} src={starFull} alt="star" />);
            } else {
                stars.push(<img key={i} src={starEmpty} alt="star" />);
            }
        }

        return stars;
    };

    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    };

    const { game, screen, isLoading } = useSelector((state) => state.detail);

    return (
        <>
            {!isLoading && (
                <motion.div className="GameDetail" onClick={exitDetailHandler}>
                    <motion.div className="detail" layoutId={pathId}>
                        <motion.div className="stats">
                            <div className="rating">
                                <h3 layoutId={`title ${pathId}`}>
                                    {game.name}
                                </h3>
                                <p>Rating: {game.rating}</p>
                                {getStars()}
                            </div>
                            <div className="info">
                                <h3>Platforms</h3>
                                <div className="platforms">
                                    {game.platforms.map((data) => (
                                        <img
                                            key={data.platform.id}
                                            src={getPlatform(
                                                data.platform.name
                                            )}
                                            alt={data.platform.name}
                                        />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                        <motion.div className="media">
                            <motion.img
                                layoutId={`image ${pathId}`}
                                src={smallImage(game.background_image, "1280")}
                                alt={game.name}
                            />
                        </motion.div>
                        <motion.div
                            className="description"
                            dangerouslySetInnerHTML={{
                                __html: game.description,
                            }}
                        ></motion.div>
                        <div className="gallary">
                            {screen.results.map((screen) => (
                                <img
                                    key={screen.id}
                                    src={smallImage(screen.image, "640")}
                                    alt={game.name}
                                />
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
