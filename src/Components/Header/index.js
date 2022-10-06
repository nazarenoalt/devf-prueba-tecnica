import React from 'react'
import { Link } from 'react-router-dom';
// Styles
import { Wrapper } from './Header.style.js';


const Header = () => {
  return (
    <Wrapper>
      <Link to='/'>
        <h1 class="logo">Artlist Catalogue</h1>
      </Link>
      
    </Wrapper>
  )
}

export default Header