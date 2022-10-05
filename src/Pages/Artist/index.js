import React, { useState, useEffect } from 'react'
import ArtistCard from '../../Components/ArtistCard'

const Artist = () => {
  const [artist, setArtist] = useState({});

  useEffect(() => {
      const API_URL = process.env.REACT_APP_API_URL + '/search.php?s=' + 'coldplay';
      console.log(API_URL)
      fetch(API_URL)
          .then(response => response.json())
          .then(data => {
              console.log(data.artists[0])
              setArtist(data.artists[0])
          })
  }, []);
  // I should get the JSON in this part

  return (
    <ArtistCard artist={artist} />
  )
}

export default Artist