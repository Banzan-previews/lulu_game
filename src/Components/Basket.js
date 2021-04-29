import React from 'react'
import { useDrop } from 'react-dnd';

import trolley from '../assets/images/home/trolley.png'


const ItemTypes = {
    BOX: 'box',
}

export const Basket = ({children}) => {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.BOX,
        drop: () => ({ name: 'Dustbin' }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));
    const isActive = canDrop && isOver;
    // let backgroundColor = '#222';
    // if (isActive) {
    //     backgroundColor = 'darkgreen';
    // }
    // else if (canDrop) {
    //     backgroundColor = 'darkkhaki';
    // }
    return (
    <div 
        ref={drop} 
        role={'Dustbin'} 
        style={{ ...style.trolleyBox}}
    >
        {children}
    </div>);
};

const style = {
    trolleyBox:{
        width:"100%",
        height:'300px',
        backgroundSize:'contain',
        backgroundRepeat:'no-repeat',
        backgroundPosition:'center bottom',  
        backgroundImage:`url(${trolley})`,
    },
}