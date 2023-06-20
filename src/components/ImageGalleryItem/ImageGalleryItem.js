import propTypes from 'prop-types';
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({ image, onclick }) => (
  <li className={css.ImageGalleryItem} key={image.id} onClick={onclick}>
    <img className={css.ImageGalleryItem_image} 
        src={image.webformatURL}
        name={image.largeImageURL}
        alt={image.tags} 
        />
  </li>
);
ImageGalleryItem.propTypes = {
  image: propTypes.object.isRequired,
  onclick: propTypes.func.isRequired,
};