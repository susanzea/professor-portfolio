/* eslint-disable @next/next/no-img-element */
import { handle } from 'express/lib/router';
import IconButton from '../shared components/Buttons/Icon/IconButton';

const BookDetails = ({ selectedBook, selectedBookIdx, setSelectedBookIdx }) => {
  const handleCycleThroughBooks = (dir) => {
    const possibleBookIdxs = [0, 1, 2, 3, 4];
    const newIdx = (selectedBookIdx - (dir === 'INC' ? -1 : 1)) % 5;
    const newBookKey = (
      newIdx < 0 ? possibleBookIdxs.length - newIdx * -1 : newIdx
    ).toString();

    setSelectedBookIdx(possibleBookIdxs[newBookKey]);
  };

  return (
    <div id="book-details">
      <div className="cover-container">
        <IconButton
          icon={'left'}
          onClick={() => handleCycleThroughBooks('INC')}
        />
        <img
          className="cover"
          alt={'photo of book cover'}
          src={selectedBook.image}
        />
        <IconButton
          icon={'right'}
          onClick={() => handleCycleThroughBooks('DEC')}
        />
      </div>

      <div className="text">
        <h2>{selectedBook.title}</h2>
        <span>{selectedBook.description}</span>
      </div>
    </div>
  );
};

export default BookDetails;
