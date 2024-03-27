'use client';
import { useState } from 'react';
import Image from 'next/image';
import IconButton from '../shared components/Buttons/Icon/IconButton';
import ScrollToTopButton from '../shared components/Buttons/ScrollToTop/ScrollToTopButton';
import Toolbar from '../shared components/WritingIndex/Toolbar/Toolbar';
import NoSsr from '../NoSSR';
import { mockData } from './mockData';
import WritingIndex from '../shared components/WritingIndex/WritingIndex';
import './academicWriting.scss';

const Item = ({ itemData }) => {
  return (
    <div className="item">
      <div>
        <h2 className="header">
          <span>{itemData.title}</span>
          <span className="pub-year">&nbsp;- {itemData.publicationYear}</span>
        </h2>
        <p>{itemData.description}</p>
      </div>
      <IconButton
        className="icon-button"
        icon="download"
        onClick={() => console.log('download')}
      />
    </div>
  );
};

const AcademicWriting = () => {
  // const [shownArticles, setShownArticles] = useState(mockData);

  return (
    <NoSsr>
      <div className={'academic-writing page'}>
        <div
          className="page-header"
          style={{ width: '101vw', position: 'absolute' }}
        >
          <Image
            alt="A bookshelf with a picture of Aníbal, a statuette of the letter 'A' and books."
            src="/bookshelf.jpeg"
            priority
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <WritingIndex allItems={mockData} />
      </div>
    </NoSsr>
  );
};

export default AcademicWriting;
