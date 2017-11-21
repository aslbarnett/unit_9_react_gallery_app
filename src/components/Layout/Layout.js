import React from 'react';

import Aux from '../../hoc/Aux';
import Navigation from '../Navigation/Navigation';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Search from '../Search/Search';
import styles from './Layout.css';

const layout = ( props ) => (
    <Aux>
        <header>
            {props.search ? <Search click={props.click} /> : null}
            <Navigation click={props.click} buttons={props.buttons} />
        </header>
        <main className={styles.Content}>
            <PhotoGallery data={props.data} keyword={props.keyword} />
        </main>
    </Aux>
);

export default layout;