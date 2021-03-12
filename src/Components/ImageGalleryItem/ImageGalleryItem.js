import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

function ImageGalleryItem({ img, onImgClick }) {
  const { webformatURL, tags } = img;

  return (
    <li className={styles.galleryItem}>
      <img
        className={styles.galleryImg}
        src={webformatURL}
        alt={tags}
        onClick={() => onImgClick(img)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  img: PropTypes.object.isRequired,
  onImgClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
