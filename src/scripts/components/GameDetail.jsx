import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { smallImage } from "../utils/smallImage";
import "../../styles/GameDetail.scss";
import "../../styles/PreLoader.scss";
import logo from "../../images/logo.svg";

import apple from "../../images/apple.svg";
import pc from "../../images/pc.svg";
import web from "../../images/web.svg";
import linux from "../../images/linux.svg";
import android from "../../images/android.svg";
import xbox from "../../images/xbox.svg";
import gamepad from "../../images/gamepad.svg";
import nintendo from "../../images/nintendo.svg";
import playstation from "../../images/playstation.svg";
import starFull from "../../images/star-full.png";
import starEmpty from "../../images/star-empty.png";

export default function GameDetail() {
    const history = useHistory();

    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains("GameDetail")) {
            document.body.style.overflow = "auto";
            history.push("/");
        }
    };

    const getStars = () => {
        const stars = [];
        const rating = Math.round(game.rating);

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<img key={i} src={starFull} alt="star" />);
            } else {
                stars.push(<img key={i} src={starEmpty} alt="star" />);
            }
        }
        return stars;
    };

    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 1":
            case "PlayStation 2":
            case "PlayStation 3":
            case "PlayStation 4":
            case "PlayStation 5":
            case "PSP":
            case "PS Vita":
                return playstation;
            case "Xbox":
            case "Xbox One":
            case "Xbox 360":
            case "Xbox Series S/X":
                return xbox;
            case "PC":
                return pc;
            case "Nintendo Switch":
            case "Nintendo 3DS":
            case "Nintendo DS":
            case "Nintendo DSi":
            case "Nintendo 64":
                return nintendo;
            case "iOS":
            case "macOS":
                return apple;
            case "Android":
                return android;
            case "Linux":
                return linux;
            case "Web":
                return web;
            default:
                return gamepad;
        }
    };

    const { game, screen, isLoading } = useSelector((state) => state.detail);

    return (
        <>
            <div className="GameDetail" onClick={exitDetailHandler}>
                <div className="detail">
                    {isLoading && (
                        <div className="PreLoader">
                            <img
                                className="logo"
                                src={logo}
                                alt="Pre Loader Logo"
                            />
                        </div>
                    )}
                    {!isLoading && (
                        <>
                            <div className="stats">
                                <div className="rating">
                                    <h3>{game.name}</h3>
                                    <p>Rating: {game.rating}</p>
                                    {getStars()}
                                </div>
                                <div className="info">
                                    <h3>Platforms</h3>
                                    <div className="platforms">
                                        {game.platforms.map((data) => (
                                            <img
                                                key={data.platform.id}
                                                src={getPlatform(
                                                    data.platform.name
                                                )}
                                                title={data.platform.name}
                                                alt={data.platform.name}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="media">
                                <img
                                    src={smallImage(
                                        game.background_image,
                                        "1280"
                                    )}
                                    alt={game.name}
                                />
                            </div>
                            <div
                                className="description"
                                dangerouslySetInnerHTML={{
                                    __html: game.description,
                                }}
                            ></div>
                            <div className="gallary">
                                {screen.results.map((screen) => (
                                    <img
                                        key={screen.id}
                                        src={smallImage(screen.image, "640")}
                                        alt={game.name}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
