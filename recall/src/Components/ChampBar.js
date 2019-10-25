import React, { Component } from 'react';
import '../Stylesheets/ChampBar.css';

export default function ChampBar(props) {

  const { name, hp, hp_per_level, mp, mp_per_level, movespeed, armor, armor_per_level,
    magic_resist, magic_resist_per_level, attackrange, hp_regen, hp_regen_level, mp_regen,
    mp_regen_level, attackdamage, attackdamage_per_level, attackspeed, attackspeed_per_level } = props;
  const champLink = `http://localhost:3000/champion/${name}`;
  const champImage = require(`../img/${name}.png`);

  return (
    <tr>
      <td className="ChampBar-child">
        <a className="ChampBar-link" href={champLink}>
          <img className="ChampBar-img" src={champImage} alt='' />
        </a>
      </td>
      <td> {hp} </td>
      <td> {hp_per_level} </td>
      <td> {mp} </td>
      <td> {mp_per_level} </td>
      <td> {movespeed} </td>
      <td> {attackdamage} </td>
      <td> {attackdamage_per_level} </td>
      <td> {attackspeed} </td>
      <td> {attackspeed_per_level} </td>
      <td> {armor} </td>
      <td> {armor_per_level} </td>
      <td> {magic_resist} </td>
      <td> {magic_resist_per_level} </td>
      <td> {attackrange} </td>
      <td> {hp_regen} </td>
      <td> {hp_regen_level} </td>
      <td> {mp_regen} </td>
      <td> {mp_regen_level} </td>
    </tr>
  )
}
