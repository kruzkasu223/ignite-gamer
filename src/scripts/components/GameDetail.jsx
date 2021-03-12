import React from "react";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import "../../styles/GameDetail.scss";

export default function GameDetail() {
    const { game, screen, isLoading } = useSelector((state) => state.detail);

    return (
        <>
            {!isLoading && (
                <motion.div className="GameDetail">
                    <motion.div className="detail">
                        <motion.div className="stats">
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <div className="info">
                                <h3>Platforms</h3>
                                <motion.div className="platforms">
                                    {game.platforms.map((data) => (
                                        <h3 key={data.platform.id}>
                                            {data.platform.name}
                                        </h3>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>
                        <motion.div className="media">
                            <img src={game.background_image} alt={game.name} />
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
                                    src={screen.image}
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
