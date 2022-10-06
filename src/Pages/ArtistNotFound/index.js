import React from 'react'
import { Link } from 'react-router-dom';
// Styles
import { Wrapper } from './ArtistNotFound.style';

const ArtistNotFound = () => {
  return (
    <Wrapper>
    <div class="container">
      <h2>No encontramos al artista :(</h2>
      <Link to="/">Volver al inicio</Link>
    </div>
  </Wrapper>
  )
}

export default ArtistNotFound;
