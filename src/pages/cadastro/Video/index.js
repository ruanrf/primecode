import React from 'react'
import DefaultPage from '../../../components/DefaultPage'
import { Link } from 'react-router-dom'

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
    )
  }

  export default CadastroVideo