import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import TitleComponent from './TitleComponent';
import News from './News'
import Footer from './Footer';

const App = () => {
  return (
    
    <div>
      
      <TitleComponent />
      <NavigationBar />
      <News />
      <Footer />
    </div>
  );
};

export default App;