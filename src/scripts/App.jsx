import React, { useRef } from "react";
import { Route } from "react-router-dom";

import Home from "./pages/Home";
import Nav from "./components/Nav";
import arrowup from "../images/arrowup.svg";

export default function App() {
    const appRef = useRef();
    const upcomingRef = useRef();
    const popularRef = useRef();
    const newgamesRef = useRef();

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
        </div>
    );
}
