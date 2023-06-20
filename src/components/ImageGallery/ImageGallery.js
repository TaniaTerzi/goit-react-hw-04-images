import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem.js'
import propTypes from 'prop-types';
import css from '../ImageGallery/ImageGallery.module.css'


export const ImageGallery = ({ images, onImageClick  }) => (
  <ul className={css.ImageGallery}>
    {images.map((image, index) => (
    <ImageGalleryItem onclick={onImageClick} image={image} key={index} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    })
  ),
  onImageClick: propTypes.func.isRequired,
};
