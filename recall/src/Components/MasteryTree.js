import React, { Component } from 'react'

export default class MasteryTree extends Component {
    render() {

        const { runesData, currentRunes } = this.props;

        //state variables
        const keyStoneTree = runesData[currentRunes.keystone];
        const secondaryTree = runesData[currentRunes.secondary];
        // const specTree = runesData[]

        const majorRunes = currentRunes.majorRunes
        const minorRunes = currentRunes.minorRunes;

        const primary = require(`../img/runes/${keyStoneTree.id}.png`);
        const secondary = require(`../img/runes/${secondaryTree.id}.png`);

        const primaryTreeIcon = require(`../img/runes/${keyStoneTree.id}.png`);
        const mastery = require(`../img/runes/${keyStoneTree.slots[0].runes[majorRunes[0]].id}.png`);
        const majorTop = require(`../img/runes/${keyStoneTree.slots[1].runes[majorRunes[1]].id}.png`);
        const majorMid = require(`../img/runes/${keyStoneTree.slots[2].runes[majorRunes[2]].id}.png`);
        const majorBot = require(`../img/runes/${keyStoneTree.slots[3].runes[majorRunes[3]].id}.png`);

        const secondaryTreeIcon = require(`../img/runes/${secondaryTree.id}.png`);
        const minorTop = require(`../img/runes/${secondaryTree.slots[minorRunes[0][0]].runes[minorRunes[0][1]].id}.png`);
        const minorBot = require(`../img/runes/${secondaryTree.slots[minorRunes[1][0]].runes[minorRunes[1][1]].id}.png`);

        //HARD-CODE SPEC TREE STAT CHOICES
        // const specTop = require(`../img/runes/${keyStoneTree.slots[0].runes[specRunes[0]].id}.png`);
        // const specMid = require(`../img/runes/${keyStoneTree.slots[0].runes[specRunes[1]].id}.png`); 
        // const specBot = require(`../img/runes/${keyStoneTree.slots[0].runes[specRunes[2]].id}.png`);

        return (
            <div>
                <div className='mastery-tree'>
                    <div className='major-tree'>
                        <div className="keystone-mastery tree-node">
                            <img className="keystone-img" src={mastery} alt='' />
                        </div>

                        <div className="secondary-mastery tree-node">
                            <img className="secondary-img" src={secondary} alt='' />
                        </div>

                        <div className="tree-node major top-row">
                            <img className="majortree-img top-node-img" src={majorTop} alt="" />
                        </div>

                        <div className="tree-node major mid-row">
                            <img className="majortree-img mid-node-img" src={majorMid} alt="" />
                        </div>

                        <div className="tree-node major bot-row">
                            <img className="majortree-img bot-node-img" src={majorBot} alt="" />
                        </div>

                    </div>
                    <div className="minor-tree">
                        <div className="tree-node minor">
                            <img className="minortree-img bot-node-img" src={minorTop} alt="" />
                        </div>
                        <div className="tree-node minor">
                            <img className="minortree-img bot-node-img" src={minorBot} alt="" />
                        </div>
                    </div>
                    <div className="spec-tree">
                        <div className="spec-node">
                            {/* <img className="spectree-img" src={specTop} alt="" /> */}
                        </div>
                        <div className="spec-node">
                            {/* <img className="spectree-img" src={specMid} alt="" /> */}
                        </div>
                        <div className="spec-node">
                            {/* <img className="spectree-img" src={specBot} alt="" /> */}
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
