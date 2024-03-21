'use client';
import { useState } from 'react';
import BookDetails from './BookDetails';
import BooksIndex from './BooksIndex';
import { booksByIdx } from './bookData';
import './books.scss';

const Books = () => {
  const [selectedBookIdx, setSelectedBookIdx] = useState(0);

  return (
    <div className={'books page'}>
      <div className="content-container">
        <BookDetails selectedBook={booksByIdx[selectedBookIdx]} />
        <BooksIndex setSelectedBookIdx={setSelectedBookIdx} />
      </div>
    </div>
  );
};

export default Books;
