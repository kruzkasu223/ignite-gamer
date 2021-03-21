import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

import {
    loadGames,
    loadMorePopular,
    loadMoreNewGames,
    loadMoreUpcoming,
    loadMoreSearched,
} from "../actions/gamesAction";
import { fadeIn } from "../utils/animation";
import "../../styles/Home.scss";
import "../../styles/PreLoader.scss";

export default function Home({ upcomingRef, popularRef, newgamesRef }) {
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    const {
        popular,
        newGames,
        upcoming,
        searched,
        popularNext,
        newGamesNext,
        upcomingNext,
        searchedNext,
    } = useSelector((state) => state.games);

    !pathId && (document.body.style.overflow = "auto");
    pathId && (document.body.style.overflow = "hidden");

    return (
        <motion.div
            className="Home"
            variants={fadeIn}
            initial="hidden"
            animate="show"
        >
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
                    {searchedNext ? (
                        <div className="load_btn_wrapper">
                            <button
                                onClick={() => {
                                    dispatch(loadMoreSearched());
                                }}
                            >
                                Load More
                            </button>
                        </div>
                    ) : (
                        ""
                    )}
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
            {upcomingNext ? (
                <div className="load_btn_wrapper">
                    <button
                        onClick={() => {
                            dispatch(loadMoreUpcoming());
                        }}
                    >
                        Load More
                    </button>
                </div>
            ) : (
                ""
            )}

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
            {popularNext ? (
                <div className="load_btn_wrapper">
                    <button
                        onClick={() => {
                            dispatch(loadMorePopular());
                        }}
                    >
                        Load More
                    </button>
                </div>
            ) : (
                ""
            )}

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
            {newGamesNext ? (
                <div className="load_btn_wrapper">
                    <button
                        onClick={() => {
                            dispatch(loadMoreNewGames());
                        }}
                    >
                        Load More
                    </button>
                </div>
            ) : (
                ""
            )}
        </motion.div>
    );
}
