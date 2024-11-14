import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import TitleComponent from './TitleComponent';
import News from './News'

const App = () => {
  return (
    <div>
      <TitleComponent />
      <NavigationBar />
      <News />
    </div>
  );
};

export default App;