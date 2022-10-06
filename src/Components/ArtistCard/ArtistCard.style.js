import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    width: 70vw;
    margin: ${props => props.isExpanded ? '80px 0px 200px' : '80px 0px'};
    border-radius: 5px;
    
    ul {
        line-height: 1.5;
    }
    .Artist-card__header {
        height: 300px;
       
        background-image: url(${props => props.backImage});
        background-size: cover;
        background-position: 50% 0vw;
    }

   

    box-shadow: 10px 10px 15px rgba(0,0,0,0.2);

    .Artist-card__body {
        padding: 25px;
        border-top: none;
    }

    .Artist-card__artist-name {
        margin-top: 0;
    }

    .Artist-card__background-image {
        width: 100%;
        height: 100%
        margin-bottom: -4px;
    }
    
    .Artist-card__biography {
        overflow: hidden;
        line-height: 1.5;
        summary {
                font-family: "Quicksand";
                font-size: 1.2rem;
                margin-top: 50px;
        }
    }

    @media screen and (min-width: 1024px) {
        margin: 80px 0px 200px;
        
        .Artist-card__header {
            height: 500px;
        }
      
        .Artist-card__gradient-container {
            background: rgb(0,0,8);
            background: linear-gradient(0deg, rgba(0,0,8,1) 0%, rgba(255,255,255,0) 50%);
            width: 100%;
            height: 100%;
        }

        .Artist-card__artist-name {
            font-size: 3rem;
        }

        ul {
            display: grid;
            grid-auto-flow: row;
            grid-template-columns: 1fr 1fr;
            font-size: 1.2rem;
        }

        .Artist-card__biography {
            margin: 50px 0;
            summary {
                font-size: 2rem;
                font-family: "Quicksand";
            }
        }
    }
`;