import React from "react";
import { Button } from "@mui/material";
import  './ActionBar.css'

const  Home=({
    moveAction,
    fightAction,
    fleeAction
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
    <div><Button variant="contained" onClick={handleMove}>Move</Button></div>
    <div><Button variant="contained" onClick={handleFight} >Fight</Button> <Button onClick={handleFlee}  variant="contained" >FLEE</Button> </div>
    </div>
    );
}
export default Home;