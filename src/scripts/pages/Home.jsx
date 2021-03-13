import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import { fadeIn } from "../utils/animation";
import GameDetail from "../components/GameDetail";
import Game from "../components/Game";
import "../../styles/Home.scss";
import "../../styles/PreLoader.scss";
import logo from "../../images/logo.svg";

export default function Home() {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const { popular, newGames, upcoming, searched, isLoading } = useSelector(
        (state) => state.games
    );

    return (
        <motion.div
            className="Home"
            variants={fadeIn}
            initial="hidden"
            animate="show"
        >
            {isLoading && (
                <div className="loader_wrap">
                    <div className="PreLoader">
                        <img
                            className="logo"
                            src={logo}
                            alt="Pre Loader Logo"
                        />
                    </div>
                </div>
            )}
            {pathId && <GameDetail />}

            {searched.length ? (
                <motion.div variants={fadeIn} className="searched">
                    <h2>Searched Games</h2>
                    <motion.div className="games">
                        {searched.map((game) => (
                            <Game
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                released={game.released}
                                image={game.background_image}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            ) : (
                ""
            )}

            <h2>Upcoming Games</h2>
            <motion.div className="games">
                {upcoming.map((game) => (
                    <Game
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                    />
                ))}
            </motion.div>

            <h2>Popular Games</h2>
            <motion.div className="games">
                {popular.map((game) => (
                    <Game
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                    />
                ))}
            </motion.div>

            <h2>New Games</h2>
            <motion.div className="games">
                {newGames.map((game) => (
                    <Game
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                    />
                ))}
            </motion.div>
        </motion.div>
    );
}
