import React from 'react';
import icon1 from '../public/imagens/face.svg'
import icon2 from '../public/imagens/insta.svg'
import icon3 from '../public/imagens/twitter.svg'


const Footer = () => {
  return (
    <div className="">
      <footer>
        <div className='footer'>
            <ul>
                <li>Notícias:</li>
                <li>Ultimas nottícias</li>
                <li>Economia</li>
                <li>Mundo</li>
                <li>Esportes</li>
                <li>Politica</li>
                <li>Cultura</li>
                <li>Video</li>
            </ul>
            <ul className='contato'>
                <li>Contato:</li>
                <li><img className='icon-imagem' src={icon3} alt="test" /></li>
                <li><img className='icon-imagem' src={icon1} alt="test" /></li>
                <li><img className='icon-imagem' src={icon2} alt="test" /> </li>
            </ul>
            <div className='logo-footer'>
            <h3 className="title-footer">New</h3>
            <h3 className="news-footer font-Ribeye">News</h3>
            </div>           
            <ul className='time'>
                <li>Equipe:</li>
                <li>Franklin Vinicius Rodrigues Pereira - 37021748</li>
                <li>Ruan Mendonça Nunes - 37021555</li>
                <li className='copyright'>&copy; 2024 NewNews - Projeto Front/Backend</li>
            </ul>  
        </div>         
      </footer>
    </div>
  );
};

export default Footer;