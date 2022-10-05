import React from 'react'
import { Link } from 'react-router-dom';
// Styles
import { Wrapper } from './ArtistNotFound.style';
const ArtistNotFound = () => {
  return (
    <Wrapper>
        <div>Artist Not Found</div>
        <Link to='/'>Come back</Link>
    </Wrapper>
  )
}

export default ArtistNotFound