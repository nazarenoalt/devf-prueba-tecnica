import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// Styles
import { Wrapper } from './Searcher.style';

const Searcher = () => {
  const [artistName, setArtistName] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setArtistName(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/artist/'+artistName);
  }

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Escribe un artista ;)"
        value={artistName}
        onChange={handleInputChange}
        className="Searcher__input"
      />

      <input
        type="submit"
        value="Vamo' a buscar"
        className="Searcher__submit-button"
        onClick={handleSubmit}
      />
    </Wrapper>
  )
}

export default Searcher