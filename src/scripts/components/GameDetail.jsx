import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { smallImage } from "../utils";
import "../../styles/GameDetail.scss";
import logo from "../../images/logo.svg";

export default function GameDetail({ pathId }) {
    const history = useHistory();
    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("GameDetail")) {
            document.body.style.overflow = "auto";
            history.push("/");
        }
    };

    const { game, screen, isLoading } = useSelector((state) => state.detail);

    return (
        <>
            {!isLoading && (
                <motion.div className="GameDetail" onClick={exitDetailHandler}>
                    <motion.div className="detail" layoutId={pathId}>
                        <motion.div className="stats">
                            <motion.div className="rating">
                                <motion.h3 layoutId={`title ${pathId}`}>
                                    {game.name}
                                </motion.h3>
                                <motion.p>Rating: {game.rating}</motion.p>
                            </motion.div>
                            <motion.div className="info">
                                <motion.h3>Platforms</motion.h3>
                                <motion.div className="platforms">
                                    {game.platforms.map((data) => (
                                        <motion.h3 key={data.platform.id}>
                                            {data.platform.name}
                                        </motion.h3>
                                    ))}
                                </motion.div>
                            </motion.div>
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
