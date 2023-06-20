import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const KEY = '35754310-dc9731ff73d92a01be2931609';
export const PER_PAGE = 12;

export async function fetchImages(inputValue, pageNr)
 {
    const URL = `${BASE_URL}?q=${inputValue}&page=${pageNr}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(URL)
    return response.data.hits.map(image => {
        return {
          id: image.id,
          webformatURL: image.webformatURL,
          largeImageURL: image.largeImageURL,
          tags: image.tags,
        };
      });
};