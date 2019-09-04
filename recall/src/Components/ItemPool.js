import React, { Component } from 'react';
import Item from '../Components/Item';
import '../Stylesheets/ItemPool.css';


export default class ItemPool extends Component {

  constructor(props) {
    super(props);
    this.state = {
      itemPane: true
    }
  }

  togglepane = (evt) => {

  }

  render() {
    const { items, addItem } = this.props;

    return (
      <div className='ItemContainer'>
        <div className='ItemPool'>
          {items.map(item =>
            <Item
              key={item.key}
              id={item.key}
              addItem={addItem}
              {...item.data} />)
          }
        </div>
      </div>
    )
  }
}
