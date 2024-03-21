'use client';
import { useState } from 'react';
import BookDetails from './BookDetails';
import BooksIndex from './BooksIndex';
import './books.scss';

const booksByIdx = {
  0: {
    title: 'book0',
    description: 'this is a book description 0',
  },
  1: {
    title: 'book1',
    description: 'this is a book description 1',
  },
  2: {
    title: 'book2',
    description: 'this is a book description 2',
  },
};

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
