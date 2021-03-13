import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { popup } from "../utils/animation";
import { smallImage } from "../utils/smallImage";
import { loadDetail } from "../actions/detailAction";
import "../../styles/Game.scss";

export default function Game({ id, name, released, image }) {
    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
        document.body.style.overflow = "hidden";
    };

    return (
        <motion.div
            variants={popup}
            initial="hidden"
            animate="show"
            className="Game"
            onClick={loadDetailHandler}
        >
            <Link to={`/game/${id}`}>
                <motion.h3>{name}</motion.h3>
                <motion.p>{released}</motion.p>
                <motion.img src={smallImage(image, "420")} alt={name} />
            </Link>
        </motion.div>
    );
}
