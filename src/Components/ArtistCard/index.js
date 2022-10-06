import { Container, Wrapper } from './ArtistCard.style';
import { useState } from 'react';

const ArtistCard = ({artist}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(!isExpanded);
    }

  return (

    <Wrapper>
        <Container isExpanded={isExpanded} backImage={artist.strArtistFanart}>
            <section className="Artist-card__header">
                <div className="Artist-card__gradient-container"></div>
            </section>
            <section className="Artist-card__body">
                <h2 className="Artist-card__artist-name">{artist.strArtist}</h2>

                <article class="artist-data">
                    <ul>
                        <li><b>Generos:</b> {artist.strGenre}</li>
                        <li><b>Actividad:</b> {artist.intFormedYear} - {artist.intDiedYear || 'presente'}</li>
                        <li><b>Productora:</b> {artist.strLabel}</li>
                        <li><b>Pais:</b> {artist.strCountry}</li>
                    </ul>
                </article>

                <article class="Artist-card__biography">
                        <details onClick={handleClick}>
                            <summary>Biografía</summary>
                            <p>{artist.strBiographyES}</p>
                        </details>
                </article>
            </section>
            
            
        </Container>
    </Wrapper>
  )
}

export default ArtistCard