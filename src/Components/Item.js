import React from 'react'
import { useDrag } from 'react-dnd';

const ItemTypes = {
    BOX: 'box',
}
  

export const Box = function Box({ name,url,itemNo, putToBasket }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { name },
        end: (item, monitor) => {
            const dropResult = monitor.getDropResult();
            if (item && dropResult) {
                putToBasket(itemNo)
                // alert(`You dropped ${item.name} into ${dropResult.name}!`);
            }
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
            handlerId: monitor.getHandlerId(),
        }),
    }));
    const opacity = isDragging ? 0.4 : 1;
    return (
    <div 
        ref={drag} 
        role="Box" 
        style={{ ...style.itemSize,backgroundImage:url, opacity }} 
        data-testid={`box-${name}`}>
        
    </div>);
};


const style = {
    itemSize: {
        width: '150px',
        height: '150px',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        // backgroundColor:'red'  ,
    },
}