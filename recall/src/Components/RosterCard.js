import React, { Component } from 'react';
import axios from 'axios';
import '../Stylesheets/RosterCard.css';
import test from '../img/test.png';
import { PATCH_NUM } from '../config';

export default function RosterCard(props) {

  const { name, title, partype, spells, stats, tags, applyStats } = props;

  console.log(stats);

  const qSkill = spells[0];
  const wSkill = spells[1];
  const eSkill = spells[2];
  const rSkill = spells[3];

  const champIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/champion/${name}.png`;
  const qIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${qSkill.image.full}`;
  const wIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${wSkill.image.full}`;
  const eIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${eSkill.image.full}`;
  const rIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${rSkill.image.full}`;

  return (
    <div
      id={name}
      className="roster-card"
    >
      <img variant="top"
        src={champIcon}
        className='champ-img' />
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
        <div className='stat-line mana'> Mana: {stats['mp']} </div>
        <div className='stat-line mana'> Mana/Lvl: {stats['mpperlevel']} </div>
        <div className='stat-line mana'> Mana Regen: {stats['mpregen']} </div>
        <div className='stat-line mana'> Mana Regen/Lvl: {stats['mpregenperlevel']} </div>
        <div className='stat-line armor'> Armor: {stats['armor']} </div>
        <div className='stat-line armorperlevel'> Armor/Lvl: {stats['armorperlevel']} </div>
        <div className='stat-line armorperlevel'> AttackDamage: {stats['attackdamage']} </div>
        <div className='stat-line armorperlevel'> AttackDamage/Lvl: {stats['attackdamageperlevel']} </div>
        <div className='stat-line armorperlevel'> Attack Range: {stats['attackrange']} </div>
        <div className='stat-line armorperlevel'> Attack Speed: {stats['attackspeed']} </div>
        <div className='stat-line armorperlevel'> AttackSpeed/Lvl: {stats['attackspeedperlevel']} </div>
        <div className='stat-line armorperlevel'> Health Regen: {stats['hpregen']} </div>
        <div className='stat-line armorperlevel'> HealthRegen/Lvl: {stats['hpregenperlevel']} </div>
        <div className='stat-line armorperlevel'> Movespeed: {stats['movespeed']} </div>
      </div>
      <button className="roster-button" onClick={() => applyStats(name)}>Apply Stats</button>

    </div>
  )
}

