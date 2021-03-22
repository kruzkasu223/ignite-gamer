import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { loadGames } from "../actions/gamesAction";
import { fetchSearch } from "../actions/gamesAction";
import { fadeIn } from "../utils/animation";
import logo from "../../images/logo.svg";
import "../../styles/Nav.scss";

export default function Nav({ upcomingRef, popularRef, newgamesRef }) {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch({ type: "LOADING_GAME" });
        dispatch({ type: "CLEAR_SEARCHED" });
        dispatch(fetchSearch(textInput));
        setTextInput("");
    };

    const clearSearched = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
        dispatch({ type: "CLEAR_ALL" });
        dispatch(loadGames());
    };

    const upcomingHandler = () => {
        upcomingRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const popularHandler = () => {
        popularRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const newgamesHandler = () => {
        newgamesRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.nav
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="Nav"
        >
            <div className="logo_wrapper">
                <div onClick={clearSearched} className="logo">
                    <img src={logo} alt="Ignite Logo" />
                    <h1>Ignite Gamer</h1>
                </div>
            </div>
            <form onSubmit={submitSearch} className="search">
                <input
                    value={textInput}
                    onChange={inputHandler}
                    type="text"
                    name="search"
                />
                <button type="submit">Search</button>
            </form>
            <div className="section_nav">
                <a onClick={popularHandler}>Popular Games</a>
                <a onClick={upcomingHandler}>Upcoming Games</a>
                <a onClick={newgamesHandler}>New Games</a>
            </div>
        </motion.nav>
    );
}
