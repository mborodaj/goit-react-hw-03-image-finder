import baseCss from './base.module.css';
import React, { Component } from 'react';

import styles from './App.module.css';

import fetchData from './Services/Pixabay-API';

import Button from './Components/Button/Button';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Loader from './Components/Loader/Loader';
import SearchBar from './Components/Searchbar/Serachbar';

class App extends Component {
  state = {
    searchQuery: '',
    page: 1,
    perPage: 12,
    images: [],
    totalHits: null,
    isLoading: false,
    button: true,
    galleryText: '',
  };

  componentDidUpdate() {
    window.scrollTo({
      top:
        document.documentElement.scrollTop +
        document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  }

  onSubmit = value => {
    this.setState({ images: [], galleryText: '' });
    if (value) {
      this.setState({ isLoading: true });

      fetchData(value, 1)
        .then(data => {
          console.log(data.hits);
          return data.hits;
        })
        .then(result => {
          console.log(result.length);
          if (result.length > 0) {
            this.setState({
              images: result,
              searchQuery: value,
              page: 2,
              isLoading: false,
              button: result.length === 12,
            });
          } else {
            this.setState({
              galleryText: 'Nothing was found. Please specify you request.',
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({ galleryText: 'Please enter some request' });
    }
  };

  showMore = () => {
    const { searchQuery, page, images } = this.state;

    this.setState({ isLoading: true });

    fetchData(searchQuery, page)
      .then(data => data.hits)
      .then(result =>
        this.setState({
          images: [...images, ...result],
          isLoading: false,
          button: result.length === 12,
        }),
      );
    this.setState(state => {
      return { page: state.page + 1 }; //check
    });
  };

  render() {
    console.log(this.state.images.length);
    return (
      <div>
        <SearchBar onSubmit={this.onSubmit} />

        {this.state.images.length === 0 ? (
          <h2>{this.state.galleryText}</h2>
        ) : (
          <ImageGallery images={this.state.images} />
        )}

        {this.state.isLoading && (
          <div className={styles.loader}>
            <Loader />
          </div>
        )}

        {this.state.images.length !== 0 && this.state.button && (
          <Button showMore={this.showMore} />
        )}
      </div>
    );
  }
}

export default App;
