import React from "react";
import './Ball.css';


function Ball(props) {
    return (
        <div id='ballSection' className={`${props.animationClass}`}>
            <p className="response">{props.response}</p>
            {props.triangleImg ? <img className='triangleImg' src={`${props.triangleImg}`} /> : ""}
        </div>
    )
}

export default Ball;
