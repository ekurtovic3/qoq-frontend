import React, { useState} from "react";
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { Button } from "@mui/material";
import axios from "axios";

function Home() {

  const [alignment, setAlignment] = useState("EASY");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const createGame = () => {
    axios.post("http://localhost:8081/api/game", JSON.stringify("HARD"), requestOptions)
      .then(res => {
        window.location.href=`/game/${res.data.id}`;
      })
      .catch(error => console.log(error));

  }
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify("EASY")
 
  };




  return (
    <React.Fragment>
      <Button variant="contained" onClick={createGame} >START NEW GAME</Button>
      <ToggleButtonGroup
        color="info"
        value={alignment}
        exclusive
        onChange={handleChange}>
        <ToggleButton value="EASY">EASY</ToggleButton>
        <ToggleButton value="MEDIUM">MEDIUM</ToggleButton>
        <ToggleButton value="HARD">HARD</ToggleButton>
      </ToggleButtonGroup>
    </React.Fragment>

  );
}

export { Home };
