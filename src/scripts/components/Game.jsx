import React from "react";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { smallImage } from "../utils";
import { loadDetail } from "../actions/detailAction";
import "../../styles/Game.scss";

export default function Game({ id, name, released, image }) {
    const stringPathId = id.toString();
    const dispatch = useDispatch();

    const loadDetailHandler = () => {
        dispatch(loadDetail(id));
        document.body.style.overflow = "hidden";
    };
    // layoutId={`image-${stringPathId}`}

    return (
        <motion.div
            layoutId={stringPathId}
            className="Game"
            onClick={loadDetailHandler}
        >
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
                <motion.p>{released}</motion.p>
                <motion.img
                    layoutId={`image ${stringPathId}`}
                    src={smallImage(image, "420")}
                    alt={name}
                />
            </Link>
        </motion.div>
    );
}
