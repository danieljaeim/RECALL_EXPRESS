import React, { Component } from 'react';
import { PATCH_NUM } from '../config';

export default class ItemsList extends Component {
    render() {

        const { currentItems } = this.props;

        console.log('currentItems', currentItems)
        return (
            <div className="items-list">
                {currentItems.map(item =>
                    <img className="list-items" alt="" src={`http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/img/item/${item.id}.png`} />
                )}
            </div>
        )
    }
}
