import React from 'react';
import styled from 'styled-components';

class PosterSelect extends React.PureComponent {
    render() {
        const { movie, checked, callback } = this.props;
        return (
            <label>
                <Hidden
                    name={`movie${movie.director.id}`}
                    id={`movie${movie.director.id}`}
                    value={movie.director.id}
                    checked={checked}
                    onChange={callback}
                    type="radio" />
                <Poster checked={checked}
                    htmlFor={`movie${movie.director.id}`}>
                    <img src={movie.coverImage}
                        alt="poster" />
                </Poster>

                <Title>{movie.title}</Title>

            </label>
        )
    }
}

const Hidden = styled.input`
   position: absolute !important;
   top: -9999px !important;
   left: -9999px !important;
`;

const Poster = styled.label`
    display: inline-block;
    border-radius: 1rem;
    padding: .7rem;
    width: 100%;
    cursor: pointer;
    ${({ checked }) => checked && `
        background: linear-gradient(to right, #8360c3, #2ebf91);
    `}
    ${Hidden}:focus ~ & {
        background: linear-gradient(to right, #8360c3, #2ebf91);
    }
    & > img {
        display: block;
        border-radius: .5rem;
        width: 100%;
    }
`;

const Title = styled.h3`
    text-align: center;
    margin: 0 0 1rem 0;
    cursor: pointer;
`

export default PosterSelect;