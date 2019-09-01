import React, { Component } from 'react';
import ChampRoster from './ChampRoster';
import ChampPool from './ChampPool';
import ItemPool from './ItemPool';
import axios from 'axios';
import applyItemStats from '../helpers/statCalculations';
import { BASE_URL, PATCH_NUM } from '../config';
import '../Stylesheets/ItemBuild.css';


export default class ItemBuild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      champions: [],
      items: [],
      roster: {},
      currentItemStats: {}
    }
  }

  async componentDidMount() {
    const champList = await axios.get(`${BASE_URL}/champion/`);
    const itemsData = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/data/en_US/item.json`).then(data => data.data.data);
    const itemsDataArr = [];
    for (const itemKey in itemsData) {
      if (itemsData[itemKey].maps["11"] ) {
      itemsDataArr.push({ key: itemKey, data: itemsData[itemKey] });
      }
    }

    this.setState(st => ({
      champions: champList.data,
      items: itemsDataArr
    }));
  }

  addChampion = async (evt) => {
    const champName = evt.target.getAttribute('name');
    const champData = await axios.get(`http://ddragon.leagueoflegends.com/cdn/${PATCH_NUM}/data/en_US/champion/${champName}.json`);

    if (!this.state.roster[champName]) {
      this.setState(st => ({
        roster: { ...st.roster, [champName]: champData.data.data[champName]}
      }), () => console.log(this.state.roster));
    }
  }

  addItem = async (stats) => {
    this.setState({currentItemStats: stats});
  }

  applyStats = async (champName) => {
    const currentChamp = this.state.roster[champName];
    let newChampStats = applyItemStats(currentChamp, this.state.currentItemStats);
    this.setState(st => ({ roster: {...st.roster, [champName]: newChampStats}}));
  }

  render() {
    const { champions, items, roster } = this.state;

    return (
      <div>
        <div> Current Item: {JSON.stringify(this.state.currentItemStats)} </div>
        <ChampRoster roster={roster}
                     applyStats={this.applyStats}
        />
        <ChampPool addChampion={this.addChampion}
                   champions={champions}
        />
        <ItemPool addItem={this.addItem}
                  items={items}
        />
      </div>
    );
  }
}
