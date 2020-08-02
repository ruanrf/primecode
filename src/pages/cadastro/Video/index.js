/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import DefaultPage from '../../../components/DefaultPage';

function CadastroVideo() {
  return (
    <DefaultPage>
      <h1>
        Cadastro de novo vídeo
      </h1>

      <Link to="/cadastro/categoria">
        Cadastro de categoria
      </Link>
    </DefaultPage>
  );
}

export default CadastroVideo;
