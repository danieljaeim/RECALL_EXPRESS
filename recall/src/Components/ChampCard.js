import React, { Component } from 'react';
import '../Stylesheets/ChampCard.css';

export default class ChampCard extends Component {
  render() {

    const champName = this.props.id;
    const champLink = `http://localhost:3000/champ/${champName}`;
    const champImage = require(`../img/${champName}.png`);

    return (
      <div className="ChampCard-child">
        <a href={champLink}>
          <img className="ChampCard-img" src={champImage} alt='' />
        </a>
      </div>
    )
  }
}