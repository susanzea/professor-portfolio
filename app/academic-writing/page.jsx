'use client';
import Image from 'next/image';
import './academicWriting.scss';
import IconButton from '../shared components/Buttons/Icon/IconButton';
import { useEffect, useState, useCallback } from 'react';
import { mockData } from './mockData';
import ScrollToTopButton from '../shared components/Buttons/ScrollToTop/ScrollToTopButton';
import NoSsr from '../NoSSR';

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

const Toolbar = () => {
  return (
    <div className="toolbar">
      <div className="year">
        <div>Year</div>
        <select>
          <option>all</option>
          <option>1980-1989</option>
          <option>1990-1999</option>
          <option>2000-2009</option>
          <option>2010-2019</option>
          <option>2020-present</option>
        </select>
      </div>

      <div id="sort">
        <div>Sort by</div>
        <div>
          <button>new</button>
          <button>old</button>
        </div>
      </div>
    </div>
  );
};

const AcademicWriting = () => {
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
          <Toolbar />
          <div className="index">
            {mockData.map((itemData, i) => {
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
