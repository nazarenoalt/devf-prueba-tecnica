import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
// Pages
import Home from './Pages/Home/index';
import NotFound from './Pages/NotFound/index';
import Artist from './Pages/Artist';
import ArtistNotFound from './Pages/ArtistNotFound';
// Components
import Header from './Components/Header';
// Styles
import { GlobalStyle } from './Global.style';

const App = () => {
  let { artistName } = useParams();

  return (
  <div className="App">
  <Router>
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/artist/" element={<ArtistNotFound />} />
      <Route path="/artist/:artistName" element={<Artist params={artistName} />} />
      <Route exact path="*" element={<NotFound />} />
    </Routes>
  </Router>
  <GlobalStyle />
  </div>
  );
}

export default App