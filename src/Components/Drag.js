import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import trolley from '../assets/images/home/trolley.png'

import apple_1 from '../assets/images/home/apple_1.png'
import apple_2 from '../assets/images/home/apple_2.png'

import { getProductIdsFromGroupIndex, getItemDataFromID } from './controllers/DataController'

import { ProductConsumer } from './Context'

const finalSpaceCharacters = [
    {
        id: '1',
        name: 'Gary Goodspeed',
        image: apple_1,
        price: 11,
    },
    {
        id: '2',
        name: 'Little Cato',
        image: apple_2,
        price: 15,
    },
]


function Drag() {


    const [characters, updateCharacters] = useState(finalSpaceCharacters);
    const [basket, setBasket] = useState([])


    function handleOnDragEnd(result) {
        console.log(result)
        if (!result.destination) return;
        setBasket([...basket, result.draggableId])
        console.log(basket)
        return (
            <ProductConsumer>
                {(values) => {
                    return (
                        values.updateCurrentIndex()
                    )
                }}
            </ProductConsumer>
        )


    }

    return (
        <div className="App">
            {<ProductConsumer>
                {(values) => {
                    return (
                        <div className="">
                            {/* {console.log(values)} */}

                            {console.log()}
                        </div>
                    )
                }}
            </ProductConsumer>}
            {
                <ProductConsumer>
                    {(values) => {
                        var products = [];
                        const productIdArray = getProductIdsFromGroupIndex(values.currentIndex);
                        console.log("From drag.js ", productIdArray);
                        productIdArray.map((value) => {
                            console.log(value)
                            products.push(getItemDataFromID(value));
                        });
                        console.log(products);
                        return (
                            <header className="App-header">
                                {console.log(values)}
                                <DragDropContext onDragEnd={(result) => values.updateCurrentIndex(result.draggableId)}>
                                    <Droppable droppableId="characters">
                                        {(provided) => (
                                            <div className="characters" style={{ ...style.itemDistribute, }} {...provided.droppableProps} ref={provided.innerRef}>
                                                {/* <div className="space-20"></div> */}
                                                {products.map(({
                                                    group_id,
                                                    name,
                                                    price,
                                                    image,
                                                    isExpensive,
                                                    diff
                                                }, index) => {
                                                    return (
                                                        <Draggable key={index} draggableId={name} index={index}>
                                                            {(provided) => (
                                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                                    <Box image={image} price={price} />

                                                                </div>
                                                            )}
                                                        </Draggable>
                                                    );
                                                })}
                                                {/* <div className="space-20"></div> */}
                                            </div>
                                        )}
                                    </Droppable>


                                    <Droppable droppableId="characters11">
                                        {(provided) => (
                                            <div className="characters" style={style.trolleyBox} {...provided.droppableProps} ref={provided.innerRef}>
                                                {
                                                    <Basket basketItem={basket} >

                                                    </Basket>
                                                }

                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                            </header>
                        )
                    }}
                </ProductConsumer>
            }

        </div>
    );
}


const Box = ({ image, price }) => {
    return (
        <>
            <div style={{ ...style.itemSize, backgroundImage: `url(${image})` }}>

            </div>
            <div
                style={{
                    ...style.prizeBox,
                }}
                className="text-center p-2">
                SAR  &nbsp;
            {price}
            </div>
        </>
    )
}

const Basket = ({ basketItem }) => {
    return (
        <div style={{ ...style.trolleyBox, backgroundImage: `url(${trolley})` }}>
            {<ProductConsumer>
            {(values)=>{
                
                return(
                    values.userCart.map(item => {
                        
                        const itemData = getItemDataFromID(item);
                       return( <div key={item} >
                            <img src={itemData.image}
                                style={{ height: '100px', position: 'absolute', bottom: '0', left: 'calc(50vw - 70px)', marginLeft: '' }} alt="" />
                        </div>)
                    })
                )
            }}
            
            </ProductConsumer>}

        </div>
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
        width: '100px',
        height: '100px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // backgroundColor:'red'  ,
    },
    itemDistribute: {
        // width: "100%",
        display: 'flex',
        justifyContent: 'space-between',
        // position:"fixed",
        top: '30vh',
        zIndex: '1000',
        // marginLeft:'0'
        // backgroundColor:'white'  ,

    },
    trolleyBox: {
        width: "300px",
        height: '300px',
        // position:'fixed',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center bottom',
        bottom: 0,
        transform:'translate(0px,0px)',
        // backgroundColor:'red'
        // marginLeft:'0',
        // backgroundImage:`url(${trolley})`,
    },
    prizeBox: {
        backgroundColor: '#1a3f1e',
        fontSize: '1.2em',
        fontWeight: 'bold',
        color: 'white',
        margin: '10px',
    }
}

export default Drag;
