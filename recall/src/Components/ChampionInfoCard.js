import React, { Component } from 'react';
import '../Stylesheets/ChampionInfoCard.css';
import { PATCH_NUM } from '../config';
import ItemsList from './ItemsList';
import StatBar from './StatBar';
import SkillBar from './SkillBar'; 
import MasteryTree from './MasteryTree.js'; 

export default function ChampionInfoCard(props) {

  let { id, name, title, partype, runesData, currentRunes, spells, stats, tags, applyStats, currentItems } = props;

  const champIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/champion/${id}.png`;

  return (
    <div
      id={name}
      className="roster-card"
    >
      <img variant="top"
        src={champIcon}
        className='champ-img'
        alt=""
      />
      <h1 className='champ-name'> {name} </h1>
      <h5 className='champ-title'> {title} </h5>
      <SkillBar spells={ spells }/>
      <ItemsList currentItems={ currentItems }/>
      <StatBar stats={ stats } 
               applyStats={ applyStats }
               id={ id }
      />
      <MasteryTree runesData={runesData} currentRunes={ currentRunes }/>
    </div>
  )
}

