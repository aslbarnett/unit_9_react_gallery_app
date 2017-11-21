import React from 'react';

import NavigationButton from './NavigationButton/NavigationButton';
import styles from './Navigation.css';

const navigation = (props) => {
    let navigationButtons = props.buttons.map((button, index) => {
        return <NavigationButton name={button} key={`${index}${button}`} click={props.click} />
    });

    return (
        <nav className={styles.Navigation}>
            {navigationButtons}
        </nav>
    );
};

export default navigation;