import React,{useContext}from "react";
import { Button } from "@mui/material";
import axios from "axios";


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
    <div>
    <div><Button variant="contained" onClick={handleMove}>Move</Button></div>
    <div><Button variant="contained" onClick={handleFight} >Fight</Button> <Button onClick={handleFlee}  variant="contained" disabled>FLEE</Button> </div>
    </div>
    );
}
export default Home;