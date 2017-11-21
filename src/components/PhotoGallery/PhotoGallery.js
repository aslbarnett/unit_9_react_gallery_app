import React from 'react';

import Aux from '../../hoc/Aux';
import Photo from './Photo/Photo';
import styles from './PhotoGallery.css';

const photoGallery = (props) => {
    const results = props.data;

    let images = results.map(image => {
        return <Photo url={image.images.fixed_height.url} key={image.id} />
    });

    return (
        <Aux>
            <h1 className={styles.Title}>{props.keyword} Gifs</h1>
            <ul className={styles.GalleryContainer}>
                {images}
            </ul>

        </Aux>
    );

};

export default photoGallery;