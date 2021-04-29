import React,{useState} from 'react'
import { ProductConsumer } from './Context'



import SplashScreen from './SplashScreen'
import Game from './GamePlay'
import Instructions from './Instructions'
import Score from './Score'
import UserData from './CollectUserData'
import WinnerList from './WinnersList'

import bgimage from '../assets/images/common/bg.png'




export default function Home(props) {
    
    const [start,setStart] = useState(false)

    const startGame = ()=>{
        setStart(true)
    }

    return (
        <>
            <div  className="container">
                {
                    <ProductConsumer>
                        {
                            (values)=>{
                                return(
                                    <>
                                    {values.screenName === 'splash'?
                                        values.screenName === 'splash' && <SplashScreen trigger={startGame} /> 
                                        :
                                        <div style={style.bgImg} className="container">
                                            {values.screenName === 'instructions' && <Instructions/>}
                                            {values.screenName === 'game' && <Game/> }
                                            {values.screenName === 'score' && <Score/> }
                                            {values.screenName === 'userdata' && <UserData/> }
                                            {values.screenName === 'winnerlist' && <WinnerList/> }
                                        </div>
                                    }

                                    </>
                                )
                            }
                        }
                    
                    
                    </ProductConsumer>
                    
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
        backgroundAttachment:'scroll',
        width: '100%',
        height: '100vh',
        overflowY:"scroll",
    }
}



