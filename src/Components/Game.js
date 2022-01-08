import React,{useContext}from "react";
import './Game.css'
import ActionButton from './ActionButton'
import {ProgressBarContainer} from './ProgressBar';
import wepon from './wepon.png'
import die from './die.gif'
import monster from './monster.png'
import {useParams} from 'react-router-dom';
import { Button } from "@mui/material";
import axios from "axios";

const Game=(props)=> { 
  const {id} = useParams();

  console.log("ID je ")
  console.log(id)

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify("EASY")
 
  };


 const moveAction =()=>{
  axios.post("http://localhost:8081/api/game/2/move", requestOptions)
  .then(res => {console.log(res.data)
    if(res.data.monster==null) console.log("NEMA MONSTERA")
  }
  )
  .catch(error => console.log(error));
   
  }
  const fightAction =()=>{
    console.log("Fight")
  }
  const fleeAction =()=>{
    console.log("Flee")
  }
  return (
<div className="Game" >
<div className="div1">
<ProgressBarContainer health={80}></ProgressBarContainer>
<div id="weponBar"><img className="photo" src={wepon} alt="Logo" /> <label >50</label> </div> 
<div>Poruka</div>
<div className="div2"><img className="gifs" src={die} alt="Die amim" /> <img className="gifs" src={monster} alt="Die amim" /> </div>
</div>

<div><Button variant="contained"  onClick={moveAction}  >Move</Button></div>
<div><Button variant="contained"  onClick={fightAction} >Fight</Button> <Button  variant="contained" onClick={fleeAction} disabled>FLEE</Button> </div>
    </div>
  );
}

export default Game;
