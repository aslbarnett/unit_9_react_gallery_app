import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import DataFetching from '../DataFetching/DataFetching';
import API_KEY from '../../config'

const BUTTONS = ['cats', 'dogs', 'birds'];

class DataPrimer extends Component {

    state = {
        apiKey: API_KEY,
        keyword: this.props.match.params.keyword !== undefined ? this.props.match.params.keyword : BUTTONS[0],
        limit: 16
    };

    updateKeyword = (event) => {
        event.preventDefault();
        const keyword = event.target.value;
        this.setState({ keyword });
        let path = `/${keyword}`;
        this.props.history.push(path);
    };

    render() {
        return (
            <DataFetching
                apiKey={this.state.apiKey}
                keyword={this.state.keyword}
                limit={this.state.limit}
                keywordUpdate={(event) => this.updateKeyword(event)}
                buttonNames={BUTTONS}
                search={this.props.search}
            />
        );
    }
}

DataPrimer.propTypes = {
    search: PropTypes.bool.isRequired
};

export default withRouter(DataPrimer);