import React from "react";
import { motion } from "framer-motion";

import logo from "../../images/logo.svg";
import "../../styles/Nav.scss";

export default function Nav() {
    return (
        <motion.nav className="Nav">
            <div className="logo_wrapper">
                <motion.div className="logo">
                    <img src={logo} alt="Ignite Logo" />
                    <h1>Ignite</h1>
                </motion.div>
            </div>
            <div className="search">
                <input type="text" name="text" id="" />
                <button>Search</button>
            </div>
        </motion.nav>
    );
}
