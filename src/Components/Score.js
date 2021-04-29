import React, { useState } from 'react'
import CollectUserData from './CollectUserData'


import gameOver from '../assets/images/game_won/you_won.png'
import yourScore from '../assets/images/game_won/total_savings.png'
import nxt_button from '../assets/images/game_won/nxt_button.png'
// import { totalSavings, is100PercentSaved } from './controllers/DataController'
import Titlebar from './TitleBar'
import { ProductConsumer } from './Context'


export default function Score({ trigger }) {


    const PlayButton = () => {
        return (
            <>
            <ProductConsumer>
            {
                (values)=>{
                    return(
                        <img src={nxt_button} height='35px'
                            onClick={() => {values.updateScreenName('userdata') }
                        } />
                    )
                }
            }
                
            </ProductConsumer>
            </>
        )
    }

    // const [next, setNext] = useState(false)

    // const goToNext = () => {
    //     setNext(true)
    // }


    return (
        <>
            {
                    <div className="container p-10 ">
                        <div className="space-20"></div>
                        <Titlebar/>
                        <div className="space-20"></div>
                        <div className="space-20"></div>
                        <div className="space-50"></div>
                        <div className="text-center">
                            <img
                                style={{ width: '300px' }}
                                src={gameOver}
                                alt="" />
                        </div>
                        <div className="space-50"></div>
                        {

                        <ProductConsumer>
                            {(values)=>{
                                return(
                                    <div style={style.instructionBox} className="instruction-box p-10">
                                        <div className="space-100"></div>
                                        <div
                                            style={{ fontSize: '2em', fontWeight: 'bold', color: '#f6b243' }}
                                            className="text-center">
                                            {values.score}
                                        </div>
                                        <div className="space-0"></div>
                                        {!values.is100persaved && betterLuckText()}
                                    </div>
                                )
                            }}
                        </ProductConsumer>
                        }
                        <div style={style.button} className="">
                            <PlayButton />
                        </div>
                        <div className="space-50"></div>
                    </div>

            }
        </>
    )
}

function betterLuckText() {
    return <div
        style={
            {
                fontSize: '.7em',
                fontWeight: 'bold',
                color: '#f6b243',
                paddingLeft: '50px',
                paddingRight: '50px',
            }}
        className="text-center"
    >
        Earn more reward points by choosing the right products.Better Luck Next time
    </div> 
}

const style = {
    instructionBox: {
        height: '200px',
        backgroundImage: `url(${yourScore})`,
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // width:'100%',
        // backgroundColor:'#1a3f1e',
        borderRadius: '20px',
    },
    content: {
        backgroundColor: 'white',
        borderRadius: '20px',
    },
    heading: {
        padding: '10px',
        backgroundColor: '#1a3f1e',
        borderRadius: '10px',
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '40px'
    }
}