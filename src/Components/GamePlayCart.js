import React,{useEffect, useState} from 'react'
import {Box} from './Item'
import {Basket} from './Basket'


import Draggable from 'react-draggable';



import milk1 from '../assets/images/home/milk_1.png'
import milk2 from '../assets/images/home/milk_2.png'
import jam_1 from '../assets/images/home/jam_1.png'
import jam_2 from '../assets/images/home/jam_2.png'
import color_pencil_1 from '../assets/images/home/color_pencil_1.png'
import color_pencil_2 from '../assets/images/home/color_pencil_2.png'
import ball_1 from '../assets/images/home/ball_1.png'
import ball_2 from '../assets/images/home/ball_2.png'

import trolley from '../assets/images/home/trolley.png'

const itemList = [
    {
        pairName:'milk',
        item_1: milk1,
        item_2: milk2,
        price_1:31,
        price_2:20,
    },
    {
        pairName:'jam',
        item_1: jam_1,
        item_2: jam_2,
        price_1:40,
        price_2:50,
    },
    {
        pairName:'color_pencil',
        item_1: color_pencil_1,
        item_2: color_pencil_2,
        price_1:10,
        price_2:90,
    },
    {
        pairName:'ball',
        item_1: ball_1,
        item_2: ball_2,
        price_1:70,
        price_2:90,
    },

]

export default function Gameplaycart(props) {

    const [itemNo,setItemNo] = useState(0)
    const [count,setCount] = useState(0)
    const [basketItem,setBasketItem] = useState([])
    

    useEffect(()=>{
        setItemNo(getRndInteger(0,4))
        console.log(itemNo)
        console.log("use effect called")
    },[basketItem])

    const putToBasket = (itemNo)=>{
        console.log("put to basket called")
        setCount(count + 1)
        // reset item div to normal
        resetItemPosition()
        // add item permanently to basket
        addItemToBasket(itemNo)

    }

    const resetItemPosition=()=>{
        // 
    }

    const addItemToBasket = (itemNo)=>{
        // 
        setBasketItem([...basketItem,itemNo])       
        console.log("basketItem",basketItem)
        
    }

    const RenderItemsInBasket = ()=>{
        return (<>
            <div
                style={{position:'absolute',bottom:'0',marginBottom:'0',padding:'5px'}} 
                className="text-center">
                {basketItem.map(itemNo=>{
                    return(
                        <img 
                            src={itemList[itemNo].item_1} 
                            style={{height:'100px',position:'absolute',bottom:'0',left:'calc(50vw - 70px)',marginLeft:'50%'}} alt=""/>
                        )
                    })}
            </div>
        </>)
    }
    

    return (
        <>
            <div className="container p-10">
                <div style={{...style.dropArea}} className="drop-area">
                    <div style={{...style.itemDistribute}} className="cart-items">
                    
                        <div>
                        <Draggable>
                            <Box 
                                url={`url(${itemList[itemNo].item_1})`}  
                                name={itemList[itemNo].pairName} 
                                itemNo={itemNo} 
                                putToBasket={putToBasket} 
                                />
                            {/* <div style={{backgroundImage:`url(${itemList[itemNo].item_1})`,...style.itemSize}} className="item"></div> */}
                        </Draggable>
                            <div 
                                style={{
                                    ...style.prizeBox,
                                    }}
                                className="text-center p-2">
                                SAR    
                                {itemList[itemNo].price_1}
                            </div>
                        </div>
                 
                        <div>
                            <Box 
                                url={`url(${itemList[itemNo].item_2})`} 
                                name={itemList[itemNo].pairName} 
                                itemNo={itemNo} 
                                putToBasket={putToBasket}
                                />
                            {/* <div style={{backgroundImage:`url(${itemList[itemNo].item_2})`,...style.itemSize}} className="item"></div> */}
                            <div 
                                style={{
                                    ...style.prizeBox,
                                    }}
                                className="text-center p-2">
                                SAR    
                                {itemList[itemNo].price_2}
                            </div>
                        </div>
                  
                    </div>
                    <div 
                        style={style.trolleyBox}  
                        className="cart-basket"
                        // onClick={()=>{
                        //     putToBasket(itemNo)
                        // }}
                    >
                        <Basket>
                            {/* items inside basket */}
                            <RenderItemsInBasket />
                        </Basket>

                    </div>
                </div>
            </div>
        </>
    )
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


const style = {
    dropArea:{
        position:'absolute',
        width:'300px',
        bottom:'0',
        marginLeft:'calc(50% - 160px)'
    },
    itemSize :{
        width:'150px',
        height:'150px',
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center', 
        // backgroundColor:'red'  ,
    },
    itemDistribute:{
        width:"100%",
        display:'flex',
        justifyContent:'',
        // backgroundColor:'white'  ,

    },
    trolleyBox:{
        width:"100%",
        height:'300px',
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center bottom',  
        // backgroundImage:`url(${trolley})`,
    },
    prizeBox:{
        backgroundColor:'#1a3f1e',
        fontSize:'1.2em',
        fontWeight:'bold',
        color:'white',
        margin:'10px',
    }
}