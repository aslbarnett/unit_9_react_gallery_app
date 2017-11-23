import React from 'react';
import PropTypes from 'prop-types';

import styles from './NavigationButton.css';

const navigationButton = (props) => {
    return (
        <input className={styles.Button} type='button' value={props.name} onClick={props.click} />
    );
};

navigationButton.propTypes = {
    name: PropTypes.string.isRequired,
    click: PropTypes.func.isRequired
};

export default navigationButton;