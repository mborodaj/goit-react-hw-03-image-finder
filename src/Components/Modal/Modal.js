import React, { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeModal = e => {
    if (e.target.nodeName === 'DIV') {
      this.props.closeModal();
    }
  };

  render() {
    console.log(this.props.closeModal);
    const { image } = this.props;

    return (
      <div className={styles.backdrop} onClick={this.closeModal}>
        <div className={styles.modal}>
          <img
            className={styles.modalImage}
            src={image.largeImageURL}
            alt={image.tags}
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
