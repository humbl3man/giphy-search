import React, { Component } from 'react';

import Searchbar from './components/Searchbar';
import Searchresults from './components/Searchresults';
import './components/index.css';

const API_KEY = 'dc6zaTOxFJmzC';
const ENDPOINT_URL = 'https://api.giphy.com/v1/gifs/search';

class App extends Component {

  constructor() {
    super();


    this.state = {
      searchResults: []
    }
  }

  componentWillMount() {
    this.handleSearch('bear');
  }


  handleSearch = (searchTerm) => {
    fetch(`${ENDPOINT_URL}?q=${searchTerm}&api_key=${API_KEY}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
              searchResults: [...res.data]
          });
        });
  };

  render() {
    return (
        <div className="app">
          <Searchbar handleSearch={this.handleSearch}/>
          <Searchresults results={this.state.searchResults}/>
        </div>
    );
  }
}

export default App;
