import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../actions/gamesAction";

import { motion } from "framer-motion";
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
                <motion.div onClick={clearSearched} className="logo">
                    <img src={logo} alt="Ignite Logo" />
                    <h1>Ignite</h1>
                </motion.div>
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
