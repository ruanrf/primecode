/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../ButtonLink'

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Primecode Logo" />
      </Link>

      <Button as={Link} className="Button" to="/cadastro/video">
        Add video
      </Button>
    </nav>
  );
}

export default Menu;
