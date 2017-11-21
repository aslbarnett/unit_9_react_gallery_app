import React from 'react';

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

export default photo;