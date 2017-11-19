import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Layout from '../../components/Layout/Layout';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';

class DataFetching extends Component {
    render() {
        return (
            <Aux>
                <Layout>
                    <PhotoGallery />
                </Layout>
            </Aux>
        );
    }
}

export default DataFetching;