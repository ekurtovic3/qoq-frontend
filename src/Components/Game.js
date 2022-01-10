import React, { useState } from "react";
import './Game.css'
import ActionBar from './ActionBar'
import {ProgressBarContainer} from './ProgressBar';
import {useParams} from 'react-router-dom';
import axios from "axios";
import wepon from './img/wepon.png'
import die from './img/die.gif'
import monsterImg from './img/monster.png'
import heal from './img/heal.png'
const Game=(props)=> { 
  const {id} = useParams();
  const [player,setPlayer]=useState({damage: 10,
    healingPoting: 0,
    health: 100});
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
    })
    .catch(error => console.log(error));
    }

  const fleeAction =()=>{
    axios.post(`http://localhost:8081/api/game/${id}/flee`, requestOptions)
    .then(res =>{console.log("Monster",res.data.levelDto.mapDto.currentDungeon.monster) //Monster
    console.log("Player",res.data.playerDto) //Player
    setPlayer(res.data.playerDto)
  })
    .catch(error => console.log(error));
    }
    
  return (
<div className="Game" >
<div className="div1">
<ProgressBarContainer health={player.health}></ProgressBarContainer>
<div className="bar">
<div ><img className="photo" src={wepon} alt="Logo" /> <label >{player.damage}</label></div> 
 <div ><img className="photo" src={heal} alt="Logo" /> <label >{player.healingPoting}</label></div>
</div>
<label>Poruka</label>
<div className="div2"><img className="gifs" src={die} alt="Die amim" /> 
{monster ?<img className="gifs" src={monsterImg} alt="Die amim" />:<></>} 
</div>
</div>
<ActionBar monster={monster} moveAction={moveAction} fightAction={fightAction} fleeAction={fleeAction}/>
   </div>
  );
}

export default Game;
