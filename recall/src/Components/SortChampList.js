import React, { Component } from 'react';
import ChampBar from './ChampBar';
import '../Stylesheets//SortChampList.css';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

export default class SortChampList extends Component {
  render() {

    const { updateSortType, champions } = this.props; 

    return (
      <div className="SortChampList-wrapper">
        <Table className="SortChampList-parent" size="sm" striped hover size="sm">
          <thead>
            <tr>
              <th> <Button variant="success" onClick={ () => updateSortType('name')}> Champion </Button></th>
              <th> <Button variant="success" onClick={ () => updateSortType('hp') }>Health </Button> </th>
              <th> <Button variant="success" onClick={ () => updateSortType('hp_per_level') }>HP/Level</Button></th>
              <th> <Button variant="success" onClick={ () => updateSortType('mp') }>Mana</Button></th>
              <th> <Button variant="success" onClick={ () => updateSortType('mp_per_level') }>Mana/Level</Button></th>
              <th> <Button variant="success" onClick={ () => updateSortType('movespeed') }>MoveSpd</Button></th>
              <th> <Button variant="success" onClick={ () => updateSortType('armor') }>Armor</Button> </th>
              <th> <Button variant="success" onClick={ () => updateSortType('armor_per_level') }>Armor/Level</Button>  </th>
              <th> <Button variant="success" onClick={ () => updateSortType('magic_resist') }>M.Resist </Button> </th>
              <th> <Button variant="success" onClick={ () => updateSortType('magic_resist_per_level') }>M.Resist/Level </Button>  </th>
              <th> <Button variant="success" onClick={ () => updateSortType('attackrange') }>Range</Button> </th>
              <th> <Button variant="success" onClick={ () => updateSortType('hp_regen') }>HP Regen</Button></th>
              <th> <Button variant="success" onClick={ () => updateSortType('hp_regen_level') }>HP Regen/Level </Button> </th>
              <th> <Button variant="success" onClick={ () => updateSortType('mp_regen') }>Mana Regen </Button> </th>
              <th> <Button variant="success" onClick={ () => updateSortType('mp_regen_level') }>Mana Regen/Level</Button> </th>
              <th> <Button variant="success" onClick={ () => updateSortType('attackdamage') }>Attack Damage </Button></th>
              <th> <Button variant="success" onClick={ () => updateSortType('attackdamage_per_level') }>Attk. Dmg/Level  </Button> </th>
              <th> <Button variant="success" onClick={ () => updateSortType('attackspeed') }>Attack Speed </Button> </th>
              <th> <Button variant="success" onClick={ () => updateSortType('attackspeed_per_level') }>Attk. Speed/Level</Button> </th>
            </tr>
          </thead>
          <tbody>
            {champions.map(champ => <ChampBar key={champ.name} {...champ} />)}
          </tbody>
        </Table>
      </div>
    )
  }
}
