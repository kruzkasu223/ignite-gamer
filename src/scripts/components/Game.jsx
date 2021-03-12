import React from "react";
import { motion } from "framer-motion";
import "../../styles/Game.scss";

export default function Game({ id, name, released, image }) {
    return (
        <motion.div className="game">
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </motion.div>
    );
}
