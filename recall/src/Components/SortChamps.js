import React, { Component } from 'react';
import SortChampList from './SortChampList';
import axios from 'axios';
import { BASE_URL } from '../config';

export default class SortChamps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      champions: []
    }
  }

  componentDidMount = async () => {
    const champList = await axios.get(`${BASE_URL}/champion/sort?sort=name`);
    this.setState(st => ({ champions: champList.data }));
  }

  updateSortType = async (stat) => {
    const newChampOrder = await axios.get(`${BASE_URL}/champion/sort?sort=${stat}`);
    this.setState({ champions: newChampOrder.data });
  }

  render() {
    let { champions } = this.state;
    return (
      <div>
        <SortChampList updateSortType={this.updateSortType} champions={champions} />
      </div>
    )
  }
}
