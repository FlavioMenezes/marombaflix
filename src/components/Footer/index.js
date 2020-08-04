import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
            <img className="Logo" src={Logo} alt="MarombaFlix Logo"/ >
      </Link>
      <p>
        Orgulhosamente criado por <a href="https://www.linkedin.com/in/flavio-s-menezes/">
          Flávio Souto Menezes
        </a>
        {' '}
      </p>
      <p>
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
