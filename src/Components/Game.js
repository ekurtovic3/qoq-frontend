import React,{useEffect,useState,useCallback}from "react";
import './Game.css'
import CustomButton from './CustomButton'
import {ProgressBarContainer} from './ProgressBar';
import wepon from './wepon.png'
import die from './die.gif'
function Game() {  
  return (
<div className="Game" >
<div className="div1">
<ProgressBarContainer health={100}></ProgressBarContainer>
<img className="photo" src={wepon} alt="Logo" /> 50
<img src={die} alt="Die amim" /> 
</div> 
<div><CustomButton title={'MOVE'}/></div>
<div><CustomButton title={'FIGHT'}/> <CustomButton title={'FLEE'}/> </div>
    </div>
  );
}

export default Game;
