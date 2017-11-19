import React from 'react';

import Aux from '../../hoc/Aux';
import styles from './Layout.css';

const layout = ( props ) => (
    <Aux>
        {props.search ? <p>{props.search}</p> : null}
        <div>navigation and search components</div>
        <main className={styles.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;