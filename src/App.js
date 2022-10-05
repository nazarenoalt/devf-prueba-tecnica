import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/index';
import About from './Pages/About/index';
import NotFound from './Pages/NotFound/index';
import Header from './Components/Header';
import { GlobalStyle } from './Global.style';
import Artist from './Pages/Artist';

 const App = () => {
  return (
    <div id="App">
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/artist/*" element={<Artist />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <GlobalStyle />
    </div>
  );
}

export default App