import React, { Component } from 'react';

import styles from './NavigationButton.css';

class NavigationButton extends Component {

    render() {
        return (
            <input className={styles.Button} type='button' value={this.props.name} onClick={this.props.click} />

        );
    }
}

export default NavigationButton;