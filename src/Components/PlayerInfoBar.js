import React from 'react';
import { ProgressBarContainer } from './ProgressBar';
import PowerUpBar from "./PowerUpBar";

export default function PlayerInfoBar(props) {



    return ( 
        <React.Fragment> <ProgressBarContainer health={props.player.health}></ProgressBarContainer>
        <PowerUpBar player={props.player} healAction={props.healAction}/></React.Fragment>
       
        );
}