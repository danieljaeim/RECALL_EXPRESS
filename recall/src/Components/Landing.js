import React, { Component } from 'react';
import LandingChamps from './LandingChamps';
import LandingGraph from './LandingGraph';


export default class Landing extends Component {
  render() {
    return (
      <div>
        <LandingChamps />
        <LandingGraph />
      </div>
    )
  }
}
