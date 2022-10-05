import React from 'react'
import { Link } from 'react-router-dom';
// Components
import MenuIcon from '../MenuIcon/index.js';
// Styles
import { Wrapper } from './Header.style.js';


const Header = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <h1 class="logo">Artlist Catalogue</h1>
      </Link>
      <div className="Header__icon-container">
        <MenuIcon />
      </div>
    </Wrapper>
  )
}

export default Header