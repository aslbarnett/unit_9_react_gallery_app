import React, { Component } from 'react';

import DataFetching from './containers/DataFetching/DataFetching';

// app component will hold state for the keyword and API key
// when this state changes for a re-render, it will pass
// this state down as props to the data fetching component
// the data fetching component will then retrieve the correct
// images from flickr and pass the data down to the layout component
// where the data will then be displayed accordingly

// regarding headers and routing => the header will be able to
// receive props for the search component so this can be passed
// into the route for /search in due course and then only
// displayed when that component has been passed down

// there will need to be a click method passed down through the
// component tree for the change of keyword state for the re-render

// routes will also need to be programmatically added for search results

class App extends Component {
  render() {
    return (
      <div>
          <DataFetching />
      </div>
    );
  }
}

export default App;
