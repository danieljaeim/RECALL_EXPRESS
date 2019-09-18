import React, { Component } from 'react';
import '../Stylesheets/RosterCard.css';
import { PATCH_NUM } from '../config';

export default function RosterCard(props) {

  const { name, title, partype, runesData, currentRunes, spells, stats, tags, applyStats } = props;

  const qSkill = spells[0];
  const wSkill = spells[1];
  const eSkill = spells[2];
  const rSkill = spells[3];

  //champ skill icons
  const champIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/champion/${name}.png`;
  const qIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${qSkill.image.full}`;
  const wIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${wSkill.image.full}`;
  const eIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${eSkill.image.full}`;
  const rIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${rSkill.image.full}`;

  console.log(currentRunes)

  //state variables
  const keyStoneTree = runesData[currentRunes.keystone];
  const secondaryTree = runesData[currentRunes.secondary]; 
  // const specTree = runesData[]

  const majorRunes = currentRunes.majorRunes 
  const minorRunes = currentRunes.minorRunes; 
  // const specRunes = currentRunes.specRunes;  


  //image holders
  const primary = require(`../img/runes/${keyStoneTree.id}.png`);
  const secondary = require(`../img/runes/${secondaryTree.id}.png`);


  const primaryTreeIcon = require(`../img/runes/${keyStoneTree.id}.png`);
  const mastery = require(`../img/runes/${keyStoneTree.slots[0].runes[majorRunes[0]].id}.png`);
  const majorTop = require(`../img/runes/${keyStoneTree.slots[1].runes[majorRunes[1]].id}.png`);
  const majorMid = require(`../img/runes/${keyStoneTree.slots[2].runes[majorRunes[2]].id}.png`);
  const majorBot = require(`../img/runes/${keyStoneTree.slots[3].runes[majorRunes[3]].id}.png`);

  const secondaryTreeIcon = require(`../img/runes/${secondaryTree.id}.png`);
  const minorTop = require(`../img/runes/${secondaryTree.slots[minorRunes[0][0]].runes[minorRunes[0][1]].id}.png`);
  const minorBot = require(`../img/runes/${secondaryTree.slots[minorRunes[1][0]].runes[minorRunes[1][1]].id}.png`);


  //HARD-CODE SPEC TREE STAT CHOICES
  // const specTop = require(`../img/runes/${keyStoneTree.slots[0].runes[specRunes[0]].id}.png`);
  // const specMid = require(`../img/runes/${keyStoneTree.slots[0].runes[specRunes[1]].id}.png`); 
  // const specBot = require(`../img/runes/${keyStoneTree.slots[0].runes[specRunes[2]].id}.png`);

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
      <div className='skill-arr'>
        <div className='skill-border'>
          <div className='skill-slot skill-q'>
            <img className='skill-img' src={qIcon} alt="q-skill" />
          </div>
          <div className='skill-slot skill-w'>
            <img className='skill-img' src={wIcon} alt="w-skill" />
          </div>
          <div className='skill-slot skill-e'>
            <img className='skill-img' src={eIcon} alt="e-skill" />
          </div>
          <div className='skill-slot skill-r'>
            <img className='skill-img' src={rIcon} alt="r-skill" />
          </div>
        </div>
      </div>
      <div className='stat-holder'>
        <div className='stat-line health'> Health: {stats['hp']} </div>
        <div className='stat-line health'> Health: {stats['hpperlevel']} </div>
        <div className='stat-line '> Mana: {stats['mp']} </div>
        <div className='stat-line '> Mana/Lvl: {stats['mpperlevel']} </div>
        <div className='stat-line '> Mana Regen: {stats['mpregen']} </div>
        <div className='stat-line '> Mana Regen/Lvl: {stats['mpregenperlevel']} </div>
        <div className='stat-line '> Armor: {stats['armor']} </div>
        <div className='stat-line '> Armor/Lvl: {stats['armorperlevel']} </div>
        <div className='stat-line '> AttackDamage: {stats['attackdamage']} </div>
        <div className='stat-line '> AttackDamage/Lvl: {stats['attackdamageperlevel']} </div>
        <div className='stat-line '> Attack Range: {stats['attackrange']} </div>
        <div className='stat-line '> Attack Speed: {stats['attackspeed']} </div>
        <div className='stat-line '> AttackSpeed/Lvl: {stats['attackspeedperlevel']} </div>
        <div className='stat-line '> Health Regen: {stats['hpregen']} </div>
        <div className='stat-line '> HealthRegen/Lvl: {stats['hpregenperlevel']} </div>
        <div className='stat-line '> Movespeed: {stats['movespeed']} </div>
      </div>
      <button className="roster-button" onClick={() => applyStats(name)}>Apply Stats</button>

      <div className='mastery-tree'>
        <div className='major-tree'>
          <div className="keystone-mastery tree-node">
            <img className="keystone-img" src={mastery} alt='' />
          </div>

          <div className="secondary-mastery tree-node">
            <img className="secondary-img" src={secondary} alt='' />
          </div>

          <div className="tree-node major top-row">
            <img className="majortree-img top-node-img" src={majorTop} alt="" />
          </div>

          <div className="tree-node major mid-row">
            <img className="majortree-img mid-node-img" src={majorMid} alt="" />
          </div>

          <div className="tree-node major bot-row">
            <img className="majortree-img bot-node-img" src={majorBot} alt="" />
          </div>

        </div>
        <div className="minor-tree">
          <div className="tree-node minor">
            <img className="minortree-img bot-node-img" src={minorTop} alt="" />
          </div>
          <div className="tree-node minor">
            <img className="minortree-img bot-node-img" src={minorBot} alt="" />
          </div>
        </div>
        <div className="spec-tree">
          <div className="spec-node">
            {/* <img className="spectree-img" src={specTop} alt="" /> */}
          </div>
          <div className="spec-node">
            {/* <img className="spectree-img" src={specMid} alt="" /> */}
          </div>
          <div className="spec-node">
            {/* <img className="spectree-img" src={specBot} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

