import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Aux from '../../hoc/Aux';
import Navigation from '../../components/Navigation/Navigation';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import Search from '../../components/Search/Search';
import styles from './Layout.css';

class Layout extends Component {

    state = {
        loading: this.props.loading
    };

    componentDidMount() {
        this.displayLoading();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ loading: nextProps.loading });
        this.displayLoading();
    }

    displayLoading = () => {
        if (this.state.loading) {
            return <div className={styles.Loader}>Loading...</div>;
        } else {
            return <PhotoGallery data={this.props.data} keyword={this.props.keyword}/>;
        }
    };

    render() {
        return (
            <Aux>
                <header>
                    {this.props.search ? <Search click={this.props.click}/> : null}
                    <Navigation click={this.props.click} buttons={this.props.buttons}/>
                </header>
                <main className={styles.Content}>
                    {this.displayLoading()}
                </main>
            </Aux>
        );
    }
}

Layout.propTypes = {
    loading: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    keyword: PropTypes.string.isRequired,
    search: PropTypes.bool.isRequired,
    click: PropTypes.func.isRequired,
    buttons: PropTypes.array.isRequired
};

export default Layout;