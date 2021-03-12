import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css';

function ImageGallery({ images }) {
  return (
    <ul className={styles.galleryList}>
      {images.map(image => (
        <ImageGalleryItem img={image} key={image.id} />
      ))}
    </ul>
  );
}

export default ImageGallery;
