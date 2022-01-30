import React, { useState } from "react";
import { Link, Outlet } from 'react-router-dom'
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import { GetGameList } from "./actions";


function HomePage() {
    const dispatch = useDispatch();
    const [gameName, setGameName] = useState("");
    const gameState = useSelector((state: RootStore) => state.GameList);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setGameName(event.target.value);
    const handleSubmit = () => dispatch(GetGameList(gameName));

    console.log("game state:", gameState);

    return (
        <div
            className="HomePage"
            style={{ margin: "16px", position: "relative", height: "100vh" }}
        >
            <input type="text" onChange={handleChange} />
            <button onClick={handleSubmit}>Search</button>
            {gameState.data && (
                <div>
                            <Link to="/game">{gameState.data.name}</Link>
                            <p>{gameState.data.intro_text} </p>
                        <div className="content">
                            <Outlet />
                        </div>
                </div>
            )}

        </div>
    );
};
export default HomePage;