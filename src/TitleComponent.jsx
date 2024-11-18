import React from 'react';
import icon1 from '../public/imagens/face.svg'
import icon2 from '../public/imagens/insta.svg'
import icon3 from '../public/imagens/twitter.svg'

const TitleComponent = () => {
  return (
    <div>
        <div className='contato1'>
          <div className='icon'>
            <img className='icon-imagem' src={icon2} alt="test" />
            <img className='icon-imagem' src={icon3} alt="test" />
            <img className='icon-imagem' src={icon1} alt="test" />
          </div>
        </div>
       <div className="titleContainer">
       <div className="noticia-menu">
           <div className="bar"></div>
           <div className="bar"></div>
           <div className="bar"></div>         
       </div>
           <button>Menu</button>    
         <h1 className="title">New</h1>
         <h1 className="news font-Ribeye">News</h1>
         <input className="placeholderInput" type="text" name="nome" placeholder="Digite aqui" />
       </div>
    </div>
   
  );
};



export default TitleComponent;