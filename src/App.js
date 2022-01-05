import React, { useState } from "react";
import './App.css'
import dieImg from './die.gif'
import CustomButton from './Components/CustomButton'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
//<img src={dieImg} alt="loading..." />

function App() {
  <img src={dieImg} alt="loading..." />
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  
  return (
   
    <div className="App">

<CustomButton/>
<ToggleButtonGroup
  color="info"
  value={alignment}
      exclusive
      onChange={handleChange}
>
  <ToggleButton  value="web">EASY</ToggleButton>
  <ToggleButton value="android">MEDIUM</ToggleButton>
  <ToggleButton value="ios">HARD</ToggleButton>
</ToggleButtonGroup>
    </div>
  );
}

export default App;
