import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'components/shared/button';
import { Title } from 'components/shared/text';
import { Center } from 'components/shared/layout';
import { sound } from 'utils';
import styled from 'styled-components';
import "confetti-js";

import {
    newRoundAction,
} from 'redux/actions/gameActions';

const mapStateToProps = state => ({ ...state })
const mapDispatchToProps = dispatch => ({
    newRound: () => dispatch(newRoundAction()),
})

class Result extends Component {
    constructor(props) {
        super(props);

        if (props.type === 'success') {
            sound.success.play();
        } else if (props.type === 'error') {
            sound.failure.play();
        }
    }

    componentDidMount() {
        if (this.props.type === 'success') {
            const confettiSettings = { target: 'background-confetti' };
            const confetti = new window.ConfettiGenerator(confettiSettings);
            confetti.render();
        }
    }

    newRound = () => {
        sound.click.play();
        console.log('new round');
        this.props.newRound();
    }

    render() {
        return (
            <div>
                <Content>
                    <Title>{this.props.children}</Title>
                    <Center>
                        <Button primary onClick={this.newRound}>Starta en ny runda</Button>
                    </Center>
                </Content>
                <ConfettiBackground id="background-confetti"></ConfettiBackground>
            </div >
        )
    }
}

const ConfettiBackground = styled.canvas`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
`
const Content = styled.div`
    position: relative;
    z-index: 2;
`
export default connect(mapStateToProps, mapDispatchToProps)(Result);
