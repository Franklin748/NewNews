import React from 'react';

const NavigationBar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><button href="#">Home</button></li>
        <li><button href="#">Ultimas</button></li>
        <li><button href="#">Economia</button></li>
        <li><button href="#">Mundo</button></li>
        <li><button href="#">Esportes</button></li>
        <li><button href="#">Política</button></li>
        <li><button href="#">Cultura</button></li>
        <li><button href="#">Video</button></li>
      </ul>
    </div>
  );
};

export default NavigationBar;