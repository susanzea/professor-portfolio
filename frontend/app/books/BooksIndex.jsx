/* eslint-disable @next/next/no-img-element */

const BookItem = ({ idx, bookData, setSelectedBookIdx }) => {
  return (
    <div
      className="book-item"
      role="button"
      onClick={() => setSelectedBookIdx(idx)}
    >
      <img
        className="cover"
        alt={`photo of ${bookData.title}'s book cover`}
        src={bookData.image}
      />
    </div>
  );
};

const BooksIndex = ({ booksByIdx, selectedBookIdx, setSelectedBookIdx }) => {
  const keys = Object.keys(booksByIdx);

  return (
    <div id="books-index">
      {keys.map((idx) => {
        if (idx !== selectedBookIdx)
          return (
            <BookItem
              key={idx}
              idx={idx}
              bookData={booksByIdx[idx]}
              setSelectedBookIdx={setSelectedBookIdx}
            />
          );
      })}
    </div>
  );
};

export default BooksIndex;
