import React, { useState } from 'react'
import yourScore from '../assets/images/game_won/total_savings.png'
import topWinnersHeading from '../assets/images/winner_list/top_winners_heading.png'
import { ProductConsumer } from './Context'
import getWinnersList from './controllers/UserDataController'
import Titlebar from './TitleBar'


export default function WinnersList({ trigger }) {


    const [winnerList,setWinnerList] = useState([
    {
        id:'1',
        name:'Jithin',
        score:100
    },
    {
        id:'2',
        name:'Amal',
        score:100
    },
    {
        id:'3',
        name:'John',
        score:100
    },
    {
        id:'4',
        name:'Ebin',
        score:100
    },
    {
        id:'4',
        name:'Ebin',
        score:100
    },
    {
        id:'4',
        name:'Ebin',
        score:100
    },
    {
        id:'4',
        name:'Ebin',
        score:100
    },
    {
        id:'4',
        name:'Ebin',
        score:100
    },
    {
        id:'4',
        name:'Ebin',
        score:100
    },
    {
        id:'4',
        name:'Ebin',
        score:100
    },

    ])

    return (
        <>
            <div className="container p-10 ">
                <div className="space-20"></div>
                <Titlebar/>
                <div className="space-20"></div>
                <div className="space-50"></div>

                <div style={style.instructionBox} className="instruction-box p-10">
                    <div style={style.instructionInnerBox} className="instruction-content p-4">
                        <div style={{ transform: 'translate(0,-20px)', }} className="text-center">
                            <span style={style.heading} className='p-4'>
                                <img
                                    style={style.instructionsHeading}
                                    src={topWinnersHeading}
                                    alt="" />
                            </span>

                            <div className="space-20"></div>
                            <div style={{height:'300px',overflowY:'scroll'}} >
                            
                                {
                                    <ProductConsumer>
                                        {(values)=>{
                                            let winnerData = values.getWinnersList()
                                            
                                            return(
                                                <>
                                                { values.winnersList.length !==0 &&
                                                    <div>
                                                        {
                                                            values.winnersList.map((winner,index)=>{
                                                                return(
                                                                    <div 
                                                                        key={index}
                                                                        style={{
                                                                        display: 'flex',
                                                                        justifyContent: 'space-between',
                                                                        padding:'10px'
                                                                        
                                                                    }}>
                                                                            <div>{index+1}</div>
                                                                            <div>{winner.name}</div>
                                                                            <div>{winner.score}</div>
                                                                    </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                }
                                                {
                                                   values.winnersList.length ===0 && 
                                                    <>
                                                    <div className="space-20"></div>
                                                    <div className="text-center">Loading...</div>
                                                    </>
                                                }
                                                </> 
                                                )
                                        }}
                                    </ProductConsumer>
                                    
                                }
                                </div>
                                {/* {winnersItem('1', 'Name 1', 100)} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function winnersItem(rank, name, score) {
    return <div>
        {rank}
        {name}
        {score}
    </div>
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
        height: '15px',
    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: '40px'
    }
}