import baseCss from './base.module.css';
import React, { Component } from 'react';

import fetchData from './Services/Pixabay-API';

import Button from './Components/Button/Button';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Loader from './Components/Loader/Loader';
import SearchBar from './Components/Searchbar/Serachbar';
import Modal from './Components/Modal/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    perPage: 12,
    images: [],
    error: '',
    totalHits: null,
  };

  onSubmit = value => {
    fetchData(value)
      .then(data => {
        console.log(data.hits);
        return data.hits;
      })
      .then(result => {
        console.log(result);
        this.setState({ images: result });
      });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={this.state.images} />
        {/* <Loader />
        <Button />
        <Modal></Modal> */}
      </div>
    );
  }
}

export default App;
