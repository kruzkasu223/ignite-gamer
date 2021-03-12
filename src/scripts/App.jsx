import React from "react";
import Home from "./pages/Home";
import { Route } from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <Route path={["game/:id", "/"]}>
                <Home />
            </Route>
        </div>
    );
}
