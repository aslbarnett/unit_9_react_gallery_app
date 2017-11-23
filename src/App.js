import React, {Component} from 'react';
import { withRouter, Route, Switch } from 'react-router-dom';

import DataPrimer from './containers/DataPrimer/DataPrimer';
import NotFound from './components/NotFound/NotFound';
import styles from './index.css';

class App extends Component {

    render() {
        return (
            <div className={styles.App}>
                <Switch>
                    <Route exact path='/' render={() => <DataPrimer search={false}/>} />
                    <Route path='/search' render={() => <DataPrimer search={true}/>} />
                    <Route exact path='/:keyword' render={() => <DataPrimer search={false}/>} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);







