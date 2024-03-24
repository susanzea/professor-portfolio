/* eslint-disable @next/next/no-img-element */
import IconButton from '../shared components/Buttons/Icon/IconButton';

const BookDetails = ({ selectedBook }) => {
  return (
    <div id="book-details">
      <div className="cover-container">
        <IconButton icon={'left'} />
        <img
          className="cover"
          alt={'photo of book cover'}
          src={selectedBook.image}
        />
        <IconButton icon={'right'} />
      </div>

      <div className="text">
        <h2>{selectedBook.title}</h2>
        <span>{selectedBook.description}</span>
      </div>
    </div>
  );
};

export default BookDetails;
