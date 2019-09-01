import React, { Component } from 'react';
import '../Stylesheets/ChampRosterCard.css';

export default class ChampRosterCard extends Component {

  render() {
    const { name, addChampion } = this.props; 
    const champImage = require(`../img/${name}.png`);

    return (
      <div onClick={addChampion} className='roster-parent'>
        <img className='roster-img' src={champImage} alt='' name={name}/>
      </div>
    )
  }
}
