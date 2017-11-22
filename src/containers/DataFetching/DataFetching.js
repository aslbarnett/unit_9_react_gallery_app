import React, { Component } from 'react';
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';

import Aux from '../../hoc/Aux';
import Layout from '../../components/Layout/Layout';
import NotFound from '../../components/NotFound/NotFound';

class DataFetching extends Component {

    state = {
        images: [],
        keyword: this.props.keyword
    };


    componentDidMount() {
        this.performSearch(this.props.apiKey, this.state.keyword, this.props.limit);
    }

    componentWillReceiveProps(nextProps) {
        this.performSearch(nextProps.apiKey, nextProps.keyword, nextProps.limit);
        this.setState({ keyword: nextProps.keyword });
    }

    performSearch = (apiKey, keyword, limit) => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${apiKey}&limit=${limit}`)
            .then(response => {
                this.setState({ images: response.data.data });
            })
            .catch(error => console.log('Error fetching and parsing data', error));
    };

    render() {
        return (
            <Aux>
                <Switch>
                    <Route exact path='/' render={() => {
                        return <Layout
                            click={this.props.keywordUpdate}
                            buttons={this.props.buttonNames}
                            data={this.state.images}
                            keyword={this.state.keyword}
                            loading={true}
                        />;
                    }} />

                    <Route path='/search' render={() => {
                        return <Layout
                            click={this.props.keywordUpdate}
                            buttons={this.props.buttonNames}
                            data={this.state.images}
                            keyword={this.state.keyword}
                            search
                            loading={true}
                        />;
                    }} />

                    <Route exact path='/:keyword' render={() => {
                        return <Layout
                            click={this.props.keywordUpdate}
                            buttons={this.props.buttonNames}
                            data={this.state.images}
                            keyword={this.state.keyword}
                            loading={true}
                        />;
                    }} />
                    <Route component={NotFound} />
                </Switch>
            </Aux>
        );
    }
}

export default DataFetching;