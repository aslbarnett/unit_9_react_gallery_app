import React, { Component } from 'react';

import styles from './Search.css';

class Search extends Component {

    state = {
        searchText: ''
    };

    onInputChange = (event) => {
        this.setState({ searchText: event.target.value });
    };

    render() {
        return (
            <form className={styles.Search}>
                <input className={styles.SearchInput} type='text' onChange={this.onInputChange} />
                <button className={styles.SearchButton} type='submit' value={this.state.searchText} onClick={this.props.click}>Search</button>
            </form>
        );
    }
}

export default Search;