import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from 'components/shared/button';
import { Title, Strong } from 'components/shared/text';
import { Center } from 'components/shared/layout';
import PosterSelect from 'components/PosterSelect';
import { sound } from 'utils';


import {
    setSelectedAction,
    makeGuessAction
} from 'redux/actions/gameActions';

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    setSelected: (id) => dispatch(setSelectedAction(id)),
    makeGuess: () => dispatch(makeGuessAction())
})
class Playing extends Component {
    selectingMovie = changeEvent => {
        sound.select.play();
        this.props.setSelected(changeEvent.target.value);
    };

    guess = () => this.props.makeGuess();

    render() {
        const { roundData } = this.props.gameReducer;

        const movieList = this.props.gameReducer.roundData.movies.map(movie =>
            (<PosterSelect
                key={movie.director.id}
                movie={movie}
                checked={roundData.selected === movie.director.id}
                callback={this.selectingMovie}
            ></PosterSelect>)
        );

        return (
            <Container>
                <Title>Vilken av filmerna nedan har <Strong>{roundData.question.director.name}</Strong> regiserat?</Title>
                <Grid>
                    {movieList}
                </Grid>
                <Center>
                    <Button
                        onClick={this.guess}
                        primary
                        disabled={!this.props.gameReducer.roundData.selected}>
                        Välj
                    </Button>
                </Center>
            </Container>
        )
    }
}

const Container = styled.div`
    width: 95%;
    @media (min-width: 760px) {
        width: 90%;
    }
    @media (min-width: 1000px) {
        width: 70%;
    }
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    & > label {
        flex-basis: 50%;
        @media (min-width: 400px) {
            flex-basis: 25%;
        }
        @media (min-width: 700px) {
            flex-basis: 25%;
        }
    }
`;


export default connect(mapStateToProps, mapDispatchToProps)(Playing);
