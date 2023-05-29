import React from 'react';
import './App.css';
import Title from './components/Title';
import GenInfo from './components/GenInfo';
import Input from './components/Input';

function App() {
  return (
    <div>
      <Title></Title>
      <main>
        <GenInfo></GenInfo>
        <Input></Input>
      </main>
    </div>
  );
}

export default App;
