import React, { useState, useCallback} from "react";
import MyButton from './CustomButton'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { Button } from "@mui/material";

import axios from "axios";

function Home() {
  const [gameId, setGameId] = useState(1);


  const [alignment, setAlignment] = useState("EASY");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

 // const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState(null);


  const pom = () => {
    axios.post("http://localhost:8081/api/game", JSON.stringify("EASY"), requestOptions)
      .then(res => {
        console.log(res.data)
        setGameId(res.data.id)
        return res.data.id
      }
      )
      .catch(error => console.log(error));

  }
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify("EASY")
 
  };


  /*

  const fetchGameHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "http://localhost:8081/api/game", requestOptions
      )
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json()
      setCreatedGameId(data)
    } catch (error) {
      setError(error.message);
      console.log(error)
    }

    setIsLoading(false);
  }, []);
*/

  return (
    <React.Fragment>
      <Button onClick={pom} >Test api</Button>
      <MyButton onClick={pom} title={'START NEW GAME'} id={gameId} />
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
