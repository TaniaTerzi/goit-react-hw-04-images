// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import React, { Component } from "react";
import { fetchImages } from "./FetchImage/FetchImage.js";
import { ImageGallery } from './ImageGallery/ImageGallery.js'
import { Searchbar } from './Searchbar/Searchbar.js'
import { Modal } from "./Modal/Modal.js";
import { Button } from "./Button/Button.js";
import { Loader } from "./Loader/Loader.js";

import css from '../components/styles.css'


export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    currentSearch: '',
    pageNr: 1,
    modalOpen: false,
    modalImg: '',
    modalAlt: '',
    
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ isLoading: true });
    const inputForSearch = e.target.elements.inputForSearch;
    if (inputForSearch.value.trim() === '') {
      alert('Введіть пошуковий запит');
      return;
    }
    const response = await fetchImages(inputForSearch.value, 1);
    this.setState({
      images: response,
      isLoading: false,
      currentSearch: inputForSearch.value,
      pageNr: 1,
    });
  };

  handleClickMore = async () => {
    const response = await fetchImages(
      this.state.currentSearch,
      this.state.pageNr + 1
    );
    this.setState({
      images: [...this.state.images, ...response],
      pageNr: this.state.pageNr + 1,
    });
  };

  handleImageClick = e => {
    this.setState({
      modalOpen: true,
      modalAlt: e.target.alt,
      modalImg: e.target.name,
    });
  };

  handleModalClose = () => {
    this.setState({
      modalOpen: false,
      modalImg: '',
      modalAlt: '',
    });
  };

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.handleModalClose();
    }
  };

  async componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      
      <div className={css.App}>
        {this.state.isLoading ? (
          <Loader />
            ) : (
          <>
          <Searchbar onSubmit={this.handleSubmit} />

          <ImageGallery
            onImageClick={this.handleImageClick}
            images={this.state.images}
          />

    {this.state.images.length > 0 ? (
      <Button onClick={this.handleClickMore} />
    ) : null}
          </>

        
        )}

            {this.state.modalOpen ? (
          <Modal
            src={this.state.modalImg}
            alt={this.state.modalAlt}
            handleClose={this.handleModalClose}
          />
        ) : null}

      </div>
    );
  }
};