import React, { useState } from 'react'

import Instructions from './Instructions'
// import Gameplaycart from './GamePlayCart'
import Gameplaycart2 from './GamePlaycart2'
import Score from './Score'
import WinnersList from './WinnersList'

// import assets
import bgimage from '../assets/images/common/bg.png'


export default function Gameplay(props) {
    
    const [play,setPlay] = useState(false)
    const [gameover,setGameOver] = useState(false)

  

    const startPlay = () => {
        setPlay(true)
    }

    return (
        <>
            <div style={style.bgImg} className="container">
                
                    {
                    <Gameplaycart2 />            
                    }
            </div>
        </>
    )
}



const style = {
    bgImg: {
        backgroundImage: `url(${bgimage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
    }
}
