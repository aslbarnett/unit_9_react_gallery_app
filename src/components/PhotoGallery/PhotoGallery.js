import React from 'react';

import Aux from '../../hoc/Aux';
import Photo from '../Photo/Photo';

const photoGallery = () => (
    <Aux>
        <h1>This will be the title of the gallery</h1>
        <Photo />
        <Photo />
        <Photo />
    </Aux>
);

export default photoGallery;