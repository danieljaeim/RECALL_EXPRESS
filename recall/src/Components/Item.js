import React, { Component } from 'react';
import { PATCH_NUM } from '../config';
import '../Stylesheets/Item.css';
// import { useDrag } from 'react-dnd';
// import ItemTypes from '../constants/itemTypes';


export default function Item(props) {
  const { name, id, stats, addItem } = props;
  
  // const [{ isDragging }, drag] = useDrag({
  //   item: { type: ItemTypes.ITEM },
  //   collect: monitor => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // });

  return (
    <span
      className='Item-child'
      // ref={drag}
      onClick={ () => addItem(stats, name, id) }
    >
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/item/${id}.png`}
        alt={name}
        style={{
          // cursor: isDragging ? 'crosshair' : 'pointer'
        }} />
    </span>
  )
}
