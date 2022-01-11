import React, { useState } from "react";
import './Game.css'
import ActionBar from './ActionBar'
import { useParams } from 'react-router-dom';
import axios from "axios";
import monsterImg from './img/monster.png'
import PlayerInfoBar from "./PlayerInfoBar";
import Player from './Player'

const Game = (props) => {
  const [message, setMessage] = useState("")
  const { id } = useParams();
  const [ actionGif, setActionGif ] = useState(1)
  const [endGame, setEndGame] = useState(false)
  const [player, setPlayer] = useState({
    damage: 10,
    healingPoting: 0,
    health: 100
  });
  const [dongeonCount, setDongeonCount] = useState(1);
  const [monster, setMonster] = useState(false);

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },

  };


  const moveAction = () => {
    axios.post(`http://localhost:8081/api/game/${id}/move`, requestOptions)
      .then(res => {
        console.log(res.data.levelDto.mapDto.dungeons)
        console.log(res.data.levelDto.mapDto.currentDungeon)
        if (res.data.levelDto.mapDto.currentDungeon.monster != null) setMonster(true)
        else setMonster(false)
        
        setActionGif(2)
        if (dongeonCount < res.data.levelDto.mapDto.numberOfDungeons) setDongeonCount(dongeonCount + 1)
        else {
         setMessage("You reach the end, game over")
         setEndGame(true)
         setActionGif(1) 
        }
        setPlayer(res.data.playerDto)
      }
      )
      .catch(error => console.log(error));
  }

  const fightAction = () => {
    axios.post(`http://localhost:8081/api/game/${id}/fight`, requestOptions)
      .then(res => {
        setPlayer(res.data.playerDto)
        setMonster(false)
        if (res.data.playerDto.health <= 0) {
          setMessage("You lose, GAME OVER!")
          setActionGif(3)
        }
        else {
          setMessage("You win!")
          setActionGif(1)
        }
        setEndGame(true)
      })
      .catch(error => console.log(error));
  }

  const fleeAction = () => {
    axios.post(`http://localhost:8081/api/game/${id}/flee`, requestOptions)
      .then(res => {
        setPlayer(res.data.playerDto)
        setMonster(false)
        setActionGif(4)
      })
      .catch(error => console.log(error));
  }

  const healAction = () => {
    axios.post(`http://localhost:8081/api/game/${id}/heal`, requestOptions)
      .then(res => {
        setPlayer(res.data)


      })
      .catch(error => console.log(error));
  }

  return (
    <div >
      <label>Current dungeon {dongeonCount}</label>
      <div className="game">
      <PlayerInfoBar health={player.health} player={player} healAction={healAction}/>
        <label>{message}</label>
        <div className="actionPlayer"><Player type={actionGif} />
          {monster ? <img id="monsterImg" src={monsterImg} alt="monster" /> : <></>}
        </div>
      </div>
      <ActionBar endGame={endGame} monster={monster} moveAction={moveAction} fightAction={fightAction} fleeAction={fleeAction} />
    </div>
  );

}

export default Game;
