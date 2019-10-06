import React, { Component } from 'react'

export default class StatBar extends Component {
    render() {

        const { stats, applyStats, id } = this.props; 

        return (
            <div>
                <div className='stat-holder'>
                    <div className='stat-line health'> Health: {stats['hp']} </div>
                    <div className='stat-line health'> Health: {stats['hpperlevel']} </div>
                    <div className='stat-line '> AttackDamage: {stats['attackdamage']} </div>
                    <div className='stat-line '> AttackDamage/Lvl: {stats['attackdamageperlevel']} </div>
                    <div className='stat-line '> Ability Power: {stats['ability_power'] || 0} </div>
                    <div className='stat-line '> Mana: {stats['mp']} </div>
                    <div className='stat-line '> Mana/Lvl: {stats['mpperlevel']} </div>
                    <div className='stat-line '> Mana Regen: {stats['mpregen']} </div>
                    <div className='stat-line '> Mana Regen/Lvl: {stats['mpregenperlevel']} </div>
                    <div className='stat-line '> Armor: {stats['armor']} </div>
                    <div className='stat-line '> Armor/Lvl: {stats['armorperlevel']} </div>
                    <div className='stat-line '> Attack Range: {stats['attackrange']} </div>
                    <div className='stat-line '> Attack Speed: {stats['attackspeed']} </div>
                    <div className='stat-line '> AttackSpeed/Lvl: {stats['attackspeedperlevel']} </div>
                    <div className='stat-line '> Health Regen: {stats['hpregen']} </div>
                    <div className='stat-line '> HealthRegen/Lvl: {stats['hpregenperlevel']} </div>
                    <div className='stat-line '> Movespeed: {stats['movespeed']} </div>
                </div>
                <button className="roster-button" onClick={() => applyStats(id)}>Apply Stats</button>
            </div>
        )
    }
}
