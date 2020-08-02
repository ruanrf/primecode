import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Criado por
        {' '}
        <a href="https://github.com/ruanrf/">
          Ruan Fernandes
        </a>
        {' '}
        durante a Imersão React da
        {' '}
        <a href="https://www.alura.com.br/">
          Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
