import React from 'react'
import { Link } from 'react-router-dom'
// Styles
import { Wrapper } from './NotFound.style';

const NotFound = () => {
  return (
    <Wrapper>
      <div class="container">
        <h2>Oops! La pagina no existe</h2>
        <Link to="/">Volver al inicio</Link>
      </div>
    </Wrapper>
  )
}

export default NotFound