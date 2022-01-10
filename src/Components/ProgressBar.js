
import React from 'react';
import './progress-bar.css';

const Range = (props) => {
    return (
     <div className="range" style={{width: `${props.percentRange}%`}}/>
    );
};

const ProgressBar = (props) => {
    return (
        <div className="progress-bar">
            <Range percentRange={props.percentRange}/>
        </div>
    );
};

export const  ProgressBarContainer = (props) => {
    return (
        <div className="container">
            <ProgressBar percentRange={props.health}/>
        </div>
    );
};