import React from 'react'
import MenuIcon from '../MenuIcon/index.js';
import { Wrapper, Logo } from './Header.style.js';
const Header = () => {
  return (
    <Wrapper>
      <Logo>Artlist Catalogue</Logo>
      <MenuIcon />
    </Wrapper>
  )
}

export default Header