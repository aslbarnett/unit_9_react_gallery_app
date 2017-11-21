import React, {Component} from 'react';

import DataFetching from './containers/DataFetching/DataFetching';
import styles from './index.css';

// app component will hold state for the keyword and API key
// when this state changes for a re-render, it will pass
// this state down as props to the data fetching component
// the data fetching component will then retrieve the correct
// images from flickr and pass the data down to the layout component
// where the data will then be displayed accordingly

// regarding headers and routing => the header will be able to
// receive props for the search component so this can be passed
// into the route for /search in due course and then only
// displayed when that component has been passed down

// there will need to be a click method passed down through the
// component tree for the change of keyword state for the re-render

// routes will also need to be programmatically added for search results

const API_KEY = 'dc6zaTOxFJmzC';
const BUTTONS = ['cats', 'dogs', 'birds'];

class App extends Component {

    state = {
        apiKey: API_KEY,
        keyword: BUTTONS[0],
        limit: 16
    };

    updateKeyword = (event) => {
        event.preventDefault();
        const keyword = event.target.value;
        this.setState({ keyword });
    };

    render() {
        return (
            <div className={styles.App}>
                <DataFetching
                    apiKey={this.state.apiKey}
                    keyword={this.state.keyword}
                    limit={this.state.limit}
                    keywordUpdate={(event) => this.updateKeyword(event)}
                    buttonNames={BUTTONS}
                />
            </div>
        );
    }
}

export default App;
