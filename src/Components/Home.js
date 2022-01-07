import React, { useState,useCallback } from "react";
import MyButton from './CustomButton'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { Button } from "@mui/material";

function Home() {
    const [alignment, setAlignment] = useState("EASY");
    const [enumPicker,setEnumPicker]= useState("EASY");
    
    
    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    
        setEnumPicker(newAlignment);
    };



    const data=null;
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);  

    const fetchGameHandler = useCallback(async () => {
      setIsLoading(true);
      setError(null);  
      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify("EASY")
      };
      try {
        const response = await fetch(
          "http://localhost:8081/api/game",requestOptions
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data= await response.json()
        console.log(data)
       // if(data.monsterDto==null) console.log("Monster je null")
        //console.log(data.monsterDto)
    //    console.log(data.levelDto.id)
      } catch (error) {
        setError(error.message);
        console.log(error)
      }
      setIsLoading(false);
    }, []);

    return (

        <React.Fragment>
            
            <Button onClick={fetchGameHandler}  >Test api</Button>
            <MyButton data={data} title={'START NEW GAME'}/>
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

export default Home;
