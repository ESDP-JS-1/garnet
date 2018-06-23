import React, { Component } from 'react';

import Layout from "./containers/Layout/Layout";
import Routes from "./Routes";


class App extends Component {
  render() {
    return (
        <Layout>
            <Routes user={this.props.user} />
        </Layout>
    );
  }
}

export default App;
