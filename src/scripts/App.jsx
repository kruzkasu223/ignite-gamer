import React, { useRef } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import logo from "../images/logo.svg";
import arrowup from "../images/arrowup.svg";

export default function App() {
    const appRef = useRef();
    const upcomingRef = useRef();
    const popularRef = useRef();
    const newgamesRef = useRef();
    const { isLoading } = useSelector((state) => state.games);

    const backToTopHandler = () => {
        appRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div ref={appRef} className="App">
            <div onClick={backToTopHandler} className="arrow_wrapper">
                <img src={arrowup} alt="arrow up" title="Go Back To Top" />
            </div>
            <Nav
                upcomingRef={upcomingRef}
                popularRef={popularRef}
                newgamesRef={newgamesRef}
            />
            <Route path={["game/:id", "/"]}>
                <Home
                    upcomingRef={upcomingRef}
                    popularRef={popularRef}
                    newgamesRef={newgamesRef}
                />
            </Route>

            {isLoading && (
                <div className="loader_wrap">
                    <div className="PreLoader">
                        <img
                            className="logo"
                            src={logo}
                            alt="Pre Loader Logo"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
