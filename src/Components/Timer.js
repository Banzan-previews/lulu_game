import React from 'react'
import { useState, useEffect } from 'react';

import bg_hurry from '../assets/images/common/timer_bg_hurry_up.png'
import timer_bg from '../assets/images/common/timer_bg.png'
import { ProductProvider } from './Context';

const Timer = (props) => {
    const {initialMinute = 0,initialSeconds = 0,trigger} = props;
    const [ minutes, setMinutes ] = useState(initialMinute);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                trigger('score')
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    return (
        <>
        <div
            style={{
                // backgroundColor:'red',
                width:'70px',
                height:'70px',
                backgroundImage: (seconds <= 5 )? `url(${bg_hurry})`: `url(${timer_bg})`,
                backgroundSize:'contain',
                // backgroundPositionY:'-3px',
                backgroundRepeat:'no-repeat'
        
            }}
            className={"text-center"}
        >

            { minutes === 0 && seconds === 0
                ? null
                : <div 
                className={"text-center"}
                style={{fontSize:'1.0em',fontWeight:'bold',marginTop:'13px'}}> 
                        {seconds}
                        <br/>
                        <span style={{fontSize:'0.8em'}}>
                        sec
                        </span>
                    </div> 
            }
                       
        </div>
        {/* <div className="text-center">
            Hurry up
        </div> */}
        </>
    )
}

export default Timer;