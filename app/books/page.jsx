'use client';
import { useState } from 'react';
import BookDetails from './BookDetails';
import BooksIndex from './BooksIndex';
import './books.scss';

const booksByIdx = {
  0: {
    title:
      'In Search of the Sacred Book: Religion and the Contemporary Latin American Novel',
    image: '/sacred-book.jpg',
    description: 'this is a book description 0',
  },
  0: {
    title: 'Redentores',
    image: '/redentores.jpeg',
    description: 'this is a book description 0',
  },
  0: {
    title: 'A Companion to Spanish American Modernismo',
    image: '/companion-modernismo.jpg',
    description: 'this is a book description 0',
  },
  1: {
    title: 'Love and Politics in the Contemporary Spanish American Novel',
    image: '/love-and-politics.jpg',
    description: 'this is a book description 1',
  },
  2: {
    title:
      'Killer Books: Writing, Violence, and Ethics in Modern Spanish American Narrative',
    image: '/killer-books.jpg',
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
