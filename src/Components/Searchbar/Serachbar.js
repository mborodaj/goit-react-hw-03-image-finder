import React, { Component } from 'react';
import styles from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    value: '',
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.value);
  };

  inputChange = e => {
    const { currentTarget } = e;
    this.setState({ value: currentTarget.value });
  };

  render() {
    return (
      <header>
        <form
          className={styles.formContainer}
          action="submit"
          onSubmit={this.onSubmit}
        >
          <input
            className={styles.inputForm}
            type="text"
            placeholder="Find images"
            onChange={this.inputChange}
          />
          <button type="subnit">Search</button>
        </form>
      </header>
    );
  }
}

export default SearchBar;
