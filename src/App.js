import React, { Component } from 'react';
import GraphiQL from 'graphiql';
import fetch from 'isomorphic-fetch'


import logo from './logo.svg';
import './App.css';

function graphQLFetcher(graphQLParams){
  return fetch(window.location.origin + '/graphql', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      'apiToken': 'bX46shJ2z%2FxOd6tZQV1TTlFAXV14z%2BPyAA%3D%3D'
    },
    body: JSON.stringify(graphQLParams),
  })
    .then(response => response.json())
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <GraphiQL fetcher={graphQLFetcher} />
      </div>
    );
  }
}

export default App;
