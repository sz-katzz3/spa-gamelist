import React, { useState } from "react";
import { Link } from 'react-router-dom'
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "./store";
import { GetGameList } from "./actions";
import GridRuler from "./layout/GridRuler/GridRuler";
import Grid from "./layout/Grid/Grid";


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
          <GridRuler spacing="sm"></GridRuler>
          <Grid
            container
            spacing="sm"
            alignItems="center"
            style={{ height: "100%" }}
          >
            <Grid item xs={1} sm={6} md={4} lg={3}>   
            <Link to="/game">{gameState.data.name}</Link>
              <p>{gameState.data.intro_text} </p>
            </Grid>
          </Grid>
        </div>
      )}

    </div>
  );
};
export default HomePage;