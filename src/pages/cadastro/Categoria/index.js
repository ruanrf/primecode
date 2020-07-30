import React from 'react'
import DefaultPage from '../../../components/DefaultPage'
import { Link } from 'react-router-dom'

function CadastroCategoria() {
    return (
      <DefaultPage>
        <h1>
          Cadastro de Categoria
        </h1>

        <Link to="/">
          Home
        </Link>
      </DefaultPage>
    )
  }

  export default CadastroCategoria