import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { motion } from "framer-motion";

import Game from "../components/Game";
import "../../styles/Home.scss";

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const { popular, newGames, upcoming } = useSelector((state) => state.games);

    return (
        <motion.div className="home">
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
