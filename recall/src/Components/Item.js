import React, { Component } from 'react';
import { PATCH_NUM } from '../config';
import '../Stylesheets/Item.css';
// import { useDrag } from 'react-dnd';
// import ItemTypes from '../constants/itemTypes';


export default function Item(props) {
  const { name, id, stats, addItem } = props;

  return (
    <span
      className='Item-child'
      onClick={ () => addItem(stats, name, id) }
    >
      <img
        src={`http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/item/${id}.png`}
        alt={name} />
    </span>
  )
}
