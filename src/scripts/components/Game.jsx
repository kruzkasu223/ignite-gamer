import React from "react";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { motion } from "framer-motion";
import "../../styles/Game.scss";

export default function Game({ id, name, released, image }) {
    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
    };

    return (
        <motion.div className="game" onClick={loadDetailHandler}>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </motion.div>
    );
}
