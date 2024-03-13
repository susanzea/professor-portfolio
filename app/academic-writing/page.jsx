'use client';
import Image from 'next/image';
import './academicWriting.scss';
import IconButton from '../shared components/Buttons/Icon/IconButton';
import { useEffect, useState, useCallback } from 'react';
import { mockData } from './mockData';
import ScrollToTopButton from '../shared components/Buttons/ScrollToTop/ScrollToTopButton';
import NoSsr from '../NoSSR';
import Toolbar from './Toolbar/Toolbar';

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
  const [shownArticles, setShownArticles] = useState(mockData);

  return (
    <NoSsr>
      <div className={`academic-writing page`}>
        <div
          className="page-header"
          style={{ width: '101vw', position: 'absolute' }}
        >
          <Image
            alt="A bookshelf with a picture of Aníbal, a statuette of the letter 'A' and books."
            src="/bookshelf.jpeg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="content-container">
          <Toolbar allArticles={mockData} setShownArticles={setShownArticles} />
          <div className="index">
            {shownArticles.map((itemData, i) => {
              return <Item key={i} itemData={itemData} />;
            })}
          </div>
        </div>
        <ScrollToTopButton />
      </div>
    </NoSsr>
  );
};

export default AcademicWriting;
