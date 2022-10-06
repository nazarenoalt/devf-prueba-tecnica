import styled from "styled-components";

export const Wrapper = styled.div`

position: absolute;
top: 80px;
bottom: 0;
right: 0;
left: 0;
display: flex;
flex-direction: column;
justify-content: center;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
min-height: 300px;
margin-bottom: 150px;
.text-container {
    width: 80vw;
    margin-top: 100px;
    text-align: center;
}    

.text-container p {
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--blue-violet);
    cursor: default;
}

.text-container p:nth-child(2) {
    padding-left: 5rem;
}

.text-container p:nth-child(3) {
    padding-left: 10rem;
}


`;