import React from 'react';
import imagem1 from '../public/imagens/foto1.png'
import imagem2 from '../public/imagens/foto2.png'
import imagem3 from '../public/imagens/foto3.png'
import imagem4 from '../public/imagens/foto4.png'

export default function News() {
    return (
        <div className="noticias">
            <h1>Últimas Notícias</h1>
            <div>
            <img className='imagem1' src={imagem1} alt="test" />
            <img className='imagem2' src={imagem2} alt="test" />
            <img className='imagem3' src={imagem3} alt="test" />

            </div>
        </div>
    );
}