import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import Layout from '../Layout/Layout';

class DataFetching extends Component {

    state = {
        images: [],
        keyword: this.props.keyword,
        loading: true
    };


    componentDidMount() {
        this.performSearch(this.props.apiKey, this.state.keyword, this.props.limit);
    }

    componentWillReceiveProps(nextProps) {
        this.performSearch(nextProps.apiKey, nextProps.keyword, nextProps.limit);
        this.setState({ keyword: nextProps.keyword });
    }

    performSearch = (apiKey, keyword, limit) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${keyword}&per_page=${limit}&format=json&nojsoncallback=1`)
            .then(response => {
                this.setState({ images: response.data.photos.photo, loading: false });
            })
            .catch(error => console.log('Error fetching and parsing data', error));
    };

    render() {
        return (
            <Aux>
                <Layout
                    click={this.props.keywordUpdate}
                    buttons={this.props.buttonNames}
                    data={this.state.images}
                    keyword={this.state.keyword}
                    loading={this.state.loading}
                    search={this.props.search}
                />
            </Aux>
        );
    }
}

DataFetching.propTypes = {
    keywordUpdate: PropTypes.func.isRequired,
    buttonNames: PropTypes.array.isRequired,
    search: PropTypes.bool.isRequired,
    keyword: PropTypes.string.isRequired
};

export default withRouter(DataFetching);