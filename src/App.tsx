import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "./store";
import {GetGameList} from "./actions";
import Box from "./components/Box/Box";
import Grid from "./components/Grid/Grid";
import GridRuler from "./components/GridRuler/GridRuler";




function App() {
  const dispatch = useDispatch();
  const [gameName, setGameName] = useState("");
  const gameState = useSelector((state: RootStore) => state.GameList);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setGameName(event.target.value);
  const handleSubmit = () => dispatch(GetGameList(gameName));

  console.log("game state:", gameState);

  return (
    <div className="App" style={{ margin: "16px", position: "relative", height: "100vh" }}>
      <div><p>What would you like to play?</p><br></br></div>
      <input type="text" onChange={handleChange}/>
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
          <Box> {gameState.data.name}</Box>
        </Grid>

      </Grid>
        </div>
      )}
    </div>
  );
}


export default App;
