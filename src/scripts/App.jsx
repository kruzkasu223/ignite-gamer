import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";

export default function App() {
    return (
        <div className="App">
            <Nav />
            <Route path={["game/:id", "/"]}>
                <Home />
            </Route>
        </div>
    );
}
