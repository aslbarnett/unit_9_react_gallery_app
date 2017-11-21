import React from 'react';

import styles from './NavigationButton.css';

const navigationButton = (props) => {

    return (
        <input className={styles.Button} type='button' value={props.name} onClick={props.click}/>
    );
};

export default navigationButton;