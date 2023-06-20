
import propTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css'

export const Searchbar = ({ onSubmit }) => (
    <header cclassName={css.Searchbar}>
        <form onSubmit={onSubmit} className={css.SearchForm}>
            <button type="submit" className={css.SearchFormButton}>
                <span className={css.SearchFormButtonLabel}>Search</span>
            </button>

            <input
                name="inputForSearch"
                className={css.SearchFormInput}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"            
            />
        </form>
    </header>
);

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};