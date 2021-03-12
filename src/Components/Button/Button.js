import React from 'react';
import styles from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ showMore }) {
  return (
    <button className={styles.galleryBtn} onClick={showMore}>
      Show more
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
