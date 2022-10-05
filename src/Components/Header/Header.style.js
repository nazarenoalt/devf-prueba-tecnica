import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    background-color: var(--blue-violet);
    color: white;

    .Header__icon-container {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
    .logo {
        margin: 0;
        line-height: 80px;
        font-size: 1.5rem;
        cursor: pointer;
        color: var(--white);
        text-decoration: none;
    }

    .logo:active, logo:link {
        color: var(--white);
        text-decoration: none;
    }
    @media screen and (min-width: 500px) {
        .logo {
            font-size: 2rem;
        }
    }
`;
