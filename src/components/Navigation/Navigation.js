import React from 'react';
import PropTypes from 'prop-types';

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

navigation.propTypes = {
    buttons: PropTypes.array.isRequired,
    click: PropTypes.func.isRequired
};

export default navigation;