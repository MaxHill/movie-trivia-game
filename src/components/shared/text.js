import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 1.5em;
    font-weight: 100;
    text-align: center;

    @media (min-width: 760px) {
        font-size: 2em;
    }
`;

export const Strong = styled.span`
    font-weight: 600;
    color: #8360c3;
    background: linear-gradient(to right, #8360c3, #2ebf91);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;