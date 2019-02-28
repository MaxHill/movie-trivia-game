import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Title, Strong } from './shared/text';
import { Center } from './shared/layout';

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({});

class Hud extends Component {

    render() {
        if (this.props.gameReducer.state !== 'initial') {
            return (
                <Box>
                    <Center>
                        <SpaceBetween>
                            <Title>Poäng: <Strong>{this.props.gameReducer.score}</Strong></Title>
                            <Title>Runda: <Strong>{this.props.gameReducer.round}</Strong></Title>
                        </SpaceBetween>
                    </Center>
                </Box >
            )
        }
        return "";
    }
}

const Box = styled.div`
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
        `;

const SpaceBetween = styled.div`
            display: flex;
            padding: 1rem;
            justify-content: space-between;
            width: 100%;
            max-width: 1000px;
        `;


export default connect(mapStateToProps, mapDispatchToProps)(Hud);
