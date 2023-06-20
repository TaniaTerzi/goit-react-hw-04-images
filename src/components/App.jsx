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

// import React, { Component } from "react";
import { useState, useEffect } from "react";
import { fetchImages } from "./FetchImage/FetchImage.js";
import { ImageGallery } from './ImageGallery/ImageGallery.js'
import { Searchbar } from './Searchbar/Searchbar.js'
import { Modal } from "./Modal/Modal.js";
import { Button } from "./Button/Button.js";
import { Loader } from "./Loader/Loader.js";

import css from '../components/styles.css'

export const App = () => {
const [images, setimages] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [currentSearch, setCurrentSearch] = useState('')
const [pageNr, setPageNr] = useState(1);
const [modalOpen, setModalOpen] = useState(false);
const [modalImg, setModalImg] = useState('');
const [modalAlt, setModalAlt] = useState('');

  
 const handleSubmit = async e => {
    e.preventDefault();
    setIsLoading({ isLoading: true });
    const inputForSearch = e.target.elements.inputForSearch;
    if (inputForSearch.value.trim() === '') {
      alert('Введіть пошуковий запит');
      return;
    };

    const response = await fetchImages(inputForSearch.value, 1);
    setimages(response);
    setIsLoading(false);
    setCurrentSearch(inputForSearch.value);
    setPageNr(2)
    };

    const handleClickMore = async () => {
    setIsLoading({ isLoading: true });
    const response = await fetchImages(currentSearch, pageNr);
    setimages([...images, ...response]);
    setIsLoading(false);
    setPageNr(pageNr + 1);
  };

  

  const handleImageClick = e => {
    setModalOpen(true);
    setModalAlt(e.target.alt);
    setModalImg(e.target.name);
  };

 const handleModalClose = () => {
  setModalOpen(false);
  setModalImg('');
  setModalAlt('');
  };

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        handleModalClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
  }, []);

    return (
      
      <div className={css.App}>
        {isLoading ? (
          <Loader />
            ) : (
          <>
          <Searchbar onSubmit={handleSubmit} />

          <ImageGallery
            onImageClick={handleImageClick}
            images={images}
          />

    {images.length > 0 ? (
      <Button onClick={handleClickMore} />
    ) : null}
          </>

        
        )}

            {modalOpen ? (
          <Modal
            src={modalImg}
            alt={modalAlt}
            handleClose={handleModalClose}
          />
        ) : null}

      </div>
    );
  };