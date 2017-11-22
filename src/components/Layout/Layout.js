import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Navigation from '../Navigation/Navigation';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Search from '../Search/Search';
import styles from './Layout.css';

class Layout extends Component {

    state = {
        loading: this.props.loading
    };

    componentDidMount() {
        this.timerHandler();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ loading: nextProps.loading });
        this.timerHandler();
    }

    timerHandler = () => {
        if (this.state.loading) {
            setTimeout(() => {
                this.setState({ loading: false });
            }, 3000);
        }
    };

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

export default Layout;