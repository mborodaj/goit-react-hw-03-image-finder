import React from 'react';
import styles from './ImageGalleryItem.module.css';

function ImageGalleryItem({ img }) {
  const { webformatURL, tags } = img;

  return (
    <li className={styles.galleryItem}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
}

export default ImageGalleryItem;
