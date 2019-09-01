import React, { Component } from 'react';
import RosterCard from './RosterCard';
import '../Stylesheets/ChampRoster.css';

export default function ChampRoster(props) {

  const { roster, applyStats } = props;

  return (
    <div className='Champ-roster'>
        {Object.values(roster).map(champData => <RosterCard key={champData.name} applyStats={applyStats} {...champData} />)}
    </div>
  )
}
