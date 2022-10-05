import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    background-color: var(--blue-violet);
    color: white;
`;

export const Logo = styled.h1`
    margin: 0;
    line-height: 80px;
    font-size: 1.5rem;

    @media screen and (min-width: 500px) {
        font-size: 2rem;
    }
`;