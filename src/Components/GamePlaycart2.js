import React, { useState } from 'react'
import Drag from './Drag'

// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


import Titlebar from './TitleBar'
import Timer from './Timer'

import trolley from '../assets/images/home/trolley.png'
import { ProductConsumer } from './Context'


export default function Gameplaycart(props) {


    return (
        <>
            <div className="container p-10">
                <ProductConsumer>
                    {(values)=>{
                        return(
                            <Titlebar 
                                timerDisplay={
                                    <Timer  
                                        initialSeconds={10} 
                                        trigger={values.updateScreenName}
                                        />
                                    }
                            />
                        )
                    }}
                </ProductConsumer>
                <div className="space-50"></div>
                <div className="space-100"></div>
                <div style={{ ...style.dropArea }} className="drop-area">
                <Drag/>
                </div>
            </div>

        </>
    )
}

const Box=({item})=>{
    return(
        <div style={{...style.itemSize,backgroundImage:`url(${item.image})`}}>

        </div>
    )
}

const Basket=()=>{
    return(
        <div style={{...style.trolleyBox,backgroundImage:`url(${trolley})`}}></div>
    )
}



const style = {
    dropArea: {
        position: 'absolute',
        width: '300px',
        bottom: '0',
        marginLeft: 'calc(50% - 160px)'
    },
    itemSize: {
        width: '150px',
        height: '150px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // backgroundColor:'red'  ,
    },
    itemDistribute: {
        width: "100%",
        display: 'flex',
        justifyContent: '',
        // backgroundColor:'white'  ,

    },
    trolleyBox: {
        width: "100%",
        height: '300px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        // backgroundImage:`url(${trolley})`,
    },
    prizeBox: {
        width: '',
    }
}