import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useLocation } from "react-router-dom";

import GameDetail from "../components/GameDetail";
import Game from "../components/Game";
import "../../styles/Home.scss";

export default function Home() {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const { popular, newGames, upcoming, searched } = useSelector(
        (state) => state.games
    );

    return (
        <motion.div className="Home">
            <AnimateSharedLayout>
                <AnimatePresence>
                    {pathId && <GameDetail pathId={pathId} />}
                </AnimatePresence>

                {searched.length ? (
                    <div className="searched">
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
                    </div>
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
            </AnimateSharedLayout>
        </motion.div>
    );
}
