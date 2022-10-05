import React, { useState, useEffect } from 'react'
import { Container, Wrapper } from './ArtistCard.style'

const ArtistCard = ({artist}) => {
 

  return (
    <Wrapper>
        <Container >
        <img
            src={artist.strArtistFanart}
            className="Artist-card__background-image"
        />
            <h2 className="Artist-card__artist-name">{artist.strArtist}</h2>

            <section class="biography">
                <p>{artist.strBiographyES}</p>
            </section>

            <section class="artist-data">
                <p>Generos: {artist.strGenre}</p>
                <p>Años de actividad: {artist.intFormedYear} - {artist.intDiedYear || 'presente'}</p>
                <p>productora: {artist.strLabel}</p>
                <p>pais: {artist.strCountry}</p>
                
            </section>

            
        </Container>
    </Wrapper>
  )
}

export default ArtistCard