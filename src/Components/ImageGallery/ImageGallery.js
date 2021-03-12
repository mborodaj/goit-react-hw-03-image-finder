import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Modal from '../Modal/Modal';
import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    modal: false,
    modalImg: {},
  };

  togleModal = () => {
    this.setState(({ modal }) => ({
      modal: !modal,
      modalImg: {},
    }));
  };

  onImgClick = image => {
    this.togleModal();
    this.setState({ modalImg: image });
  };

  render() {
    console.log(this.props);
    const { images, onImgClick } = this.props;
    return (
      <>
        <ul className={styles.galleryList}>
          {images.map(image => (
            <ImageGalleryItem
              img={image}
              key={image.id}
              onImgClick={this.onImgClick}
            />
          ))}
        </ul>
        {this.state.modal && (
          <Modal closeModal={this.togleModal} image={this.state.modalImg} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
