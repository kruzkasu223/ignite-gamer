import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

import { fetchSearch } from "../actions/gamesAction";
import { fadeIn } from "../utils/animation";
import logo from "../../images/logo.svg";
import "../../styles/Nav.scss";

export default function Nav() {
    const dispatch = useDispatch();
    const [textInput, setTextInput] = useState("");

    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };

    const submitSearch = (e) => {
        e.preventDefault();
        dispatch({ type: "LOADING_GAME" });
        dispatch(fetchSearch(textInput));
        setTextInput("");
    };

    const clearSearched = () => {
        dispatch({ type: "CLEAR_SEARCHED" });
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
        </motion.nav>
    );
}
