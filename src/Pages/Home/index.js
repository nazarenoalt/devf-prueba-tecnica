import React from 'react'
import Searcher from '../../Components/Searcher'
// Styles
import { Wrapper, Container } from './Home.style'
const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Searcher />
      </Container>
    </Wrapper>
  )
}

export default Home