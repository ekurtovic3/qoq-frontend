import React from "react";
import { Button } from "@mui/material";
import  './ActionBar.css'

const  Home=({
    moveAction,
    fightAction,
    fleeAction,
    monster,
    endGame
})=> {

    const handleMove = () => {
       moveAction();
    }

    const handleFight = () => {
        fightAction();
     }

     const handleFlee = () => {
        fleeAction();
     }
 
    return (
    <div className="actionBar">

{!endGame ?  <div><Button disabled={monster} variant="contained" onClick={handleMove}>Move</Button></div>:<></>}
  {!endGame ?   <div ><Button disabled={!monster} variant="contained" onClick={handleFight} >Fight</Button> <Button disabled={!monster} onClick={handleFlee}  variant="contained" >FLEE</Button> </div>:<></>}
    </div>
    );
}
export default Home;