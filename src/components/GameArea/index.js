import React, { Component } from 'react';
import { connect } from 'react-redux';
import Playing from './Playing';
import Result from './Result';
import { Strong } from 'components/shared/text';

import { newRoundAction } from 'redux/actions/gameActions';

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
    newRound: () => dispatch(newRoundAction()),
});

class GameArea extends Component {
    render() {
        if (this.props.gameReducer.state === 'playing') {
            return (<Playing />)
        }

        if (this.props.gameReducer.state === 'winning') {
            return (<Result type="success">Du svarade <Strong>Rätt!</Strong></Result>)
        }

        if (this.props.gameReducer.state === 'losing') {
            return (<Result type="error">Du svarade <Strong>Fel.</Strong></Result>)
        }

        return (
            <Result>Börja spela genom att trycka på knappen</Result>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameArea);
