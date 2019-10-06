import React, { Component } from 'react';
import ChampionInfoCard from './ChampionInfoCard';
import '../Stylesheets/ChampRoster.css';

export default function ChampRoster(props) {

  const { roster, runesData, applyStats } = props;

  return (
    <div className='Champ-roster'>
        {Object.values(roster).map(champData => <ChampionInfoCard key={champData.name}
                                                            applyStats={applyStats}
                                                            {...champData}
                                                            runesData={runesData} /> )}
    </div>
  )
}
