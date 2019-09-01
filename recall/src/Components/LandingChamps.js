import React, { Component } from 'react';
import ChampList from './ChampList';
import axios from 'axios';
import { BASE_URL } from '../config';

export default class LandingChamps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      champions: []
    }
  }

  async componentDidMount() {
    const champList = await axios.get(`${BASE_URL}/champion/`);
    this.setState(st => ({ champions: champList.data }));
  }

  render() {
    let currentList = this.state.champions;
    return <ChampList list={currentList} />
  }
}
