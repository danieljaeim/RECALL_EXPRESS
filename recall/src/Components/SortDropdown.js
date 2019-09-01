import React, { Component } from 'react'

export default class SortDropdown extends Component {

  handleChange = (evt) => {
    const { updateSortType } = this.props;
    updateSortType(evt.target.value);
  }

  render() {

    return (
      <div>
        <select onChange={ this.handleChange }>
          <option value='hp'> HP </option>
          <option value='hp_per_level'> HP/Level </option>
          <option value='mp_per_level'> MP/Level </option>
          <option value='movespeed'> Movespeed </option>
          <option value='armor'> Armor </option>
          <option value='armor_per_level'> Armor/Level </option>
          <option value='magic_resist'> Magic Resist </option>
          <option value='attackrange'> Attack Range </option>
          <option value='hp_regen'> HP Regen </option>
          <option value='hp_regen_level'> HP Regen/Level </option>
          <option value='mp_regen'> MP Regen </option>
          <option value='mp_regen_level'> MP Regen/Level </option>
          <option value='attackdamage'> Attack Damage </option>
          <option value='attackdamage_per_level'> Attack Damage/Level </option>
          <option value='attackspeed'> Attack Speed </option>
          <option value='attackspeed_per_level'> Attack Speed/Level </option>
        </select>
      </div>
    )
  }
}
