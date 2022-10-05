import styled from "styled-components";

export const Wrapper = styled.div`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .Searcher__submit-button {
        background: var(--blue-violet);
        border-radius: 100px;
        padding: 10px 25px;
        outline: none;
        margin-top: 100px;
        color: var(--white);
        font-size: 1.5rem;
        font-weight: bold;
        border: none;
        transition: 0.13s;
        cursor: pointer;
    }

    .Searcher__submit-button:hover {
        transform: scale(1.1);
    }


    .Searcher__input {
        padding: 10px 25px;
        border-radius: 100px;
        outline: none;
        border: 4px solid var(--blue-violet);
        font-size: 1.5rem;
        box-shadow:  0 0 25px rgba(0,0,0, 0.2);
    }
`;