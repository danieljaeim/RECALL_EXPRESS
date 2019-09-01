import React, { Component } from 'react';
import ChampRosterCard from './ChampRosterCard';
import '../Stylesheets/ChampPool.css'

export default class ChampPool extends Component {

  render() {

    const { champions, addChampion } = this.props; 

    return(
      <div className="ChampPool">
        {champions.map(champ => <ChampRosterCard key={champ} name={champ} addChampion={addChampion} />)}
      </div>
    );
  }
}
