import React from 'react';
import './App.css';
import { GlobalStyle, MainContainer } from './components/globalStyle';
import RouteComponent from './routes/RouteComponent';

function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <RouteComponent/>
    </MainContainer>
  );
}

export default App;
