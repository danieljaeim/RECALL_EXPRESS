import React, { Component } from 'react';
import ChampCard from './ChampCard';
import '../Stylesheets/ChampList.css';

export default class ChampList extends Component {

  render() {

    let { type, list } = this.props;
    return (
      <span className="ChampList-parent">
        {list.map(champ => <ChampCard key={champ} id={champ} type={type} />)}
      </span>
    )
  }
}
