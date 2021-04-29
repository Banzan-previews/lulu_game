import React from 'react'
import instructions from '../assets/images/instructions/instructions.png'
import play_button from '../assets/images/instructions/play_button.png'
import { ProductConsumer } from './Context'
import Titlebar from './TitleBar'

export default function Instructions({ trigger }) {


    const PlayButton = () => {
        return (
            <>
                <ProductConsumer>
                    {(values) => {
                        return (
                            <img src={play_button} height='35px'
                                onClick={() => {
                                    values.updateScreenName('game')
                                }
                                } />
                        )
                    }}
                </ProductConsumer>
            </>
        )
    }


    return (
        <>
            <div className="container p-10 ">
                <div className="space-20"></div>
                <Titlebar/>
                <div className="space-50"></div>
                <div style={style.instructionBox} className="instruction-box p-10">
                    <div style={style.instructionInnerBox} className="instruction-content p-4">
                        <div style={{ transform: 'translate(0,-20px)', }} className="text-center">
                            <span style={style.heading} className='p-4'>
                                <img
                                    style={style.instructionsHeading}
                                    src={instructions}
                                    alt="" />
                            </span>
                        </div>
                        <ul>
                            <div className="space-20"></div>
                            <li>
                                <div className="bullet p-4 " style={style.instructionText}>
                                    Select the lower priced item and add to the shopping cart.
                                </div>
                            </li>
                            <div className="space-20"></div>
                            <li>
                                <div className="bullet p-4 " style={style.instructionText}>
                                    Add as much items as you can in the given time.
                                </div>
                            </li>
                            <div className="space-20"></div>
                            <li>
                                <div className="bullet p-4 " style={style.instructionText}>
                                    Get a chance to win a Lulu voucher.
                                </div>
                            </li>
                        </ul>
                        <div className="space-10"></div>
                        <hr className="solid"></hr>
                        <div className="space-10"></div>
                        <div className="bullet p-4 " style={style.instructionText2}>
                            Top winners will be awarded an amount of 500 riyals/ 300 riyals/ 200 riyals respectively
                        </div>
                        <div className="space-10"></div>
                        <hr className="solid"></hr>
                        <div className="space-20"></div>
                    </div>
                </div>

                <div style={style.button} className="">
                    <PlayButton />
                </div>
                <div className="space-50"></div>
            </div>
        </>
    )
}




const style = {
    instructionBox: {
        backgroundColor: '#1a3f1e',
        borderRadius: '20px',
    },
    instructionInnerBox: {
        backgroundColor: 'white',
        borderRadius: '20px',
    },
    instructionText: {
        color: 'black',
        fontFamily: 'Zil',
    },
    instructionText2: {
        color: 'black',
        fontFamily: 'Zil',
        paddingLeft: '30px',
        paddingRight: '30px',
    },
    heading: {
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        backgroundColor: '#1a3f1e',
        borderRadius: '20px',
    },
    instructionsHeading: {
        height: '20px',
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '40px'
    }
}