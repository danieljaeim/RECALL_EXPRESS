import React, { Component } from 'react';
import ChampRoster from './ChampRoster';
import ChampPool from './ChampPool';
import ItemPool from './ItemPool';
import axios from 'axios';
import applyItemStats from '../helpers/statCalculations';
import { BASE_URL, PATCH_NUM } from '../config';
import '../Stylesheets/BuildPage.css';
import runesData from '../data/en_US/runesReforged.json';


export default class BuildPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runesData, 
      champions: [],
      items: [],
      roster: {},
      currentItemStats: {}
    }
  }

  async componentDidMount() {
    const champList = await axios.get(`${BASE_URL}/champion/`);
    const itemsData = require(`../data/en_US/item.json`).data; //replace with backend
    const itemsDataArr = [];
    for (const itemKey in itemsData) {
      if (itemsData[itemKey].maps["11"] ) {
      itemsDataArr.push({ key: itemKey, data: itemsData[itemKey] });
      }
    }

    this.setState(st => ({
      champions: champList.data,
      items: itemsDataArr,
      runesData
    }), () => console.log(this.state));
  }

  addChampion = async (evt) => {
    const champName = evt.target.getAttribute('name');
    const champStats = await axios.get(`${BASE_URL}/champion/${champName}`);
    console.log('champstats from server', champStats.data);

    const champDataWithItemSlots = {...champStats.data, currentItems: [],
      currentRunes: {keystone: 0, secondary: 1, majorRunes: [1, 1, 1, 1], minorRunes: [[1, 1], [2, 1]]}}; 

    if (!this.state.roster[champName]) {
      this.setState(st => ({
        roster: { ...st.roster, [champName]: champDataWithItemSlots}
      }), () => console.log('new roster after add champ:', this.state.roster));
    }
  }

  addItem = async (stats, itemName, id) => {
    this.setState({currentItemStats: { stats, itemName, id }});
  }

  applyStats = async (champName) => {
    const currentChamp = this.state.roster[champName];
    const currentItem = this.state.currentItemStats;
    console.log('champ data here:', currentChamp);
    if (currentChamp['currentItems'].length < 6) {
      let newChampStats = await axios.post(`${BASE_URL}/items/${currentItem.id}`, {champStats: currentChamp.stats});
      console.log('data from server:', newChampStats);
      // currentChamp['currentItems'][currentChamp['currentItems'].length] = {id: currentItem.id, name: currentItem.itemName};
      // this.setState(st => ({ roster: {...st.roster, [champName]: newChampStats}}));
    }
  }
  
  render() {
    const { champions, items, roster, runesData } = this.state;

    return (
      <div>
        <div> Current Item: {JSON.stringify(this.state.currentItemStats)} </div>
        <ChampRoster roster={roster}
                     applyStats={this.applyStats}
                     runesData={runesData}
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
