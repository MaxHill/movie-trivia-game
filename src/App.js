import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import GameArea from './components/GameArea';
import Hud from './components/Hud';

class App extends Component {
  render() {
    return (
      <AppArea>
        <Hud />
        <GameArea />
      </AppArea>
    );
  }
}

export const AppArea = styled.div`
  padding: 1rem;
  height: 100vh;
  width: 100vw;
  background: #efefef;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default (App);
