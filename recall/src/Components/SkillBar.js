import React, { Component } from 'react';
import { PATCH_NUM } from '../config'; 
import "../Stylesheets/Skillbar.css";

export default class SkillBar extends Component {
    render() {

        const { spells } = this.props; 

        const qSkill = spells[0];
        const wSkill = spells[1];
        const eSkill = spells[2];
        const rSkill = spells[3];

        //champ skill icons
        const qIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${qSkill.image.full}`;
        const wIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${wSkill.image.full}`;
        const eIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${eSkill.image.full}`;
        const rIcon = `http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/spell/${rSkill.image.full}`;

        return (
            <div>
                <div className='skill-arr'>
                    <div className='skill-border'>
                        <div className='skill-slot skill-q'>
                            <div className="tooltip"> Hover over me!!
                                <span className="tooltiptext"> {qSkill.name} </span>
                            </div>
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

            </div>
        )
    }
}
