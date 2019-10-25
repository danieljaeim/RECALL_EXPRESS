import React, { Component } from 'react';
import '../Stylesheets/StatBar.css'

export default class StatBar extends Component {
    render() {

        const { stats, applyStats, id } = this.props; 

        return (
            <div>
                <div className='stat-holder'>
                    <span className='stat-line '> Health: {stats['hp']} </span>
                    <span className='stat-line '> Health+ {stats['hp_per_level']} </span>
                    <span className='stat-line '> Mana: {stats['mp']} </span>
                    <span className='stat-line '> Mana+: {stats['mp_per_level']} </span>
                    <span className='stat-line '> AttackDamage: {stats['attackdamage']} </span>
                    <span className='stat-line '> AttackDamage+: {stats['attackdamage_per_level']} </span>
                    <span className='stat-line '> Ability Power: {stats['abilitypower']} </span>
                    <span className='stat-line '> Mana Regen: {stats['mp_regen']} </span>
                    <span className='stat-line '> Mana Regen+: {stats['mp_regen_level']} </span>
                    <span className='stat-line '> Armor: {stats['armor']} </span>
                    <span className='stat-line '> Armor+: {stats['armor_per_level']} </span>
                    <span className='stat-line '> Attack Range: {stats['attackrange']} </span>
                    <span className='stat-line '> Attack Speed: {stats['attackspeed']} </span>
                    <span className='stat-line '> AttackSpeed+: {stats['attackspeed_per_level']} </span>
                    <span className='stat-line '> Health Regen: {stats['hp_regen']} </span>
                    <span className='stat-line '> HealthRegen+: {stats['hp_regen_level']} </span>
                    <span className='stat-line '> Movespeed: {stats['movespeed']} </span>
                    <span className='stat-line '> Lifesteal: {stats['lifesteal']} </span>
                    <span className='stat-line '> Lifesteal(monster): {stats['lifesteal_monsters']} </span>
                    <span className='stat-line '> MagicResist: {stats['magic_resist']} </span>
                    <span className='stat-line '> MagicResist+: {stats['magic_resist_per_level']} </span>
                    <span className='stat-line '> Crit: {stats['crit']} </span>
                </div>
                <button className="roster-button" onClick={() => applyStats(id)}>Apply Stats</button>
            </div>
        )
    }
}
