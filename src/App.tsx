import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {RootStore} from "./store";
import {GetGameList} from "./actions";



function App() {
  const dispatch = useDispatch();
  const [gameName, setGameName] = useState("");
  const gameState = useSelector((state: RootStore) => state.GameList);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setGameName(event.target.value);
  const handleSubmit = () => dispatch(GetGameList(gameName));

  console.log("game state:", gameState);

  return (
    <div className="App">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
}

export default App;
