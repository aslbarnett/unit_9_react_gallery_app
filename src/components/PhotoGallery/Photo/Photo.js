import React from 'react';
import PropTypes from 'prop-types';

import styles from './Photo.css';

const photo = (props) => {
    if (props.url) {
        return (
            <li className={styles.PhotoContainer}>
                <img className={styles.PhotoImage} src={props.url} alt="something" />
            </li>
        );
    } else {
        return (
            <p>There is currently no image to display</p>
        );
    }
};

photo.propTypes = {
    url: PropTypes.string
};

export default photo;