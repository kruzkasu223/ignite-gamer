import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { loadDetail } from "../actions/detailAction";
import "../../styles/Game.scss";

export default function Game({ id, name, released, image }) {
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
    };

    return (
        <motion.div className="Game" onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={image} alt={name} />
            </Link>
        </motion.div>
    );
}
