import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

import { loadGames } from "../actions/gamesAction";
import { fadeIn } from "../utils/animation";
import logo from "../../images/logo.svg";
import "../../styles/Home.scss";
import "../../styles/PreLoader.scss";

export default function Home({ upcomingRef, popularRef, newgamesRef }) {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const { popular, newGames, upcoming, searched, isLoading } = useSelector(
        (state) => state.games
    );

    !pathId && (document.body.style.overflow = "auto");
    pathId && (document.body.style.overflow = "hidden");

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
                    <div className="games">
                        {searched.map((game) => (
                            <Game
                                key={game.id}
                                id={game.id}
                                name={game.name}
                                released={game.released}
                                image={game.background_image}
                            />
                        ))}
                    </div>
                </motion.div>
            ) : (
                ""
            )}

            <h2 ref={upcomingRef}>Upcoming Games</h2>
            <div className="games">
                {upcoming.map((game) => (
                    <Game
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                    />
                ))}
            </div>

            <h2 ref={popularRef}>Popular Games</h2>
            <div className="games">
                {popular.map((game) => (
                    <Game
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                    />
                ))}
            </div>

            <h2 ref={newgamesRef}>New Games</h2>
            <div className="games">
                {newGames.map((game) => (
                    <Game
                        key={game.id}
                        id={game.id}
                        name={game.name}
                        released={game.released}
                        image={game.background_image}
                    />
                ))}
            </div>
        </motion.div>
    );
}
