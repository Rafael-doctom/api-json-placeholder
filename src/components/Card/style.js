import styled from 'styled-components';

export const Container = styled.div`
    margin:2rem auto;
`;

export const Card = styled.div`
    width:80vw;
    height:20vh;
    text-align:center;
    padding:1rem;
    padding-top:3rem;
    padding-bottom:4rem;
    background:tomato;
    margin:1rem auto;
    color:white;
    border-radius:10px;

    @media(max-width:768px){
        width:80vw;
        height:20vh;
        padding-top:1rem;
        padding-bottom:3rem;
    }
`;

export const ID = styled.span`

`;

export const Title = styled.h3`
    @media(max-width:375px){
        font-size:1rem;
    }
`;

export const Paragraph = styled.p`
    width:30vw;
    margin:1rem auto;
    text-align:center;

    @media(max-width:768px){
        width:50vw;
        height:20vh;
    }

    @media(max-width:425px){
        width:80vw;
        height:20vh;
        font-size:0.80rem;

    }

    @media(max-width:375px){
        font-size:0.80rem;
        width:70vw;
        height:20vh;
    }
    @media(max-width:320px){
        font-size:0.70rem;
        width:70vw;
        height:20vh;
    }
`;
