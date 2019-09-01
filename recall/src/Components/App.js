import React, { Component } from 'react';
import Landing from './Landing';
import { BrowserRouter, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import NavBar from './NavBar';
import SortChamps from './SortChamps';
import ItemBuild from './ItemBuild';
import '../Stylesheets/App.css';

export default function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/" render={props => <Landing {...props} />} />
        <Route exact path="/sort" render={props => <SortChamps {...props} />} />
        <Route exact path="/items" render={props =>
          <DndProvider backend={HTML5Backend}>
            <ItemBuild {...props} />
          </DndProvider>} />
      </BrowserRouter>
    </div>
  );
}
