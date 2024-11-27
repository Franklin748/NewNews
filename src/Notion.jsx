import React from 'react';
import imagem1 from '../public/imagens/foto1.png';
import NavigationBar from './NavigationBar';
import TitleComponent from './TitleComponent';
import Footer from './Footer';


const Notion = () => {
  return (
    <div className="">
      <TitleComponent />
      <NavigationBar />
      <div className="noticias">
        <h1>Últimas Notícias</h1>
        <div>
          <img className='imagem1' src={imagem1} alt="test" />
          <h2>sub-titulo</h2>
        </div>
    </div>
      <Footer />
    </div>
  );
};

export default Notion;