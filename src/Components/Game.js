import React, { useState,useRef,useEffect } from "react";
import './Game.css'
import ActionBar from './ActionBar'
import {ProgressBarContainer} from './ProgressBar';
import {useParams} from 'react-router-dom';
import axios from "axios";
import wepon from './img/wepon.png'
import die from './img/die.gif'
import monsterImg from './img/monster.png'
import heal from './img/heal.png'
import standImg from './img/stand.gif'

const Game=(props)=> { 
  const [message,setMessage]=useState("Massage")
  const {id} = useParams();
  const [endGame,setEndGame]=useState(false)
  const [player,setPlayer]=useState({damage: 10,
    healingPoting: 0,
    health: 100});
const [dongeonCount,setDongeonCount]=useState(1);
  const [monster,setMonster]=useState(false);  

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
 
  };


 const moveAction =()=>{
  axios.post(`http://localhost:8081/api/game/${id}/move`, requestOptions)
  .then(res => {console.log(res.data.levelDto.mapDto) //Mapa ispis
    if(res.data.levelDto.mapDto.currentDungeon.monster!=null) setMonster(true)
    else setMonster(false)
   if(dongeonCount<res.data.levelDto.mapDto.numberOfDungeons) setDongeonCount(dongeonCount+1)
   else  {setMessage("You reach the end, game over") 
   setEndGame(true)    
  }
    setPlayer(res.data.playerDto)
  }
  )
  .catch(error => console.log(error));
  }

  const fightAction =()=>{
    axios.post(`http://localhost:8081/api/game/${id}/fight`, requestOptions)
    .then(res =>{console.log("Monster",res.data.levelDto.mapDto.currentDungeon.monster) //Monster
      console.log("Player",res.data.playerDto) //Player
      setPlayer(res.data.playerDto)
      setMonster(false)
      if (res.data.playerDto.health<=0) setMessage("You lose, GAME OVER!")
      else setMessage("You win!")
      setEndGame(true)    
    })
    .catch(error => console.log(error));
    }

  const fleeAction =()=>{
    axios.post(`http://localhost:8081/api/game/${id}/flee`, requestOptions)
    .then(res =>{console.log("Monster",res.data.levelDto.mapDto.currentDungeon.monster) //Monster
    console.log("Player",res.data.playerDto) //Player
    setPlayer(res.data.playerDto)
    setMonster(false)
  })
    .catch(error => console.log(error));
    }

   const healAction =()=>{
    axios.post(`http://localhost:8081/api/game/${id}/heal`, requestOptions)
    .then(res =>{
    console.log(res.data)
    setPlayer(res.data)
   

  })
    .catch(error => console.log(error));
    }
    
  return (
<div className="Game" >
  <label>Current dungeon {dongeonCount}</label>
<div className="div1">
<ProgressBarContainer health={player.health}></ProgressBarContainer>
<div className="bar">
<div ><img className="photo" src={wepon} alt="Logo" /> <label >{player.damage}</label></div> 
 <div ><img className="photo" src={heal}  onClick={healAction} alt="Logo" /> <label >{player.healingPoting}</label></div>
</div>
<label>{message}</label>
<div className="div2"><img id="playerGif" src={standImg} alt="Die amim" /> 
{monster ?<img id="monsterImg" src={monsterImg} alt="Die amim" />:<></>} 
</div>
</div>
<ActionBar endGame={endGame} monster={monster} moveAction={moveAction} fightAction={fightAction} fleeAction={fleeAction}/>
   </div>
  );
}

export default Game;
