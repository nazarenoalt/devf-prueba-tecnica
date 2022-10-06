import React, { useState, useEffect } from 'react'
import axios from 'axios';
// Components
import ArtistCard from '../../Components/ArtistCard'
import ArtistNotFound from '../../Pages/ArtistNotFound'
import Loading from '../../Components/Loading';
const Artist = () => {
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get artist name from the URL
    const artistName = window.location.href.split('/').slice(-1);
    console.log(artistName);
    const API_URL = process.env.REACT_APP_API_URL + '/search.php?s=' + artistName;

    // Fetch Data
    (async function() {
      const res = await axios(API_URL);
      setLoading(false);
      setArtist(res.data.artists[0]);
    })()

  }, []);

  return (
    <>
    {loading ? <Loading /> : <>{artist === null ? <ArtistNotFound /> :  <ArtistCard artist={artist} />}</>}
    </>
  )
}

export default Artist