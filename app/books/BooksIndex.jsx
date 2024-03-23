import Image from 'next/image';

const BookItem = ({ idx, bookData, setSelectedBookIdx }) => {
  return (
    <div
      className="book-item"
      role="button"
      onClick={() => setSelectedBookIdx(idx)}
    >
      <Image
        className="cover"
        src={bookData.image}
        alt={`book cover of ${bookData.title}`}
        height={150}
        width={100}
        style={{ objectFit: 'cover' }}
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
