import React from 'react';

import Aux from '../../hoc/Aux';
import Photo from './Photo/Photo';
import styles from './PhotoGallery.css';

const photoGallery = (props) => {
    const results = props.data;
    let images;

    if (results.length > 0) {
        images = results.map(image => {
            return <Photo url={image.images.fixed_height.url} key={image.id} />
        });
    } else {
        images = <h1 className={styles.NoMatches}>There are no results matching your search.</h1>
    }


    return (
        <Aux>
            {results.length > 0 ? <h1 className={styles.Title}>{props.keyword} Gifs</h1> : null}
            <ul className={styles.GalleryContainer}>
                {images}
            </ul>
        </Aux>
    );

};

export default photoGallery;